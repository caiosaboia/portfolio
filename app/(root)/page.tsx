import Link from "next/link";
import { RootRedirect } from "@/components/RootRedirect";

export default function RootHomePage() {
  return (
    <>
      <RootRedirect />
      <main className="min-h-screen flex items-center justify-center p-6 text-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <div className="space-y-4 max-w-md">
          <h1 className="text-2xl font-bold tracking-tight">Caio Saboia</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Redirecionando para a versao de idioma recomendada... / Redirecting to your preferred language...
          </p>
          <noscript>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/pt/"
                className="text-sm font-medium underline underline-offset-4"
              >
                Versao em Portugues
              </Link>
              <Link
                href="/en/"
                className="text-sm font-medium underline underline-offset-4"
              >
                English Version
              </Link>
            </div>
          </noscript>
          <div className="pt-2 flex justify-center gap-4 text-xs">
            <Link
              href="/pt/"
              className="underline text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            >
              [PT] Continuar em Portugues
            </Link>
            <Link
              href="/en/"
              className="underline text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            >
              [EN] Continue in English
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
