import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import PageContent from "./components/PageContent";
import { ArticleList as ArticleListType } from "~/models/Article";
import { getArticleList } from "~/utils";
import { SITE_NAME } from "~/constants";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const articles: ArticleListType = await getArticleList();
  const lastPage = Math.ceil(articles.totalCount / articles.limit);

  return Array.from({ length: lastPage }).map((_, i) => ({
    pageId: String(i + 1),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { pageId: string };
}): Promise<Metadata> {
  return {
    title: `${SITE_NAME}記事一覧 ${params.pageId}ページ目`,
    description: `記事一覧ページです。主に、Java ScriptとTypescriptに関する記事を発信しています。`,
    openGraph: {
      title: `${SITE_NAME}記事一覧 ${params.pageId}ページ目`,
      description: `記事一覧ページです。主に、Java ScriptとTypescriptに関する記事を発信しています。`,
      url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/page/${params.pageId}`,
    },
    twitter: {
      title: `記事一覧 ${params.pageId}ページ目`,
    },
  };
}

export default function Page({ params }: { params: { pageId: string } }) {
  const currentPage = Number(params) ? Number(params) : 1;

  return (
    <TwoColumnWrapper
      pageTitle="記事一覧ページ"
      description={`${SITE_NAME}の記事一覧ページ`}
    >
      <div className="block w-full text-center">
        <h2 className="mb-5 text-2xl font-bold">記事一覧</h2>
        <PageContent currentPage={currentPage} />
      </div>
    </TwoColumnWrapper>
  );
}
