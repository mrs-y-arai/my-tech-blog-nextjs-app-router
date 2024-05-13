import Link from "next/link";
import { cn } from "~/libs/utils";

type Props = {
  text: string;
  id: string;
  classes?: string;
};

export default function CategoryLabel({ text, id, classes }: Props) {
  return (
    <>
      <Link
        href={`/category/${id}/1`}
        className={cn(
          "hover:bg-light-primary w-fit rounded-full bg-primary px-3 py-1 text-sm text-white duration-300",
          classes,
        )}
      >
        {text}
      </Link>
    </>
  );
}
