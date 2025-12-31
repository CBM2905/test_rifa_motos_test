import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WizzPro | Dinámicas Digitales Interactivas",
  description: "Crea y gestiona dinámicas digitales interactivas para tu marca o comunidad. WizzPro te permite organizar campañas, experiencias y promociones online de forma fácil, segura y profesional.",
  keywords: "dinámicas digitales,campañas online,promociones,experiencias interactivas,marketing digital,engagement",
  authors: [{ name: "WizzPro" }],
  openGraph: {
    title: "WizzPro | Dinámicas Digitales Interactivas",
    description: "Crea y gestiona dinámicas digitales interactivas para tu marca o comunidad.",
    url: "https://wizzpro.com/",
    siteName: "WizzPro",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wizzpro",
    creator: "@wizzpro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
