import Link from "next/link";

type Props = {
  props: {
    id: string;
    text: string;
  };
};

export default function Tag({ props }: Props) {
  return (
    <>
      <Link className="text-primary" href={`/tag/${props.id}/1`}>
        #{props.text}
      </Link>
    </>
  );
}
