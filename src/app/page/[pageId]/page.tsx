import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import PageContent from "./components/PageContent";
import { ArticleList as ArticleListType } from "~/models/Article";
import { getArticleList } from "~/utils";

export async function generateStaticParams() {
  const articles: ArticleListType = await getArticleList();
  const lastPage = Math.ceil(articles.totalCount / articles.limit);

  return Array.from({ length: lastPage }).map((_, i) => ({
    pageId: String(i + 1),
  }));
}

export default function Page({ params }: { params: { pageId: string } }) {
  const currentPage = Number(params) ? Number(params) : 1;

  return (
    <TwoColumnWrapper
      pageTitle="記事一覧ページ"
      description="YUU BLOGの記事一覧ページ"
    >
      <div className="block w-full text-center">
        <h2 className="mb-5 text-2xl font-bold">記事一覧</h2>
        <PageContent currentPage={currentPage} />
      </div>
    </TwoColumnWrapper>
  );
}
