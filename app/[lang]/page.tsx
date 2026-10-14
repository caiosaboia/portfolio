import { notFound } from "next/navigation";
import { getContent, locales } from "@/content";
import { isLocale } from "@/lib/locale";
import { Portfolio } from "@/components/Portfolio";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const content = getContent(lang);
  return <Portfolio content={content} lang={lang} />;
}
