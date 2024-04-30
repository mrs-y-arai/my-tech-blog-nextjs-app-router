type Props = {
  pageTitle: string;
  description?: string;
};

export default function PageHeader({ pageTitle, description }: Props) {
  return (
    <>
      <div className="flex aspect-[5/1] w-full items-center justify-center bg-light-gray">
        <h1 className="flex flex-col items-center">
          <span className="header-lg mb-4">{pageTitle}</span>
          {description && <strong className="header-sm">{description}</strong>}
        </h1>
      </div>
    </>
  );
}
