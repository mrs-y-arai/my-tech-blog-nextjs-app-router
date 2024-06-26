import OneColumnWrapper from "~/components/layouts/OneColumnWrapper";
import PageContent from "./components/PageContent";
import { SITE_NAME } from "~/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${SITE_NAME}のお問い合わせページです。`,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/contact`,
    title: "お問い合わせ",
    description: `${SITE_NAME}のお問い合わせページです。`,
    siteName: SITE_NAME,
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    title: "お問い合わせ",
  },
};

export default function Contact() {
  return (
    <>
      <OneColumnWrapper pageTitle="お問い合わせ">
        <PageContent />
      </OneColumnWrapper>
    </>
  );
}
