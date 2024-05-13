import type { ReactNode } from "react";
import PageHeader from "~/components/layouts/PageHeader";

type Props = {
  children: ReactNode;
  pageTitle: string;
  description?: string;
  needPageHeader?: boolean;
};

export default function OneColumnWrapper({
  children,
  pageTitle,
  description,
}: Props) {
  return (
    <>
      <PageHeader pageTitle={pageTitle} description={description} />
      <div className="mx-auto min-h-[100vh] max-w-[1300px] p-8">{children}</div>
    </>
  );
}
