import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import PageContent from "./components/PageContent";
import { ArticleList as ArticleListType } from "~/models/Article";
import { getArticleList } from "~/utils";
import { PER_PAGE } from "~/constants";

export async function generateStaticParams({
  params,
}: {
  params: { categoryId: string };
}) {
  const articles: ArticleListType = await getArticleList({
    limit: PER_PAGE,
    orders: "-publishedAt",
    filters: `category[equals]${params.categoryId}`,
  });
  const lastPage = Math.ceil(articles.totalCount / articles.limit);
  const _params = Array.from({ length: lastPage }).map((_, i) => ({
    pageId: String(i + 1),
    categoryId: params.categoryId,
  }));

  return _params;
}

export default function Page({
  params,
}: {
  params: { pageId: string; categoryId: string };
}) {
  const currentPage = Number(params.pageId) ? Number(params.pageId) : 1;

  return (
    <TwoColumnWrapper
      pageTitle="記事一覧ページ"
      description="YUU BLOGの記事一覧ページ"
    >
      <div className="block w-full text-center">
        <h2 className="mb-5 text-2xl font-bold">記事一覧</h2>
        <PageContent currentPage={currentPage} categoryId={params.categoryId} />
      </div>
    </TwoColumnWrapper>
  );
}
