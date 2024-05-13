import { ArticleList as ArticleListType } from "~/models/Article";
import ArticleItem from "~/components/ui/article/articleItem";

type Props = {
  articles: ArticleListType;
};

export default function ArticleList({ articles }: Props) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {articles.contents.map((article) => {
          return (
            <li key={article.id}>
              <ArticleItem props={article} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
