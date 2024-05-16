type Props = {
  pageTitle: string;
  description?: string;
};

export default function PageHeader({ pageTitle, description }: Props) {
  return (
    <>
      <div className="flex w-full items-center justify-center bg-light-gray p-8 pt-16 md:p-16">
        <h1 className="flex flex-col items-center">
          <span className="header-lg mb-4 break-all">{pageTitle}</span>
          {description && (
            <strong className="header-sm break-all">{description}</strong>
          )}
        </h1>
      </div>
    </>
  );
}
