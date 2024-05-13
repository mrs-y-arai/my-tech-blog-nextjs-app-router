"use client";
import OneColumnWrapper from "~/components/layouts/OneColumnWrapper";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <OneColumnWrapper pageTitle="ページが見つかりません">
        <p className="mb-4 text-center">
          お探しのページが見つかりませんでした。URLが間違っているか、ページが削除された可能性があります。
        </p>
        <Button
          className="mx-auto block"
          variant="primary"
          onClick={() => router.push("/")}
        >
          ホームに戻る
        </Button>
      </OneColumnWrapper>
    </>
  );
}
