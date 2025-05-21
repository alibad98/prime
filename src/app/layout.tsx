import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime",
  description: "E-Commerce Solutions Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      {" "}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoNaskhArabic.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
