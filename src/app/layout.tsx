import type { Metadata } from "next";
import { Lato, Pacifico } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Dolci Italiani - Ricette della Tradizione",
  description: "Scopri le migliori ricette di pasticceria italiana, con storie e istruzioni dettagliate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${lato.variable} ${pacifico.variable} font-sans bg-cream-50`}>
        {children}
      </body>
    </html>
  );
} 