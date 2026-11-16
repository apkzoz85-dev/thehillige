import { SITE } from "./site"

type Gtag = (...args: unknown[]) => void

export function track(kind: "form" | "whatsapp" | "call", label?: string) {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (!gtag) return
  const conv = SITE.conversions[kind]
  if (SITE.adsId && conv) gtag("event", "conversion", { send_to: `${SITE.adsId}/${conv}` })
  gtag("event", `click_${kind}`, { event_label: label || kind })
}

/** UTM + gclid محفوظة من أول زيارة في الجلسة */
export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {}
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"]
  const out: Record<string, string> = {}
  try {
    const p = new URLSearchParams(window.location.search)
    for (const k of keys) {
      const v = p.get(k) || sessionStorage.getItem("attr_" + k)
      if (v) {
        out[k] = v
        sessionStorage.setItem("attr_" + k, v)
      }
    }
  } catch {}
  return out
}
