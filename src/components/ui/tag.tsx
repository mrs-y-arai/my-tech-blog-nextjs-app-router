import Link from "next/link";

type Props = {
  props: {
    href: string;
    text: string;
  };
};

export default function Tag({ props }: Props) {
  return (
    <>
      <Link className="text-primary" href={props.href}>
        #{props.text}
      </Link>
    </>
  );
}
