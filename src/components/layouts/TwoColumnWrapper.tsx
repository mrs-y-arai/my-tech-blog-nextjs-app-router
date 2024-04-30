import type { ReactNode } from "react";
import PageHeader from "~/components/layouts/PageHeader";
import SideBar from "~/components/layouts/SideBar";

type Props = {
  children: ReactNode;
  pageTitle?: string;
  description?: string;
  needPageHeader?: boolean;
};

export default function TwoColumnWrapper({
  children,
  pageTitle,
  description,
  needPageHeader = true,
}: Props) {
  return (
    <>
      {needPageHeader && pageTitle && (
        <PageHeader pageTitle={pageTitle} description={description} />
      )}
      <div className="mx-auto flex min-h-[100vh] max-w-[1300px] items-start gap-x-6 p-8">
        <div className="flex-grow">{children}</div>
        <SideBar
          props={{
            classes: "w-[26%] shrink-0",
          }}
        />
      </div>
    </>
  );
}
