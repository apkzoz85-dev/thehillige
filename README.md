# The Hillage — Sheikh Zayed (Madaar) Landing

Next.js 16 static landing — Arabic RTL — "لاندين مونتن فيو" style.

## كل الإعدادات في ملف واحد
`lib/site.ts`: الرقم، الإيميلات، مفتاح Web3Forms، Google Ads (AW + labels التحويل)، الدومين، لينك One Click، والوحدات والأسعار.

## الرفع على Vercel
1. امسح كل الملفات القديمة من الريبو وارفع محتوى الفولدر ده.
2. Vercel هيعمل `npm install` و `next build` لوحده.
3. (اختياري) حط `NEXT_PUBLIC_WEB3FORMS_KEY` في Environment Variables (مفتاح Web3Forms — لازم عشان الليدز توصل إيميل).
