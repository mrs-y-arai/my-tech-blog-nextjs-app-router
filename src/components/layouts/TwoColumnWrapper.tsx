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
      <div className="mx-auto flex min-h-[40vh] max-w-[1300px] flex-col items-start gap-x-6 p-8 py-14 lg:flex-row">
        <div className="mb-8 flex-grow lg:mb-0">{children}</div>
        <SideBar
          props={{
            classes: "w-full lg:w-[26%] shrink-0",
          }}
        />
      </div>
    </>
  );
}
