import { Inter } from "next/font/google";
import "./globals.css";
import Header from "~/components/layouts/Header";
import Footer from "~/components/layouts/Footer";
import type { Metadata } from "next";
import { SITE_NAME } from "~/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME} 現役フロントエンドエンジニアが運営するブログです。主に、Java ScriptとTypescriptに関する情報を発信しています。`,
  robots: process.env.IS_NOINDEX === "true" ? "noindex,nofollow" : undefined,
  formatDetection: {
    telephone: false,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_BASE_URL,
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: `${SITE_NAME} 現役フロントエンドエンジニアが運営するブログです。主に、Java ScriptとTypescriptに関する情報を発信しています。`,
    siteName: SITE_NAME,
    images: [
      {
        url: "https://yuu-blog.vercel.app/ogp.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    site: "@yuu_a_prog",
    card: "summary_large_image",
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main className="min-h-[100vh] pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
