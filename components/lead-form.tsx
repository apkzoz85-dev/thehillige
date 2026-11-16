"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Send } from "lucide-react"
import { SITE, UNITS, waLink } from "@/lib/site"
import { getAttribution, track } from "@/lib/track"

const OPTIONS = [...UNITS.map((u) => u.name), "لسه بقارن"]

type Props = {
  source: string
  unit?: string
  cta?: string
  dark?: boolean
  compact?: boolean
}

export default function LeadForm({ source, unit, cta = "ابعتلي الأسعار والمتاح", dark = false, compact = false }: Props) {
  const router = useRouter()
  const [choice, setChoice] = useState(unit || "")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [hp, setHp] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (hp) return
    if (name.trim().length < 2) return setError("من فضلك اكتب اسمك.")
    const digits = phone.replace(/[^\d+]/g, "")
    if (digits.replace(/\D/g, "").length < 8) return setError("من فضلك اكتب رقم موبايل صحيح عشان نقدر نكلمك.")

    setLoading(true)
    const unitType = choice || "لم يحدد"
    const payload = {
      name: name.trim(),
      phone: digits,
      unit_type: unitType,
      source,
      project: "The Hillage — Sheikh Zayed",
      page: typeof window !== "undefined" ? window.location.href : "",
      ...getAttribution(),
    }
    const subject = `ليد جديد — ذا هيلدج الشيخ زايد — ${unitType}`

    try {
      let ok = false
      if (SITE.web3formsKey) {
        const r = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: SITE.web3formsKey, subject, from_name: "The Hillage Landing", ...payload }),
        })
        ok = r.ok
      } else {
        const r = await fetch(`https://formsubmit.co/ajax/${SITE.leadEmail}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...payload, _subject: subject, _cc: SITE.leadCc, _captcha: "false", _template: "table" }),
        })
        ok = r.ok
      }
      if (!ok) throw new Error()
      track("form", source)
      try {
        sessionStorage.setItem("lead_done", "1")
      } catch {}
      router.push("/thank-you")
    } catch {
      setLoading(false)
      setError("حصلت مشكلة في الإرسال. ابعتلنا على واتساب وهنرد عليك فوراً:")
    }
  }

  const label = dark ? "text-white/70" : "text-ink/60"
  const input = dark
    ? "border-white/25 bg-white/5 text-white placeholder:text-white/40 focus:border-gold"
    : "border-ink/15 bg-white text-ink placeholder:text-ink/35 focus:border-cta"

  return (
    <form onSubmit={submit} noValidate className="relative space-y-3.5">
      <div>
        <p className={`mb-2 text-xs font-bold ${label}`}>أنهي وحدة تهمك؟</p>
        <div className="grid grid-cols-2 gap-2">
          {OPTIONS.map((o) => {
            const on = choice === o
            return (
              <button
                key={o}
                type="button"
                onClick={() => setChoice(o)}
                aria-pressed={on}
                className={`rounded-lg border px-3 py-2.5 text-sm font-bold transition ${
                  on
                    ? "border-cta bg-cta text-white"
                    : dark
                      ? "border-white/20 text-white/80 hover:border-gold"
                      : "border-ink/12 bg-white text-ink/75 hover:border-cta hover:text-cta"
                } ${o === "لسه بقارن" ? "col-span-2" : ""}`}
              >
                {o}
              </button>
            )
          })}
        </div>
      </div>

      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "space-y-3"}>
        <label className="block">
          <span className="sr-only">الاسم</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="الاسم"
            autoComplete="name"
            className={`w-full rounded-lg border px-4 py-3.5 text-[15px] outline-none transition ${input}`}
          />
        </label>
        <label className="block">
          <span className="sr-only">رقم الموبايل</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="رقم الموبايل (واتساب)"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="rtl"
            className={`w-full rounded-lg border px-4 py-3.5 text-[15px] outline-none transition ${input}`}
          />
        </label>
      </div>

      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="pointer-events-none absolute right-0 top-0 h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      />

      {error && (
        <p className={`text-sm ${dark ? "text-gold" : "text-cta"}`}>
          {error}{" "}
          {error.includes("واتساب") && (
            <a href={waLink()} target="_blank" rel="noopener" className="font-bold underline">
              افتح واتساب
            </a>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-4 text-base font-bold text-white shadow-lg shadow-cta/25 transition hover:bg-cta-2 disabled:opacity-70"
      >
        {loading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-4 -scale-x-100" />}
        {loading ? "جاري الإرسال…" : cta}
      </button>
      <p className={`text-center text-[11px] ${dark ? "text-white/45" : "text-ink/45"}`}>
        بياناتك آمنة ومش هتتشارك مع أي جهة. الرد خلال دقائق في مواعيد العمل.
      </p>
    </form>
  )
}
