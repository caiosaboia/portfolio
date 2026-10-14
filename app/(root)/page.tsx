import Link from "next/link";
import { RootRedirect } from "@/components/RootRedirect";

export default function RootHomePage() {
  return (
    <>
      <RootRedirect />
      <main className="min-h-screen flex items-center justify-center p-6 text-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
        <div className="space-y-4 max-w-md p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xs">
          <h1 className="text-2xl font-bold tracking-tight font-mono">Caio Saboia</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-pretty">
            Redirecionando para a versao de idioma recomendada... / Redirecting to your preferred language...
          </p>
          <noscript>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/pt/"
                className="text-xs font-mono font-medium underline underline-offset-4"
              >
                Versao em Portugues
              </Link>
              <Link
                href="/en/"
                className="text-xs font-mono font-medium underline underline-offset-4"
              >
                English Version
              </Link>
            </div>
          </noscript>
          <div className="pt-2 flex justify-center gap-3 text-xs font-mono">
            <Link
              href="/pt/"
              className="px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              [PT] Continuar em Portugues
            </Link>
            <Link
              href="/en/"
              className="px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              [EN] Continue in English
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
