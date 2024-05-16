import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import PageContent from "./components/PageContent";
import { ArticleList as ArticleListType } from "~/models/Article";
import { getArticleList, getTag } from "~/utils";
import { PER_PAGE, SITE_NAME } from "~/constants";
import type { Metadata } from "next";

export async function generateStaticParams({
  params,
}: {
  params: { tagId: string };
}) {
  const articles: ArticleListType = await getArticleList({
    limit: PER_PAGE,
    orders: "-publishedAt",
    filters: `tags[contains]${params.tagId}`,
  });
  const lastPage = Math.ceil(articles.totalCount / articles.limit);
  const _params = Array.from({ length: lastPage }).map((_, i) => ({
    pageId: String(i + 1),
    tagId: params.tagId,
  }));

  return _params;
}

export async function generateMetadata({
  params,
}: {
  params: { pageId: string; tagId: string };
}): Promise<Metadata> {
  const tag = await getTag(params.tagId);

  return {
    title: `${tag.name}記事一覧 ${params.pageId}ページ目`,
    description: `${tag.name}に関する記事一覧ページです。主に、Java ScriptとTypescriptに関する記事を発信しています。`,
    openGraph: {
      title: `${tag.name}記事一覧 ${params.pageId}ページ目`,
      description: `${tag.name}に関する記事一覧ページです。主に、Java ScriptとTypescriptに関する記事を発信しています。`,
      url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/tag/${params.tagId}/${params.pageId}`,
    },
    twitter: {
      title: `${tag.name}記事一覧 ${params.pageId}ページ目`,
    },
  };
}

export default function Page({
  params,
}: {
  params: { pageId: string; tagId: string };
}) {
  const currentPage = Number(params.pageId) ? Number(params.pageId) : 1;

  return (
    <TwoColumnWrapper
      pageTitle="記事一覧ページ"
      description={`${SITE_NAME}の記事一覧ページ`}
    >
      <div className="block w-full text-center">
        <h2 className="mb-5 text-2xl font-bold">記事一覧</h2>
        <PageContent currentPage={currentPage} tagId={params.tagId} />
      </div>
    </TwoColumnWrapper>
  );
}
