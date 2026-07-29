import "./globals.css";

import {
  ToastProvider,
} from "@/components/ui/Toast";

import {
  SiteHeader,
} from "@/components/layout/SiteHeader";

import {
  SiteFooter,
} from "@/components/layout/SiteFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body>
        <ToastProvider
          position="top-right"
        >
          <SiteHeader />

          {children}

          <SiteFooter />
        </ToastProvider>
      </body>
    </html>
  );
}