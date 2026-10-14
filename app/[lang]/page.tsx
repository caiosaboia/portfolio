import { notFound } from "next/navigation";
import { getContent, locales } from "@/content";
import { isLocale } from "@/lib/locale";
import { Portfolio } from "@/components/Portfolio";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { ThemeToggle } from "@/components/ThemeToggle";

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
  const switchConfig = content.ui.languageSwitch;
  const themeConfig = content.ui.themeToggle;

  const headerActions = (
    <>
      <ThemeToggle ariaLabel={themeConfig.ariaLabel} />
      <LanguageSwitch
        currentLocale={lang}
        label={switchConfig.label}
        ariaLabel={switchConfig.ariaLabel}
      />
    </>
  );

  return (
    <Portfolio
      content={content}
      lang={lang}
      headerActions={headerActions}
    />
  );
}
