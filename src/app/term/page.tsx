import OneColumnWrapper from "~/components/layouts/OneColumnWrapper";
import type { Metadata } from "next";
import { SITE_NAME } from "~/constants";

export const metadata: Metadata = {
  title: "免責事項",
  description: `${SITE_NAME}の免責事項について記載しています。`,
  openGraph: {
    title: "免責事項",
    description: `${SITE_NAME}の免責事項について記載しています。`,
    url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/term`,
  },
  twitter: {
    title: "免責事項",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <OneColumnWrapper pageTitle="免責事項">
        <section className="mb-5">
          <h2 className="header-md mb-3">当ブログの運営者情報</h2>
          <p className="mb-2">運営者: 荒井 勇己</p>
          <p className="mb-2">ブログ名: {SITE_NAME}</p>
          <p className="mb-2">
            ブログURL: {process.env.NEXT_PUBLIC_SITE_BASE_URL}
          </p>
          <p>連絡先: y.arai.webig@gmail.com</p>
        </section>
        <section className="mb-5">
          <h2 className="header-md mb-3">当ブログの免責事項</h2>
          <p className="mb-3">
            当ブログは、アフィリエイトプログラムを使って商品を紹介しており、直接の販売は行っておりません。商品に関するお問い合わせは、販売店様のほうに直接ご連絡くださいますようお願い致します。当ブログからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。また、リンク先サイトの正確性や合法性、その内容について一切保証するものではありません。当ブログに関する記事は、個人的な主観をもとに書いており、すべての人に当てはまるというものではありません。商品やサービスのご購入に関する最終的な判断はご自身の責任でお願い致します。当ブログのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、必ずしもそれらの正確性や安全性等を保証するものではありません。誤情報が入り込んだり、情報が古くなっていることもございます。万が一、当ブログに掲載された内容によって発生したトラブルや損害等の一切の責任を負いかねます。あらかじめご了承くださいますようお願いいたします。また、本免責事項、および当ブログに掲載しているすべての記事は、予告なしに変更・削除されることがあります。
            予めご了承下さい。
          </p>
        </section>
      </OneColumnWrapper>
    </>
  );
}
