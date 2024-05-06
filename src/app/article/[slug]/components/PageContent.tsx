"use client";

import { Article as ArticleType } from "~/models/Article";
import { format } from "date-fns";
import CategoryLabel from "~/components/ui/categoryLabel";
import Tag from "~/components/ui/tag";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";

type Props = {
  article: ArticleType;
};

export default function PageContent({ article }: Props) {
  const router = useRouter();

  return (
    <>
      <article className="block w-full">
        <div className="mb-8">
          <h1 className="header-lg mb-3">{article.title}</h1>
          <time className="mb-2 block text-lg text-strong-gray">
            {format(article.publishedAt || article.createdAt, "yyyy.MM.dd")}
          </time>
          <CategoryLabel
            classes="mb-2 block"
            text={article.category.name}
            id={article.category.id}
          />
          {article.tags && article.tags.length > 0 ? (
            <div className="flex flex-wrap items-center gap-x-2">
              {article.tags.map((tag) => (
                <Tag
                  key={tag.id}
                  props={{
                    text: tag.name,
                    id: tag.id,
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className="article-body">{parse(article.content)}</div>
      </article>
      <Button
        onClick={() => router.push("/article")}
        className="mx-auto mt-10 block"
        size="lg"
        variant="primary"
      >
        記事一覧へ
      </Button>
    </>
  );
}
