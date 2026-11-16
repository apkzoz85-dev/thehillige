"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import LeadForm from "./lead-form"

type Opts = { source: string; unit?: string; title?: string; sub?: string; cta?: string }
const Ctx = createContext<(o: Opts) => void>(() => {})
export const useLead = () => useContext(Ctx)

const AUTO: Opts = {
  source: "popup",
  title: "استلم أسعار المرحلة الجديدة في ذا هيلدج",
  sub: "فيلات وتوين وتاون وفاميلي هاوس في قلب الشيخ زايد — مقدم 5% وتقسيط على 10 سنين. سيب رقمك ونبعتلك المتاح والأسعار على واتساب.",
  cta: "ابعتلي الأسعار",
}

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [opts, setOpts] = useState<Opts | null>(null)
  const shown = useRef(false)

  const open = useCallback((o: Opts) => {
    shown.current = true
    setOpts(o)
  }, [])

  // popup تلقائي: بعد 16 ثانية أو 55% سكرول — مرة واحدة في الجلسة، ومش وقت الكتابة
  useEffect(() => {
    let done = false
    try {
      done = !!sessionStorage.getItem("popup_seen") || !!sessionStorage.getItem("lead_done")
    } catch {}
    if (done) return
    const fire = () => {
      if (shown.current) return
      const a = document.activeElement
      if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA")) return
      shown.current = true
      try {
        sessionStorage.setItem("popup_seen", "1")
      } catch {}
      setOpts(AUTO)
      cleanup()
    }
    const onScroll = () => {
      const h = document.documentElement
      if ((h.scrollTop + window.innerHeight) / h.scrollHeight >= 0.55) fire()
    }
    const t = window.setTimeout(fire, 16000)
    window.addEventListener("scroll", onScroll, { passive: true })
    function cleanup() {
      window.clearTimeout(t)
      window.removeEventListener("scroll", onScroll)
    }
    return cleanup
  }, [])

  useEffect(() => {
    if (!opts) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpts(null)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [opts])

  return (
    <Ctx.Provider value={open}>
      {children}
      {opts && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setOpts(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-title"
            className="cut relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-cream p-6 shadow-2xl sm:rounded-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpts(null)}
              aria-label="إغلاق"
              className="absolute left-4 top-4 grid size-9 place-items-center rounded-full bg-ink/5 text-ink/60 transition hover:bg-ink/10"
            >
              <X className="size-5" />
            </button>
            <p className="latin mb-2 text-[11px] text-accent">The Hillage · Sheikh Zayed</p>
            <h2 id="lead-title" className="mb-2 pl-8 text-xl font-bold leading-snug text-deep">
              {opts.title || "اعرف الأسعار والمتاح"}
            </h2>
            {opts.sub && <p className="mb-5 text-sm leading-relaxed text-ink/65">{opts.sub}</p>}
            <LeadForm source={opts.source} unit={opts.unit} cta={opts.cta} />
          </div>
        </div>
      )}
    </Ctx.Provider>
  )
}

export function LeadButton({
  children,
  className,
  ...o
}: Opts & { children: React.ReactNode; className?: string }) {
  const open = useLead()
  return (
    <button type="button" onClick={() => open(o)} className={className}>
      {children}
    </button>
  )
}
