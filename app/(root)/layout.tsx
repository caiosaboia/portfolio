import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Caio Saboia — Portfolio",
  description: "Portfolio de Caio Saboia — Cientista de Dados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
