import type { Metadata } from "next"
import { CheckCircle2, Phone } from "lucide-react"
import { SITE } from "@/lib/site"
import { CallLink, WaLink } from "@/components/links"
import { WhatsAppIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "شكراً لتسجيلك — ذا هيلدج الشيخ زايد",
  robots: { index: false, follow: false },
}

export default function ThankYou() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-cream px-5 py-16">
      <div className="cut w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-ink/5">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-tint text-cta">
          <CheckCircle2 className="size-8" />
        </span>
        <p className="latin mt-5 text-[11px] text-accent">The Hillage · Sheikh Zayed</p>
        <h1 className="mt-2 text-2xl font-bold text-deep">شكراً، طلبك وصل</h1>
        <p className="mt-3 leading-relaxed text-ink/65">
          مستشار مبيعات ذا هيلدج هيتواصل معاك قريب بالأسعار والمساحات المتاحة. لو مستعجل كلمنا مباشرة:
        </p>
        <div className="mt-6 grid gap-3">
          <WaLink
            label="واتساب — صفحة الشكر"
            className="flex items-center justify-center gap-2 rounded-lg bg-wa py-3.5 font-bold text-white"
          >
            <WhatsAppIcon /> واتساب
          </WaLink>
          <CallLink label="اتصال — صفحة الشكر" className="flex items-center justify-center gap-2 rounded-lg bg-deep py-3.5 font-bold text-white">
            <Phone className="size-5" /> <span dir="ltr">{SITE.phone}</span>
          </CallLink>
        </div>
        <a href="/" className="mt-6 inline-block text-sm font-bold text-cta underline">
          الرجوع للصفحة الرئيسية
        </a>
      </div>
    </main>
  )
}
