import OneColumnWrapper from "~/components/layouts/OneColumnWrapper";
import type { Metadata } from "next";
import { SITE_NAME } from "~/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${SITE_NAME}のプライバシーポリシーについて記載しています。`,
  openGraph: {
    title: "プライバシーポリシー",
    description: `${SITE_NAME}のプライバシーポリシーについて記載しています。`,
    url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/privacy-policy`,
  },
  twitter: {
    title: "プライバシーポリシー",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <OneColumnWrapper pageTitle="プライバシーポリシー">
        <section className="mb-5">
          <h2 className="header-md mb-3">当ブログの運営者情報</h2>
          <p className="mb-2">運営者: 荒井 勇己</p>
          <p className="mb-2">ブログ名: {SITE_NAME}</p>
          <p className="mb-2">
            ブログURL: {process.env.NEXT_PUBLIC_SITE_BASE_URL}
          </p>
          <p>連絡先: メールアドレスを入力</p>
        </section>
        <section className="mb-5">
          <h2 className="header-md mb-3">個人情報の利用目的</h2>
          <p className="mb-3">
            当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
          </p>
          <p>
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
          </p>
        </section>
        <section className="mb-5">
          <h2 className="header-md mb-3">広告について</h2>
          <p>
            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </section>
        <section className="mb-5">
          <h2 className="header-md mb-3">お問い合わせフォームについて</h2>
          <p>
            当ブログでは、お問い合わせフォームからお問い合わせいただく際に、お名前とメールアドレス等の個人情報をご登録いただいています。これらの個人情報は質問に対する回答を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
          </p>
        </section>
        <section className="mb-5">
          <h2 className="header-md mb-3">著作権・肖像権について</h2>
          <p>
            当ブログで掲載している文章や画像などにつきましては、著作権は放棄しておりません。当ブログに存在する、文章・画像・動画等の著作物の情報を無断転載することを禁止します。引用の範囲を超えるものについては、法的処置を行います。転載を希望される方は、「お問い合わせ」よりご連絡をお願いします。また、当ブログは著作権の侵害を目的とするものではありません。使用している版権物の知的所有権はそれぞれの著作者・団体に帰属しております。著作権や肖像権に関して問題がありましたら御連絡下さい。著作権所有者様からの警告及び修正・撤去のご連絡があった場合は迅速に対処または削除致します。
          </p>
        </section>
        <section>
          <h2 className="header-md mb-3">リンクについて</h2>
          <p>
            当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。ただし、当ブログに掲載されている画像への直リンクや、インラインフレームによる当ブログのコンテンツの使用はご遠慮ください
          </p>
        </section>
      </OneColumnWrapper>
    </>
  );
}
