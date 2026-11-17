/* ═══════════════════════════════════════════════════════════
   كل إعدادات الموقع في مكان واحد — عدّل هنا بس
   ═══════════════════════════════════════════════════════════ */

export const SITE = {
  domain: "https://thehillage.org", // ← غيّره للدومين الحقيقي
  name: "ذا هيلدج الشيخ زايد",
  nameLatin: "The Hillage",
  developer: "مدار للتطوير العقاري",
  developerLatin: "Madaar Developments",

  // رقم الاتصال والواتساب (اكتبه بإيدك — ماتنسخوش من واتساب)
  phone: "01119436202",
  phoneIntl: "+201119436202",
  whatsapp: "201119436202",
  waDefault: "مرحباً، أريد معرفة الأسعار والوحدات المتاحة في ذا هيلدج الشيخ زايد من مدار",

  // استقبال الليدز — Web3Forms بس
  // حط الـ Access Key هنا، أو في Vercel كـ NEXT_PUBLIC_WEB3FORMS_KEY
  // (المفتاح بيتعمل من web3forms.com بالإيميل اللي عايز الليدز توصله)
  // لو المفتاح فاضي: الفورم بيفتح واتساب برسالة فيها بيانات العميل عشان الليد مايضيعش
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",

  // Google Ads
  adsId: "",
  conversions: {
    form: "", // ← label تحويل الفورم  (مثال: "AbCdEfGh123")
    whatsapp: "", // ← label تحويل الواتساب
    call: "", // ← label تحويل المكالمة
  },

  // كريديت الإيجنسي في الفوتر
  agencyName: "One Click",
  agencyUrl: "", // ← حط رابط موقع One Click هنا (لو فاضي بيظهر الاسم من غير لينك)

  broker: "Grandeur Spaces",
} as const

export const telLink = `tel:${SITE.phoneIntl}`
export const waLink = (msg: string = SITE.waDefault) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`

/* ═══ الوحدات — مصدر واحد للكروت والفورم والحاسبة ═══ */
export type Unit = {
  id: string
  name: string
  latin: string
  area: number
  price: number // بالجنيه
  img: string
  chips: string[]
}

export const UNITS: Unit[] = [
  {
    id: "standalone",
    name: "فيلا مستقلة",
    latin: "STANDALONE VILLA",
    area: 210,
    price: 42_000_000,
    img: "/images/standalone.webp",
    chips: ["من 210 م²", "حديقة خاصة", "تشطيب كامل"],
  },
  {
    id: "twin",
    name: "توين هاوس",
    latin: "TWIN HOUSE",
    area: 191,
    price: 25_900_000,
    img: "/images/twin-house.webp",
    chips: ["من 191 م²", "حديقة خاصة", "تشطيب كامل"],
  },
  {
    id: "town",
    name: "تاون هاوس",
    latin: "TOWNHOUSE",
    area: 180,
    price: 21_800_000,
    img: "/images/townhouse.webp",
    chips: ["من 180 م²", "حديقة خاصة", "تشطيب كامل"],
  },
  {
    id: "family",
    name: "فاميلي هاوس",
    latin: "FAMILY HOUSE",
    area: 146,
    price: 21_000_000,
    img: "/images/family-house.webp",
    chips: ["من 146 م²", "أقل سعر دخول", "تشطيب كامل"],
  },
]

export const PLAN = {
  downPct: 5,
  years: 10,
  deliveryYears: 4,
  finishing: "تشطيب كامل بدون تكييفات ومطابخ",
}

export const fmtM = (n: number) => {
  const m = n / 1_000_000
  return (Number.isInteger(m) ? m.toString() : m.toFixed(1)) + " مليون"
}
export const fmt = (n: number) => Math.round(n).toLocaleString("en-US")
