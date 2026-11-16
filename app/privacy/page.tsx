import type { Metadata } from "next"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "سياسة الخصوصية — ذا هيلدج الشيخ زايد",
  robots: { index: false, follow: true },
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-cream px-5 py-16">
      <article className="mx-auto max-w-2xl rounded-2xl bg-white p-8 leading-loose text-ink/75 ring-1 ring-ink/5">
        <h1 className="mb-6 text-2xl font-bold text-deep">سياسة الخصوصية</h1>
        <p>
          هذا الموقع تسويقي تديره {SITE.broker}، وليس الموقع الرسمي لشركة مدار للتطوير العقاري. عند تسجيل بياناتك (الاسم
          ورقم الموبايل ونوع الوحدة) نستخدمها فقط للتواصل معك بخصوص مشروع ذا هيلدج وإرسال الأسعار والمتاح.
        </p>
        <h2 className="mb-2 mt-6 text-lg font-bold text-deep">مشاركة البيانات</h2>
        <p>لا نبيع بياناتك ولا نشاركها مع أي جهة خارجية إلا بغرض إتمام طلبك مع المطور.</p>
        <h2 className="mb-2 mt-6 text-lg font-bold text-deep">الكوكيز والإعلانات</h2>
        <p>
          نستخدم كوكيز وأدوات Google Ads لقياس أداء الإعلانات وتحسين تجربتك. تقدر توقفها من إعدادات المتصفح في أي وقت.
        </p>
        <h2 className="mb-2 mt-6 text-lg font-bold text-deep">الأسعار</h2>
        <p>جميع الأسعار والمساحات المعروضة استرشادية وقابلة للتغيير، والتعاقد يتم مباشرة مع المطور.</p>
        <h2 className="mb-2 mt-6 text-lg font-bold text-deep">التواصل</h2>
        <p>
          لأي استفسار: <span dir="ltr">{SITE.phone}</span>
        </p>
        <a href="/" className="mt-8 inline-block font-bold text-cta underline">
          الرجوع للصفحة الرئيسية
        </a>
      </article>
    </main>
  )
}
