"use client"

import { useEffect, useState } from "react"
import { Menu, Phone, X, FileText } from "lucide-react"
import { SITE } from "@/lib/site"
import { LeadButton } from "./lead-modal"
import { CallLink, WaLink } from "./links"
import { WhatsAppIcon } from "./icons"

const NAV = [
  { t: "عن المشروع", h: "#about" },
  { t: "الوحدات والأسعار", h: "#units" },
  { t: "نظام السداد", h: "#payment" },
  { t: "الموقع", h: "#location" },
  { t: "الصور", h: "#gallery" },
  { t: "أسئلة شائعة", h: "#faq" },
]

function Wordmark({ solid }: { solid: boolean }) {
  return (
    <a href="#top" className="flex flex-col leading-none" aria-label="ذا هيلدج الشيخ زايد">
      <span className={`latin text-[17px] font-semibold tracking-[0.32em] ${solid ? "text-deep" : "text-white"}`}>
        The Hillage
      </span>
      <span className={`mt-1 text-[10.5px] font-medium ${solid ? "text-accent" : "text-white/65"}`}>
        بواسطة مدار للتطوير · الشيخ زايد
      </span>
    </a>
  )
}

export function Header() {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 30)
    fn()
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  const on = solid || menu

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        on ? "bg-cream/95 shadow-sm shadow-ink/5 backdrop-blur" : "bg-gradient-to-b from-ink/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Wordmark solid={on} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="أقسام الصفحة">
          {NAV.map((n) => (
            <a
              key={n.h}
              href={n.h}
              className={`text-sm font-medium transition ${on ? "text-ink/70 hover:text-cta" : "text-white/80 hover:text-white"}`}
            >
              {n.t}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CallLink
            label="اتصال — الهيدر"
            className={`hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold sm:flex ${on ? "text-deep" : "text-white"}`}
          >
            <Phone className="size-4" />
            <span dir="ltr">{SITE.phone}</span>
          </CallLink>
          <LeadButton
            source="header"
            title="اعرف أسعار ذا هيلدج"
            sub="سيب رقمك ونبعتلك أسعار المرحلة الجديدة والمساحات المتاحة على واتساب."
            className="rounded-lg bg-cta px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cta-2"
          >
            احجز وحدتك
          </LeadButton>
          <button
            onClick={() => setMenu((m) => !m)}
            aria-label="القائمة"
            aria-expanded={menu}
            className={`grid size-10 place-items-center rounded-lg lg:hidden ${on ? "text-deep" : "text-white"}`}
          >
            {menu ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {menu && (
        <nav className="border-t border-ink/10 bg-cream px-5 pb-5 lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.h}
              href={n.h}
              onClick={() => setMenu(false)}
              className="block border-b border-ink/5 py-3.5 text-[15px] font-medium text-ink/80"
            >
              {n.t}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export function Floaters() {
  return (
    <>
      {/* ديسكتوب */}
      <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-3 lg:flex">
        <CallLink
          label="اتصال — الزر العائم"
          className="grid size-14 place-items-center rounded-full bg-deep text-white shadow-xl transition hover:scale-105"
        >
          <Phone className="size-6" />
        </CallLink>
        <WaLink
          label="واتساب — الزر العائم"
          className="pulse grid size-14 place-items-center rounded-full bg-wa text-white shadow-xl transition hover:scale-105"
        >
          <WhatsAppIcon className="size-7" />
        </WaLink>
      </div>

      {/* موبايل */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink/10 bg-cream/95 p-2 backdrop-blur lg:hidden">
        <CallLink label="اتصال — شريط الموبايل" className="flex flex-col items-center gap-1 py-1.5 text-xs font-bold text-deep">
          <Phone className="size-5" />
          اتصال
        </CallLink>
        <WaLink label="واتساب — شريط الموبايل" className="flex flex-col items-center gap-1 py-1.5 text-xs font-bold text-wa">
          <WhatsAppIcon className="size-5" />
          واتساب
        </WaLink>
        <LeadButton
          source="mobile-bar"
          title="اعرف أسعار ذا هيلدج"
          sub="سيب رقمك ونبعتلك الأسعار والمتاح على واتساب."
          className="mx-1 flex flex-col items-center gap-1 rounded-lg bg-cta py-1.5 text-xs font-bold text-white"
        >
          <FileText className="size-5" />
          الأسعار
        </LeadButton>
      </div>
    </>
  )
}

export function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie_ok")) setShow(true)
    } catch {}
  }, [])
  if (!show) return null
  return (
    <div className="fixed inset-x-3 bottom-20 z-[60] mx-auto max-w-xl rounded-xl bg-ink p-4 text-sm text-white/85 shadow-2xl lg:bottom-6">
      <p className="leading-relaxed">
        بنستخدم الكوكيز لتحسين تجربتك وقياس أداء الإعلانات.{" "}
        <a href="/privacy" className="font-bold text-gold underline">
          سياسة الخصوصية
        </a>
      </p>
      <button
        onClick={() => {
          try {
            localStorage.setItem("cookie_ok", "1")
          } catch {}
          setShow(false)
        }}
        className="mt-3 rounded-lg bg-white px-5 py-2 text-sm font-bold text-ink"
      >
        موافق
      </button>
    </div>
  )
}
