import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({ subsets: ["latin"], weight: ['300', '400', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: "Acordes",
  description: "Ayuda para crear y estudiar acordes de guitarra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className} style={{ width: 'calc(100vw - 40px)', marginLeft: '20px' }} >{children}</body>
    </html>
  );
}
