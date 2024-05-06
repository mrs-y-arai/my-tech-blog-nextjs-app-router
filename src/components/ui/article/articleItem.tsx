import Link from "next/link";
import { Article } from "~/models/Article";
import { format } from "date-fns";
import CategoryLabel from "../categoryLabel";
import Tag from "../tag";

type Props = {
  props: Article;
};

export default function ArticleItem({ props }: Props) {
  return (
    <>
      <div className="inline-block h-full overflow-hidden rounded-lg bg-white text-start text-foreground shadow-md">
        <Link
          href={`/article/${props.id}`}
          className="block aspect-[1200/630] w-full overflow-hidden"
        >
          <img
            className="block aspect-[1200/630] h-full w-full transform object-contain duration-300 hover:scale-105"
            src={props.image?.url || "/noimg.webp"}
            alt={props.title}
            width={1200}
            height={630}
          />
        </Link>
        <div className="p-3">
          <Link className="block" href={`/article/${props.id}`}>
            <time className="mb-2 block text-strong-gray">
              {format(props.publishedAt || props.createdAt, "yyyy.MM.dd")}
            </time>
            <h3 className="mb-2 line-clamp-2 text-xl font-bold">
              {props.title}
            </h3>
            <p className="mb-2 line-clamp-2">{props.description}</p>
          </Link>
          <CategoryLabel
            classes="mb-2 block"
            text={props.category.name}
            id={props.category.id}
          />
          {props.tags && props.tags.length > 0 ? (
            <div className="flex flex-wrap items-center gap-x-2">
              {props.tags.map((tag) => (
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
      </div>
    </>
  );
}
