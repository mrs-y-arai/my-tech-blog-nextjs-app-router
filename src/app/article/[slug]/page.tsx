import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import { ArticleList as ArticleListType } from "~/models/Article";
import PageContent from "./components/PageContent";
import { getArticleDetail, getArticleList } from "~/utils";

export async function generateStaticParams() {
  const articles: ArticleListType = await getArticleList();

  return articles.contents.map((article) => ({
    slug: article.id,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleDetail(params.slug);

  return (
    <>
      <TwoColumnWrapper
        needPageHeader={false}
        pageTitle={article.title}
        description={article.description}
      >
        <PageContent article={article} />
      </TwoColumnWrapper>
    </>
  );
}
