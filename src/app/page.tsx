import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import ArticleList from "~/components/ui/article/articleList";
import { getArticleList } from "~/utils";
import Pagination from "~/components/ui/pagination";
import { PER_PAGE } from "~/constants";
import type { Metadata } from "next";
import { SITE_NAME } from "~/constants";

export const metadata: Metadata = {
  title: `TOP | ${SITE_NAME}`,
  description: `${SITE_NAME} 現役フロントエンドエンジニアが運営するブログです。主に、Java ScriptとTypescriptに関する情報を発信しています。`,
  formatDetection: {
    telephone: false,
    email: false,
  },
  robots: process.env.IS_NOINDEX === "true" ? "noindex,nofollow" : undefined,
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_BASE_URL,
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
        url: "/ogp.png",
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

export default async function Home() {
  const articles = await getArticleList({
    limit: PER_PAGE,
    orders: "-publishedAt",
    offset: 0,
  });

  return (
    <TwoColumnWrapper
      pageTitle={SITE_NAME}
      description="Java Script・Type Script初心者向けブログ"
    >
      <div className="block w-full text-center">
        <h2 className="mb-5 text-2xl font-bold">最新記事一覧</h2>
        <ArticleList articles={articles} />
        <Pagination
          classes="mt-10"
          props={{
            currentPage: 1,
            range: 2,
            perPage: PER_PAGE,
            totalCount: articles.totalCount,
            path: "/page",
          }}
        />
      </div>
    </TwoColumnWrapper>
  );
}
