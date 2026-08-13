import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ToastProvider } from "@/components/ui/Toast";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const RTL_LOCALES = ["fa", "ar"];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <ToastProvider position="top-right">
            <SiteHeader />
            {children}
            <SiteFooter />
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
