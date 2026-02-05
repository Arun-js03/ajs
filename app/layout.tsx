import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Header from "@/components/layout/header";
import SmoothScroll from "@/components/layout/smoothscroll";
import JsonLd from "@/components/seo/json-ld";
import "./styles/globals.css";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://zinavo.com",
  ),
  title: {
    default: "Zinavo - Professional Web Design & Development Company",
    template: "%s | Zinavo",
  },
  description:
    "Zinavo is a leading web design and development company offering professional website design, custom web application development, SEO, and digital marketing services.",
  keywords: [
    "Web Design",
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "E-commerce Development",
    "Zinavo",
  ],
  authors: [{ name: "Zinavo" }],
  creator: "Zinavo",
  publisher: "Zinavo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zinavo - Professional Web Design & Development Company",
    description:
      "Zinavo is a leading web design and development company offering professional website design, custom web application development, SEO, and digital marketing services.",
    url: "https://zinavo.com",
    siteName: "Zinavo",
    images: [
      {
        url: "/zinavologo.png",
        width: 1200,
        height: 630,
        alt: "Zinavo - Web Design & Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zinavo - Professional Web Design & Development Company",
    description:
      "Zinavo is a leading web design and development company offering professional website design, custom web application development, SEO, and digital marketing services.",
    images: ["/zinavologo.png"],
    creator: "@zinavo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: "/zinavologo.png",
    shortcut: "/zinavologo.png",
    apple: "/zinavologo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
