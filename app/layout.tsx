import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astrix | SaaS & MVP Development",
  description:
    "Astrix builds SaaS products, web applications, and MVPs for startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body
        className={`${inter.variable} ${syne.variable}min-h-full flex flex-col bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
