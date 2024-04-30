"use client";
import TwoColumnWrapper from "~/components/layouts/TwoColumnWrapper";
import PageContent from "./components/PageContent";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = page ? Number(page) : 1;

  return (
    <TwoColumnWrapper
      pageTitle="記事一覧ページ"
      description="YUU BLOGの記事一覧ページ"
    >
      <div className="block w-full text-center">
        <h2 className="header-md mb-5">記事一覧</h2>
        <PageContent currentPage={currentPage} />
      </div>
    </TwoColumnWrapper>
  );
}
