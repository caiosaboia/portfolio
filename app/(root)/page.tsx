import Link from "next/link";

export default function RootHomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Caio Saboia</h1>
        <div className="flex justify-center gap-4">
          <Link href="/pt/" className="underline font-medium">
            Versao em Portugues
          </Link>
          <Link href="/en/" className="underline font-medium">
            English Version
          </Link>
        </div>
      </div>
    </main>
  );
}
