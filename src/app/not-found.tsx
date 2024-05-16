import OneColumnWrapper from "~/components/layouts/OneColumnWrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <OneColumnWrapper pageTitle="ページが見つかりません">
        <p className="mb-4 text-center">
          お探しのページが見つかりませんでした。URLが間違っているか、ページが削除された可能性があります。
        </p>
        <Link className="link mx-auto block w-fit " href="/">
          ホームに戻る
        </Link>
      </OneColumnWrapper>
    </>
  );
}
