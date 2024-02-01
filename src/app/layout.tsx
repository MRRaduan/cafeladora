import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthorBadge from "./components/AuthorBadge";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caféladora",
  description: "Calcule seu café",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" data-theme="cafeladora">
      <body className={inter.className}>
        {children}
        <AuthorBadge />
        <Analytics />
      </body>
    </html>
  );
}
