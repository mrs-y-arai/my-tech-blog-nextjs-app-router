import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import { ArticleList as ArticleListType } from "~/models/Article";
import PageContent from "./components/PageContent";
import { getArticleDetail, getArticleList } from "~/utils";
import type { Metadata } from "next";
import { SITE_NAME } from "~/constants";

export async function generateStaticParams() {
  const articles: ArticleListType = await getArticleList();

  return articles.contents.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleDetail(params.slug);

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: `${process.env.NEXT_PUBLIC_SITE_BASE_URL}/article/${article.id}`,
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.image?.url ?? "/ogp.png",
          width: article.image?.width,
          height: article.image?.height,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      title: article.title,
    },
  };
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
