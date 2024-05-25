"use client";

import { Article as ArticleType } from "~/models/Article";
import { format } from "date-fns";
import CategoryLabel from "~/components/ui/categoryLabel";
import Tag from "~/components/ui/tag";
import { Button } from "~/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";
import Toc from "~/components/ui/tableOfContents";
import TwitterX from "~/components/icons/TwitterX";
import Facebook from "~/components/icons/Facebook";
import Prism from "prismjs";
import "prismjs/themes/prism-dark.css";

type Props = {
  article: ArticleType;
};

export default function PageContent({ article }: Props) {
  const router = useRouter();

  useEffect(() => {
    Prism.highlightAll();

    const codeElements = document.querySelectorAll("[data-filename]");
    codeElements.forEach((codeElement) => {
      const filename = codeElement.getAttribute("data-filename");
      const spanElement = document.createElement("span");
      spanElement.textContent = filename;
      spanElement.className = "code-block-filename";
      codeElement.prepend(spanElement);
    });
  }, []);

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
        <Toc className="mb-8" />
        <div className="article-body">{parse(article.content)}</div>
        <section className="p-4">
          <h2 className="header-sm mb-3 text-center">SNSでシェアする</h2>
          <div className="flex justify-center gap-x-3">
            <Button
              size="lg"
              className="bg-[#000] text-white duration-300 hover:bg-strong-gray"
              onClick={() =>
                window.open(
                  `https://x.com/share?url=${process.env.NEXT_PUBLIC_SITE_BASE_URL}/article/${article.id}&text=${article.title}+%7C+${article.description}&hashtags=YUUBLOG`,
                  "_blank",
                  "noopener noreferrer",
                )
              }
            >
              <TwitterX className="mr-2" width={24} height={24} />
              でシェア
            </Button>
            <Button
              size="lg"
              className="bg-[#1877f2] text-white opacity-100 transition-opacity duration-300 hover:opacity-80"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_BASE_URL}/article/${article.id}`,
                  "_blank",
                  "noopener noreferrer",
                )
              }
            >
              <Facebook width={28} height={28} />
              でシェア
            </Button>
          </div>
        </section>
      </article>
      <Button
        onClick={() => router.push("/page/1")}
        className="mx-auto mt-10 block"
        size="lg"
        variant="primary"
      >
        記事一覧へ
      </Button>
    </>
  );
}
