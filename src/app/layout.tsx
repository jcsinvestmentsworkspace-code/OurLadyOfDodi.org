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
  metadataBase: new URL("https://www.ourladyofdodi.org"),

  title: {
    default: "Our Lady of Dodi — A Sanctuary of Faith & Healing",
    template: "%s | Our Lady of Dodi",
  },

  description:
    "Our Lady of Dodi Catholic Church, Grotto & Pilgrimage Site — a place of prayer, peace, healing and pilgrimage.",

  icons: {
    icon: "/new/Grotto-logo.png",
    shortcut: "/new/Grotto-logo.png",
    apple: "/new/Grotto-logo.png",
  },

  openGraph: {
    title: "Our Lady of Dodi — A Sanctuary of Faith & Healing",
    description:
      "A place of prayer, peace, healing and pilgrimage at Our Lady of Dodi Catholic Church, Grotto & Pilgrimage Site.",
    url: "https://www.ourladyofdodi.org",
    siteName: "Our Lady of Dodi",
    images: [
      {
        url: "/Grotto-Logo.png",
        width: 1200,
        height: 1200,
        alt: "Our Lady of Dodi",
      },
    ],
    locale: "en_GH",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Our Lady of Dodi — A Sanctuary of Faith & Healing",
    description:
      "Our Lady of Dodi Catholic Church, Grotto & Pilgrimage Site.",
    images: ["/news/Grotto-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}



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
