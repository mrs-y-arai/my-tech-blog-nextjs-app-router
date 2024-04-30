import { ArticleList as ArticleListType } from "~/models/Article";
import ArticleItem from "~/components/ui/article/articleItem";

type Props = {
  articles: ArticleListType;
};

export default function ArticleList({ articles }: Props) {
  return (
    <>
      <ul className="grid grid-cols-3 gap-7">
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
