import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/libs/utils";

type ComponentProps = {
  props: {
    currentPage: number;
    range: number;
    perPage: number;
    totalCount: number;
    path: string;
  };
  classes?: string;
};

type PaginationContentProps = {
  props: {
    currentPage: number;
    lastPage: number;
    range: number;
    path: string;
  };
};

function PaginationContent({ props }: PaginationContentProps) {
  /**
   * 表示している最初のページ
   */
  const startDisplayPage = Math.max(1, props.currentPage - props.range);
  /**
   * 表示している最後のページ
   */
  const endDisplayPage = Math.min(
    props.lastPage,
    props.currentPage + props.range,
  );
  /**
   * 表示するページ番号のリスト
   */
  const contentIndexList = Array.from(
    { length: endDisplayPage - startDisplayPage + 1 },
    (_, i) => i + startDisplayPage,
  );

  return (
    <>
      {contentIndexList.map((index) => {
        return (
          <Link
            key={index}
            href={`${props.path}?page=${index}`}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md text-foreground duration-300 hover:bg-light-gray",
              { "bg-light-gray": index === props.currentPage },
            )}
          >
            {index}
          </Link>
        );
      })}
    </>
  );
}

export default function Pagination({ props, classes }: ComponentProps) {
  const isFirstPage = props.currentPage === 1;
  const lastPage = Math.ceil(props.totalCount / props.perPage);
  const isLastPage = props.currentPage === lastPage;

  return (
    <>
      <div className={cn("flex items-center justify-center gap-x-4", classes)}>
        {isFirstPage ? (
          <>
            <p
              className={cn(
                "flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-md text-foreground opacity-30",
              )}
            >
              <ChevronLeft className="h-8 w-8" />
            </p>
          </>
        ) : (
          <Link
            href={`${props.path}?page=${props.currentPage - 1}`}
            aria-label="Go to previous page"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md text-foreground duration-300 hover:bg-light-gray",
            )}
          >
            <ChevronLeft className="h-8 w-8" />
          </Link>
        )}
        <PaginationContent
          props={{
            currentPage: props.currentPage,
            lastPage,
            range: props.range,
            path: props.path,
          }}
        />
        {isLastPage ? (
          <>
            <p
              className={cn(
                "flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-md text-foreground opacity-30",
              )}
            >
              <ChevronRight className="h-8 w-8" />
            </p>
          </>
        ) : (
          <Link
            href={`${props.path}?page=${props.currentPage + 1}`}
            aria-label="Go to next page"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md text-foreground duration-300 hover:bg-light-gray",
            )}
          >
            <ChevronRight className="h-8 w-8" />
          </Link>
        )}
      </div>
    </>
  );
}
