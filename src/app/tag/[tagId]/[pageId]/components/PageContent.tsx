import { getArticleList } from "~/utils";
import ArticleList from "~/components/ui/article/articleList";
import Pagination from "~/components/ui/pagination";
import { PER_PAGE } from "~/constants";

type Props = {
  currentPage: number;
  tagId: string;
};

export default async function PageContent({ currentPage, tagId }: Props) {
  const articles = await getArticleList({
    limit: PER_PAGE,
    orders: "-publishedAt",
    offset: PER_PAGE * (currentPage - 1),
    filters: `tags[contains]${tagId}`,
  });

  return (
    <>
      <ArticleList articles={articles} />
      <Pagination
        classes="mt-10"
        props={{
          currentPage,
          range: 2,
          perPage: PER_PAGE,
          totalCount: articles.totalCount,
          path: `/tag/${tagId}`,
        }}
      />
    </>
  );
}
