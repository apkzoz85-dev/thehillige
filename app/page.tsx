import {
  ArrowLeft,
  Building2,
  CalendarCheck,
  Dumbbell,
  FileDown,
  KeyRound,
  Landmark,
  MapPin,
  PaintRoller,
  Phone,
  ShoppingBag,
  Sparkles,
  Trees,
  Waves,
  Wallet,
  Plus,
} from "lucide-react"
import { PLAN, SITE, UNITS, fmtM } from "@/lib/site"
import { LeadButton, LeadProvider } from "@/components/lead-modal"
import LeadForm from "@/components/lead-form"
import Reveal from "@/components/reveal"
import Calculator from "@/components/calculator"
import { CookieBanner, Floaters, Header } from "@/components/chrome"
import { CallLink, WaLink } from "@/components/links"
import { WhatsAppIcon } from "@/components/icons"

/* ══════════ المحتوى ══════════ */

const FAQ = [
  {
    q: "ما هو كمبوند ذا هيلدج الشيخ زايد؟",
    a: "ذا هيلدج The Hillage مشروع سكني من مدار للتطوير العقاري في قلب مدينة الشيخ زايد على مساحة 100 فدان، بنسبة بناء 11% فقط وأكثر من 50 فدان حدائق ومساحات خضراء، ونادي رياضي على 10 فدان ومنطقة تجارية على 12 فدان.",
  },
  {
    q: "ما أسعار ذا هيلدج في المرحلة الجديدة؟",
    a: "الفيلا المستقلة من 210 م² تبدأ من 42 مليون جنيه، التوين هاوس من 191 م² يبدأ من 25.9 مليون، التاون هاوس من 180 م² يبدأ من 21.8 مليون، والفاميلي هاوس من 146 م² يبدأ من 21 مليون جنيه.",
  },
  {
    q: "ما نظام السداد في ذا هيلدج؟",
    a: "مقدم 5% فقط والباقي تقسيط على 10 سنوات.",
  },
  {
    q: "ما موعد الاستلام ومستوى التشطيب؟",
    a: "الاستلام خلال 4 سنوات، والوحدات بتشطيب كامل بدون تكييفات ومطابخ.",
  },
  {
    q: "من هو مطور ذا هيلدج؟",
    a: "مدار للتطوير العقاري، صاحبة مشروعات أزهى العين السخنة وأزهى الساحل الشمالي.",
  },
  {
    q: "أين يقع ذا هيلدج؟",
    a: "في قلب مدينة الشيخ زايد، على بعد دقائق من كل الخدمات الرئيسية وبالقرب من طريق مصر إسكندرية الصحراوي.",
  },
  {
    q: "هل ده الموقع الرسمي لشركة مدار؟",
    a: `لا. ده موقع تسويقي تديره ${SITE.broker}، والأسعار المعروضة استرشادية وقابلة للتغيير، والتعاقد بيتم مباشرة مع المطور.`,
  },
]

const STEPS = [
  { n: "01", t: "اختار وحدتك", d: "فيلا مستقلة، توين، تاون أو فاميلي هاوس — كلها في مرحلة الطرح الجديدة." },
  { n: "02", t: `مقدم ${PLAN.downPct}% بس`, d: "أقل مقدم يدخلك قلب الشيخ زايد في مشروع من مدار." },
  { n: "03", t: `تقسيط ${PLAN.years} سنين`, d: "باقي ثمن الوحدة على أقساط ممتدة لـ 10 سنوات." },
  { n: "04", t: `استلام خلال ${PLAN.deliveryYears} سنين`, d: "تشطيب كامل بدون تكييفات ومطابخ — تختار مطبخك وتكييفك على ذوقك." },
]

const AMENITIES = [
  { i: Trees, t: "+50 فدان حدائق", d: "أكثر من نص المشروع لاندسكيب ومساحات خضراء" },
  { i: Dumbbell, t: "نادي رياضي 10 فدان", d: "ملاعب ومرافق رياضية داخل الكمبوند" },
  { i: ShoppingBag, t: "12 فدان تجاري", d: "محلات وخدمات يومية جوه المشروع" },
  { i: Building2, t: "نسبة بناء 11%", d: "كثافة منخفضة وخصوصية أعلى" },
  { i: KeyRound, t: "1000 وحدة فقط", d: "مجتمع محدود العدد وهادي" },
  { i: Landmark, t: "4 بوابات رئيسية", d: "دخول وخروج سهل من كل الاتجاهات" },
  { i: Waves, t: "مسطحات مائية", d: "بحيرات وممرات مائية بين الوحدات" },
  { i: PaintRoller, t: "تشطيب كامل", d: "استلام جاهز بدون تكييفات ومطابخ" },
]

const LIFESTYLE = [
  { img: "/images/landscape.webp", t: "ممرات مائية وحدائق", s: "WATER & GREEN" },
  { img: "/images/lake.webp", t: "بحيرات بين البيوت", s: "LAKESIDE LIVING" },
  { img: "/images/lifestyle.webp", t: "إطلالات مفتوحة", s: "OPEN VIEWS" },
  { img: "/images/main-gate.webp", t: "البوابة الرئيسية", s: "MAIN GATE" },
]

const GALLERY = [
  { src: "/images/aerial.webp", alt: "منظر جوي لكمبوند ذا هيلدج الشيخ زايد وقت الغروب", c: "col-span-2 row-span-2" },
  { src: "/images/standalone.webp", alt: "فيلا مستقلة في ذا هيلدج الشيخ زايد", c: "" },
  { src: "/images/lake.webp", alt: "بحيرة ومساحات خضراء في ذا هيلدج", c: "row-span-2" },
  { src: "/images/twin-house.webp", alt: "توين هاوس في ذا هيلدج من مدار", c: "" },
  { src: "/images/townhouse.webp", alt: "تاون هاوس على الممرات المائية في ذا هيلدج", c: "col-span-2" },
  { src: "/images/family-house.webp", alt: "مباني الفاميلي هاوس في ذا هيلدج الشيخ زايد", c: "" },
  { src: "/images/lifestyle.webp", alt: "إطلالة على المسطحات المائية في ذا هيلدج", c: "" },
  { src: "/images/landscape.webp", alt: "لاندسكيب كمبوند ذا هيلدج", c: "col-span-2" },
  { src: "/images/main-gate.webp", alt: "بوابة ذا هيلدج الرئيسية", c: "col-span-2" },
]

const NEARBY = [
  "طريق مصر إسكندرية الصحراوي",
  "سوديك ويست",
  "بيفرلي هيلز",
  "أليجريا",
  "ووك أوف كايرو",
  "نادي الأهلي الشيخ زايد",
]

/* ══════════ أجزاء صغيرة ══════════ */

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 flex items-center gap-3 text-sm font-bold ${light ? "text-gold" : "text-accent"}`}>
      <span className={`h-px w-8 ${light ? "bg-gold" : "bg-accent"}`} />
      {children}
    </p>
  )
}

const btnWa =
  "flex items-center justify-center gap-2 rounded-lg bg-wa px-4 py-3 text-sm font-bold text-white transition hover:brightness-110"
const btnCall =
  "flex items-center justify-center gap-2 rounded-lg bg-deep px-4 py-3 text-sm font-bold text-white transition hover:bg-ink"

/* ══════════ الصفحة ══════════ */

export default function Page() {
  const minPrice = Math.min(...UNITS.map((u) => u.price))

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Residence",
      name: "ذا هيلدج الشيخ زايد — The Hillage",
      description: "كمبوند سكني من مدار للتطوير العقاري في الشيخ زايد على 100 فدان.",
      address: { "@type": "PostalAddress", addressLocality: "الشيخ زايد", addressRegion: "الجيزة", addressCountry: "EG" },
    },
  ]

  return (
    <LeadProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main id="top">
        {/* ═════ HERO ═════ */}
        <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aerial.webp"
            alt="منظر جوي لكمبوند ذا هيلدج الشيخ زايد من مدار"
            className="absolute inset-0 -z-10 size-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-l from-ink/90 via-ink/65 to-ink/30" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-32">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                <MapPin className="size-4 text-gold" />
                قلب الشيخ زايد · مدار للتطوير العقاري
              </p>
              <p className="mb-4 inline-flex items-center gap-2 rounded-md bg-cta px-3 py-1.5 text-sm font-bold">
                <Sparkles className="size-4" />
                طرح مرحلة جديدة
              </p>
              <h1 className="text-[2.6rem] font-bold leading-[1.15] sm:text-6xl lg:text-[4.1rem]">
                ذا هيلدج الشيخ زايد
                <span className="mt-2 block text-gold">بيتك في قلب زايد</span>
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
                من صاحبة أزهى العين السخنة وأزهى الساحل الشمالي: فيلات مستقلة وتوين هاوس وتاون هاوس وفاميلي هاوس على 100 فدان،
                بتشطيب كامل ومقدم {PLAN.downPct}% وتقسيط على {PLAN.years} سنين.
              </p>

              <dl className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-x-reverse divide-white/15 overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
                {[
                  ["يبدأ من", fmtM(minPrice).replace(" مليون", ""), "مليون ج"],
                  ["مقدم", `${PLAN.downPct}%`, "فقط"],
                  ["تقسيط", `${PLAN.years}`, "سنين"],
                ].map(([k, v, s]) => (
                  <div key={k} className="px-3 py-4 text-center sm:px-5">
                    <dt className="text-xs text-white/60">{k}</dt>
                    <dd className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                      {v} <span className="text-sm font-medium text-gold">{s}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex max-w-xl flex-wrap gap-3">
                <WaLink label="واتساب — الهيرو" className={`${btnWa} flex-1 px-6 py-4 text-base`}>
                  <WhatsAppIcon /> كلمنا واتساب
                </WaLink>
                <CallLink
                  label="اتصال — الهيرو"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-4 text-base font-bold backdrop-blur transition hover:bg-white/20"
                >
                  <Phone className="size-5" /> <span dir="ltr">{SITE.phone}</span>
                </CallLink>
              </div>
            </div>

            <div id="register" className="cut rounded-2xl bg-cream p-6 text-ink shadow-2xl sm:p-8">
              <p className="latin mb-2 text-[11px] text-accent">New Phase · The Hillage</p>
              <h2 className="text-xl font-bold text-deep sm:text-2xl">استلم أسعار المرحلة الجديدة</h2>
              <p className="mb-5 mt-1.5 text-sm text-ink/60">سجل في 20 ثانية ونبعتلك الأسعار والمساحات المتاحة على واتساب.</p>
              <LeadForm source="hero" />
            </div>
          </div>
        </section>

        {/* ═════ ABOUT ═════ */}
        <section id="about" className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <Eyebrow>عن المشروع</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight text-deep sm:text-[2.6rem]">
                كمبوند ذا هيلدج الشيخ زايد
                <span className="block text-accent">مرحلة جديدة من مدار</span>
              </h2>
              <p className="mt-6 text-[17px] leading-loose text-ink/75">
                أعلنت مدار للتطوير العقاري، صاحبة مشروعات أزهى العين السخنة وأزهى الساحل الشمالي، عن طرح مرحلة جديدة من الوحدات
                السكنية في ذا هيلدج بقلب مدينة الشيخ زايد. المشروع على 100 فدان بنسبة بناء 11% بس، وأكثر من 50 فدان حدائق
                ومسطحات مائية، ونادي رياضي على 10 فدان، و1000 وحدة فقط.
              </p>
              <p className="mt-4 text-[17px] leading-loose text-ink/75">
                المرحلة الجديدة فيها 4 أنواع وحدات: فيلات مستقلة، توين هاوس، تاون هاوس، وفاميلي هاوس — كلها بتشطيب كامل
                ومقدم {PLAN.downPct}% وتقسيط على {PLAN.years} سنين.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["100", "فدان مساحة المشروع"],
                  ["+50", "فدان حدائق ومياه"],
                  ["1000", "وحدة فقط"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-cream p-4 text-center ring-1 ring-ink/5">
                    <p className="font-display text-3xl font-bold text-cta">{v}</p>
                    <p className="mt-1 text-xs leading-snug text-ink/60">{l}</p>
                  </div>
                ))}
              </div>
              <LeadButton
                source="about"
                title="اعرف تفاصيل ذا هيلدج"
                sub="سيب رقمك ونبعتلك البروشور والأسعار والمساحات المتاحة."
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3.5 font-bold text-white transition hover:bg-cta-2"
              >
                اطلب التفاصيل الكاملة <ArrowLeft className="size-4" />
              </LeadButton>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="cut-lg overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/main-gate.webp"
                  alt="البوابة الرئيسية لكمبوند ذا هيلدج الشيخ زايد"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 right-6 rounded-xl bg-deep px-5 py-4 text-white shadow-xl">
                <p className="latin text-[11px] text-gold">The Hillage</p>
                <p className="mt-1 text-sm font-bold">Sheikh Zayed · Madaar</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═════ UNITS ═════ */}
        <section id="units" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold text-accent">الوحدات والأسعار</p>
              <h2 className="text-3xl font-bold text-deep sm:text-[2.6rem]">أسعار ذا هيلدج الشيخ زايد 2026</h2>
              <p className="mt-4 text-ink/65">
                4 أنواع وحدات في المرحلة الجديدة — {PLAN.finishing}، مقدم {PLAN.downPct}% وتقسيط {PLAN.years} سنين.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {UNITS.map((u, i) => (
                <Reveal key={u.id} delay={i * 80} as="article" className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 shadow-sm">
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={u.img} alt={`${u.name} في ذا هيلدج الشيخ زايد`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                    <span className="latin absolute right-3 top-3 rounded-md bg-ink/75 px-2.5 py-1.5 text-[10px] text-white backdrop-blur">
                      {u.latin}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-bold text-deep">{u.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {u.chips.map((c) => (
                        <span key={c} className="rounded-full bg-tint px-2.5 py-1 text-xs font-medium text-ink/70">
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 rounded-xl bg-cream px-4 py-3">
                      <p className="text-xs text-ink/55">السعر يبدأ من</p>
                      <p className="font-display text-2xl font-bold text-cta">
                        {fmtM(u.price)} <span className="text-sm font-medium text-ink/60">جنيه</span>
                      </p>
                      <p className="mt-0.5 text-xs text-ink/50">
                        مقدم {PLAN.downPct}% · {PLAN.years} سنين
                      </p>
                    </div>
                    <div className="mt-auto pt-5">
                      <LeadButton
                        source={`unit-${u.id}`}
                        unit={u.name}
                        title={`المساحات والمتاح — ${u.name}`}
                        sub={`${u.name} في ذا هيلدج من ${u.area} م² وتبدأ من ${fmtM(u.price)} جنيه. سيب رقمك ونبعتلك المساحات المتاحة وخطة السداد.`}
                        cta="ابعتلي المتاح"
                        className="w-full rounded-lg bg-cta py-3.5 text-[15px] font-bold text-white transition hover:bg-cta-2"
                      >
                        اعرف المساحات والمتاح
                      </LeadButton>
                      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                        <WaLink
                          msg={`مرحباً، عايز أعرف المساحات والأسعار المتاحة لـ ${u.name} في ذا هيلدج الشيخ زايد`}
                          label={`واتساب — ${u.name}`}
                          className={btnWa}
                        >
                          <WhatsAppIcon /> واتساب
                        </WaLink>
                        <CallLink label={`اتصال — ${u.name}`} className={btnCall}>
                          <Phone className="size-4" /> اتصال
                        </CallLink>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-ink/45">* الأسعار استرشادية وتبدأ من أقل مساحة، وقابلة للتغيير حسب المطور والمتاح.</p>
          </div>
        </section>

        {/* ═════ PAYMENT ═════ */}
        <section id="payment" className="relative overflow-hidden bg-deep py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
            <Reveal>
              <Eyebrow light>نظام السداد</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight sm:text-[2.6rem]">
                مقدم {PLAN.downPct}% وتقسيط {PLAN.years} سنين
                <span className="block text-gold">واستلام خلال {PLAN.deliveryYears} سنين</span>
              </h2>
              <ol className="mt-10 grid gap-4 sm:grid-cols-2">
                {STEPS.map((s) => (
                  <li key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="font-latin text-3xl font-semibold text-gold">{s.n}</span>
                    <h3 className="mt-2 text-lg font-bold">{s.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{s.d}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={120}>
              <Calculator />
            </Reveal>
          </div>
        </section>

        {/* ═════ LIFESTYLE ═════ */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mb-12 max-w-2xl">
              <Eyebrow>الحياة في ذا هيلدج</Eyebrow>
              <h2 className="text-3xl font-bold text-deep sm:text-[2.6rem]">نص المشروع أخضر ومياه</h2>
              <p className="mt-4 text-ink/65">
                نسبة بناء 11% بس معناها إن أغلب البيوت بتطل على حدائق وممرات مائية، مش على مبنى قصادها.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {LIFESTYLE.map((l, i) => (
                <Reveal key={l.s} delay={i * 70} className="group relative overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.img}
                    alt={`${l.t} — ذا هيلدج الشيخ زايد`}
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="latin text-[10px] text-gold">{l.s}</p>
                    <p className="mt-1 font-bold text-white">{l.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {AMENITIES.map(({ i: Icon, t, d }, k) => (
                <Reveal key={t} delay={k * 50} className="rounded-2xl bg-cream p-5 ring-1 ring-ink/5">
                  <span className="grid size-11 place-items-center rounded-xl bg-tint text-cta">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-deep">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═════ MID CTA ═════ */}
        <section className="relative isolate overflow-hidden py-20 text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/townhouse.webp" alt="" className="absolute inset-0 -z-10 size-full object-cover" loading="lazy" />
          <div className="absolute inset-0 -z-10 bg-ink/75" />
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">الوحدات في المرحلة الجديدة محدودة</h2>
            <p className="mt-4 text-lg text-white/80">
              1000 وحدة بس في المشروع كله. احجز معاد واعرف المتاح قبل ما الأسعار تتحرك.
            </p>
            <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <LeadButton
                source="mid-cta"
                title="احجز وحدتك في ذا هيلدج"
                sub="سيب رقمك وهنكلمك بالمتاح في المرحلة الجديدة وأفضل خطة سداد."
                className="flex-1 rounded-lg bg-cta py-4 font-bold transition hover:bg-cta-2"
              >
                احجز وحدتك دلوقتي
              </LeadButton>
              <WaLink label="واتساب — منتصف الصفحة" className={`${btnWa} flex-1 py-4 text-base`}>
                <WhatsAppIcon /> واتساب
              </WaLink>
            </div>
          </div>
        </section>

        {/* ═════ LOCATION ═════ */}
        <section id="location" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <Eyebrow>الموقع</Eyebrow>
              <h2 className="text-3xl font-bold text-deep sm:text-[2.6rem]">موقع ذا هيلدج في قلب الشيخ زايد</h2>
              <p className="mt-5 leading-loose text-ink/70">
                المشروع في قلب مدينة الشيخ زايد، على بعد دقائق من كل الخدمات الرئيسية، وقريب من طريق مصر إسكندرية الصحراوي
                وأهم كمبوندات ومولات المنطقة.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["5", "دقائق من الخدمات الرئيسية"],
                  ["4", "بوابات رئيسية"],
                  ["100", "فدان في قلب زايد"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-white p-4 text-center ring-1 ring-ink/5">
                    <p className="font-display text-3xl font-bold text-cta">{v}</p>
                    <p className="mt-1 text-xs leading-snug text-ink/60">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm font-bold text-deep">بالقرب من:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {NEARBY.map((n) => (
                  <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm text-ink/75 ring-1 ring-ink/8">
                    <MapPin className="size-3.5 text-accent" /> {n}
                  </span>
                ))}
              </div>
              <LeadButton
                source="location-visit"
                title="احجز معاينة لذا هيلدج"
                sub="سيب رقمك ونرتب معاك معاد زيارة للموقع ومقابلة مع مستشار مبيعات."
                cta="احجز المعاينة"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-deep px-6 py-3.5 font-bold text-white transition hover:bg-ink"
              >
                <CalendarCheck className="size-5" /> احجز معاينة للموقع
              </LeadButton>
            </Reveal>
            <Reveal delay={120} className="cut-lg overflow-hidden rounded-2xl bg-sand ring-1 ring-ink/5">
              <iframe
                title="موقع الشيخ زايد على الخريطة"
                src="https://www.google.com/maps?q=Sheikh+Zayed+City,+Giza,+Egypt&z=12&output=embed"
                className="h-[380px] w-full lg:h-full lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>

        {/* ═════ BROCHURE ═════ */}
        <section className="relative isolate overflow-hidden bg-ink py-20 text-white lg:py-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/aerial.webp" alt="" className="absolute inset-0 -z-10 size-full scale-110 object-cover opacity-40 blur-md" loading="lazy" />
          <Reveal className="mx-auto max-w-2xl px-5 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10 text-gold">
              <FileDown className="size-7" />
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">بروشور وماستر بلان ذا هيلدج</h2>
            <p className="mt-4 text-white/75">سجل بياناتك ونبعتلك البروشور الكامل والماستر بلان وقائمة الأسعار على واتساب.</p>
            <LeadButton
              source="brochure"
              title="ابعتلي بروشور ذا هيلدج"
              sub="هنبعتلك البروشور والماستر بلان وقائمة الأسعار على واتساب."
              cta="ابعتلي البروشور"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cta px-8 py-4 font-bold transition hover:bg-cta-2"
            >
              <FileDown className="size-5" /> حمّل البروشور
            </LeadButton>
          </Reveal>
        </section>

        {/* ═════ GALLERY ═════ */}
        <section id="gallery" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold text-accent">الصور</p>
              <h2 className="text-3xl font-bold text-deep sm:text-[2.6rem]">صور ذا هيلدج الشيخ زايد</h2>
            </Reveal>
            <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] lg:grid-cols-4">
              {GALLERY.map((g) => (
                <div key={g.src + g.c} className={`group overflow-hidden rounded-2xl ${g.c}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={g.alt} className="size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-ink/45">الصور تعبيرية من المطور.</p>
          </div>
        </section>

        {/* ═════ DEVELOPER ═════ */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal className="order-2 lg:order-1">
              <div className="cut-lg overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/lifestyle.webp" alt="ذا هيلدج من مدار للتطوير العقاري" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <Eyebrow>المطور</Eyebrow>
              <h2 className="text-3xl font-bold text-deep sm:text-[2.6rem]">مدار للتطوير العقاري</h2>
              <p className="latin mt-2 text-sm text-accent">Madaar Developments</p>
              <ul className="mt-7 space-y-4">
                {[
                  ["أزهى العين السخنة", "مشروع مدار على ساحل العين السخنة."],
                  ["أزهى الساحل الشمالي", "مشروع مدار على الساحل الشمالي."],
                  ["ذا هيلدج الشيخ زايد", "مشروع مدار السكني في قلب مدينة الشيخ زايد — والمرحلة الجديدة مطروحة دلوقتي."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                    <span className="mt-1 h-10 w-1 shrink-0 rounded-full bg-cta" />
                    <div>
                      <h3 className="font-bold text-deep">{t}</h3>
                      <p className="mt-1 text-sm text-ink/60">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ═════ FAQ ═════ */}
        <section id="faq" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <Reveal className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold text-accent">أسئلة شائعة</p>
              <h2 className="text-3xl font-bold text-deep sm:text-[2.6rem]">كل اللي محتاج تعرفه عن ذا هيلدج</h2>
            </Reveal>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details key={f.q} className="group rounded-2xl bg-cream ring-1 ring-ink/5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-deep">
                    {f.q}
                    <Plus className="faq-icon size-5 shrink-0 text-cta transition" />
                  </summary>
                  <p className="px-5 pb-5 leading-loose text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═════ FINAL CTA ═════ */}
        <section className="relative isolate overflow-hidden bg-deep py-20 text-white lg:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lake.webp" alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-25" loading="lazy" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <Eyebrow light>ابدأ دلوقتي</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight sm:text-[2.8rem]">احجز وحدتك في ذا هيلدج الشيخ زايد</h2>
              <p className="mt-5 text-lg text-white/75">
                يبدأ من {fmtM(minPrice)} جنيه · مقدم {PLAN.downPct}% · تقسيط {PLAN.years} سنين · استلام خلال {PLAN.deliveryYears} سنين
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <WaLink label="واتساب — النهاية" className={`${btnWa} px-6 py-4 text-base`}>
                  <WhatsAppIcon /> واتساب
                </WaLink>
                <CallLink
                  label="اتصال — النهاية"
                  className="flex items-center gap-2 rounded-lg border border-white/30 px-6 py-4 font-bold transition hover:bg-white/10"
                >
                  <Phone className="size-5" /> <span dir="ltr">{SITE.phone}</span>
                </CallLink>
              </div>
            </Reveal>
            <Reveal delay={120} className="cut rounded-2xl bg-cream p-6 text-ink shadow-2xl sm:p-8">
              <h3 className="text-xl font-bold text-deep">سجل وهنكلمك</h3>
              <p className="mb-5 mt-1.5 text-sm text-ink/60">مستشار مبيعات ذا هيلدج هيرد على كل أسئلتك.</p>
              <LeadForm source="final" cta="سجل اهتمامك" />
            </Reveal>
          </div>
        </section>
      </main>

      {/* ═════ FOOTER ═════ */}
      <footer className="bg-ink pb-28 pt-12 text-white/60 lg:pb-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
            <div>
              <p className="latin text-lg font-semibold text-white">The Hillage</p>
              <p className="mt-1 text-sm">ذا هيلدج الشيخ زايد · مدار للتطوير العقاري</p>
            </div>
            <div className="flex gap-3">
              <WaLink label="واتساب — الفوتر" className={btnWa}>
                <WhatsAppIcon /> واتساب
              </WaLink>
              <CallLink label="اتصال — الفوتر" className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-bold text-white">
                <Phone className="size-4" /> <span dir="ltr">{SITE.phone}</span>
              </CallLink>
            </div>
          </div>
          <div className="space-y-2 py-6 text-xs leading-relaxed">
            <p>
              هذا موقع تسويقي تديره {SITE.broker} وليس الموقع الرسمي لشركة مدار للتطوير العقاري. جميع العلامات التجارية مملوكة
              لأصحابها.
            </p>
            <p>الأسعار والمساحات المعروضة استرشادية وقابلة للتغيير دون إشعار، ويتم التعاقد مباشرة مع المطور. الصور تعبيرية.</p>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
            <p>
              © {new Date().getFullYear()} {SITE.broker} ·{" "}
              <a href="/privacy" className="underline hover:text-white">
                سياسة الخصوصية
              </a>
            </p>
            <p dir="ltr">
              Designed &amp; Managed by{" "}
              {SITE.agencyUrl ? (
                <a href={SITE.agencyUrl} target="_blank" rel="nofollow noopener" className="font-bold text-white/80 hover:text-white">
                  {SITE.agencyName}
                </a>
              ) : (
                <span className="font-bold text-white/80">{SITE.agencyName}</span>
              )}
            </p>
          </div>
        </div>
      </footer>

      <Floaters />
      <CookieBanner />
    </LeadProvider>
  )
}
