import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import ArticleList from "~/components/ui/article/articleList";
import { getArticleList } from "~/utils";
import Pagination from "~/components/ui/pagination";
import { PER_PAGE } from "~/constants";

export default async function Home() {
  const articles = await getArticleList({
    limit: PER_PAGE,
    orders: "-publishedAt",
    offset: 0,
  });

  return (
    <TwoColumnWrapper
      pageTitle="YUU BLOG"
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
