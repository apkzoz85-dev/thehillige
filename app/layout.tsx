import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "@fontsource-variable/alexandria"
import "@fontsource/ibm-plex-sans-arabic/400.css"
import "@fontsource/ibm-plex-sans-arabic/500.css"
import "@fontsource/ibm-plex-sans-arabic/700.css"
import "@fontsource/cormorant-garamond/500.css"
import "@fontsource/cormorant-garamond/600.css"
import "./globals.css"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "ذا هيلدج الشيخ زايد | The Hillage من مدار — أسعار المرحلة الجديدة 2026",
  description:
    "كمبوند ذا هيلدج الشيخ زايد The Hillage من مدار للتطوير العقاري (أزهى السخنة وأزهى الساحل). مرحلة جديدة: فيلات مستقلة من 42 مليون، توين هاوس من 25.9 مليون، تاون هاوس من 21.8 مليون، وفاميلي هاوس من 21 مليون. مقدم 5% وتقسيط 10 سنوات، استلام خلال 4 سنوات بتشطيب كامل.",
  keywords: [
    "ذا هيلدج الشيخ زايد",
    "كمبوند ذا هيلدج",
    "The Hillage Sheikh Zayed",
    "ذا هيلدج مدار",
    "أسعار ذا هيلدج",
    "مدار الشيخ زايد",
    "فيلات الشيخ زايد",
    "تاون هاوس الشيخ زايد",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "ذا هيلدج الشيخ زايد — مرحلة جديدة من مدار",
    description: "فيلات وتوين وتاون وفاميلي هاوس من 21 مليون — مقدم 5% وتقسيط 10 سنوات.",
    images: ["/images/aerial.webp"],
    locale: "ar_EG",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: "#36261d" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        {SITE.adsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.adsId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.adsId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
