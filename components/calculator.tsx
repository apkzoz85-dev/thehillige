"use client"

import { useState } from "react"
import { Calculator as CalcIcon } from "lucide-react"
import { PLAN, UNITS, fmt, fmtM } from "@/lib/site"
import { LeadButton } from "./lead-modal"

export default function Calculator() {
  const [id, setId] = useState(UNITS[3].id)
  const u = UNITS.find((x) => x.id === id) ?? UNITS[0]
  const down = (u.price * PLAN.downPct) / 100
  const rest = u.price - down
  const monthly = rest / (PLAN.years * 12)
  const quarterly = rest / (PLAN.years * 4)

  return (
    <div className="cut rounded-2xl bg-cream p-6 text-ink shadow-2xl sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg bg-tint text-cta">
          <CalcIcon className="size-5" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-deep">احسب المقدم والقسط</h3>
          <p className="text-xs text-ink/55">على أقل سعر معلن لكل نوع وحدة</p>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-2">
        {UNITS.map((x) => (
          <button
            key={x.id}
            onClick={() => setId(x.id)}
            aria-pressed={x.id === id}
            className={`rounded-lg border px-3 py-2.5 text-sm font-bold transition ${
              x.id === id ? "border-cta bg-cta text-white" : "border-ink/12 bg-white text-ink/75 hover:border-cta"
            }`}
          >
            {x.name}
          </button>
        ))}
      </div>

      <dl className="divide-y divide-ink/8 rounded-xl bg-white px-4 ring-1 ring-ink/5">
        {[
          ["سعر الوحدة يبدأ من", `${fmt(u.price)} ج`],
          [`المقدم ${PLAN.downPct}%`, `${fmt(down)} ج`],
          ["القسط الشهري التقريبي", `${fmt(monthly)} ج`],
          ["أو القسط الربع سنوي", `${fmt(quarterly)} ج`],
        ].map(([k, v], i) => (
          <div key={k} className="flex items-center justify-between gap-3 py-3.5">
            <dt className="text-sm text-ink/60">{k}</dt>
            <dd className={`font-display text-[15px] font-bold ${i === 2 ? "text-cta" : "text-deep"}`} dir="ltr">
              {v}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[11px] leading-relaxed text-ink/45">
        حساب استرشادي بأقساط متساوية على {PLAN.years} سنين بدون فوائد. الأقساط الفعلية حسب جدول سداد المطور.
      </p>

      <LeadButton
        source={`calculator-${u.id}`}
        unit={u.name}
        title={`خطة سداد ${u.name} في ذا هيلدج`}
        sub={`${u.name} من ${u.area} م² تبدأ من ${fmtM(u.price)} جنيه. سيب رقمك ونبعتلك جدول السداد والمتاح.`}
        cta="ابعتلي خطة السداد"
        className="mt-5 w-full rounded-lg bg-cta py-4 text-base font-bold text-white transition hover:bg-cta-2"
      >
        ابعتلي خطة السداد
      </LeadButton>
    </div>
  )
}
