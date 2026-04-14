import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Our Lady of Dodi — A Sanctuary of Faith & Healing",
  description: "A place of prayer, peace, and pilgrimage. Our Lady of Dodi Catholic Church, Grotto & Pilgrimage Site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${openSans.variable} antialiased`}
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
