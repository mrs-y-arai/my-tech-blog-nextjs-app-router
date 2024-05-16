import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";
import TwitterX from "~/components/icons/TwitterX";
import Zenn from "~/components/icons/Zenn";
import Github from "~/components/icons/Github";
import Link from "next/link";
import { SITE_NAME } from "~/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "私について",
  description: `私は、プログラミング歴4年のフロントエンドエンジニアです。主に、Java Script / Type
            Scriptがメインスキルのエンジニアです。Vue.js / Nuxt.js / React / Next.jsが好きです。今までの開発実績は50件以上。`,
  openGraph: {
    title: "私について",
    description: `${SITE_NAME}の免責事項について記載しています。`,
    url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/about`,
  },
  twitter: {
    title: "私について",
  },
};

export default function About() {
  return (
    <div className="mx-auto px-6 py-10 md:px-10">
      <div className="mx-auto mb-10 flex max-w-[480px] flex-col items-center space-y-6">
        <Avatar className="h-[220px] w-[220px]">
          <AvatarImage alt="Yuki Araiの顔写真" src="/profile-image.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Yuki Arai</h1>
          <p className="text-strong-gray">
            Webエンジニア / フロントエンドエンジニア
          </p>
          <p>
            Java Script / Type
            Scriptがメインスキルのエンジニア。主にフロントエンドを担当する。
          </p>
          <div className="flex items-center justify-center gap-x-3">
            <Link
              className="inline-block w-7 duration-300 hover:opacity-70"
              href="https://twitter.com/yuu_a_prog"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterX />
            </Link>
            <Link
              className="inline-block w-7 duration-300 hover:opacity-70"
              href="https://github.com/mrs-y-arai"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
            </Link>
            <Link
              className="inline-block w-7 duration-300 hover:opacity-70"
              href="https://zenn.dev/yarai"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Zenn />
            </Link>
          </div>
        </div>
      </div>
      <section className="mb-6">
        <h2 className="header-md">プロフィール</h2>
        <p>
          主にフロントエンドを担当しているWebエンジニアです。エンジニア歴は約5年ほど。WebサイトやWebアプリケーションを開発しております。
        </p>
        <p>
          Java Script / Type Script / React / Next.js / Vue.js /
          Nuxt.jsを使った開発が得意です。
        </p>
      </section>
      <section className="mb-6">
        <h2 className="header-md">経歴</h2>
        <p className="mb-2">
          <span className="mr-3 font-semibold">2019年〜2020年頃:</span>
          SES会社でC++/シェルスクリプトを使った開発をする。大手通信キャリアへ常駐し、開発〜テスト〜本番リリースまでの一連の流れを経験。
          副業で、Webサイトの制作を開始。主にWordPressを使ったサイト制作やフロントエンド開発を行う。
        </p>
        <p className="mb-2">
          <span className="mr-3 font-semibold">2020年〜2023年頃:</span>
          Web制作会社で、Webディレクター兼Webエンジニアとして勤務。ディレクション業務・WordPressを使ったサイト制作、フロントエンド開発を担当。
        </p>
        <p className="mb-2">
          <span className="mr-3 font-semibold">2023年〜現在:</span>
          Web開発会社で、フロントエンドエンジニアとして勤務。Vue.js /
          Nuxt.jsを使った開発を担当。
          Next.jsを使ったアプリケーションのフロントエンド開発や、バックエンド開発、Webサイト制作も行う。
          サイト制作からアプリケーション開発まで幅広く対応している。
        </p>
      </section>
      <section className="mb-6">
        <h2 className="header-md">本ブログについて</h2>
        <p className="mb-2">
          本ブログでは、私のメインスキルである、フロントエンド開発、特にJava
          ScriptやType Scriptに関する技術記事の投稿・発信を行います。
        </p>
        <p>
          具体的に言うと、Java Script / Type Script / React / Next.js / Vue.js /
          Nuxt.js関連の記事を中心になります。
        </p>
      </section>
      <section>
        <h2 className="header-md">お問い合わせ先</h2>
        <div>
          <p>
            YUUBLOGのお問い合わせ先は、
            <Link className="link" href="/contact">
              こちら
            </Link>
            になります。
          </p>
        </div>
      </section>
    </div>
  );
}
