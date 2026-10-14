import type { Metadata, Viewport } from "next";
import { Locale, getContent, locales } from "@/content";
import { localeHtmlLangMap, isLocale } from "@/lib/locale";
import { antiFlashScript } from "@/lib/theme";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(isLocale(lang) ? lang : "pt");
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Locale = isLocale(lang) ? lang : "pt";
  const htmlLang = localeHtmlLangMap[validLang];

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://github.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.kaggle.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: antiFlashScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
