import Head from "next/head";

type Props = {
  pageTitle?: string;
  description?: string;
  ogpImage?: string;
  isNoIndex?: boolean;
};

export default function CommonMeta({
  pageTitle,
  description,
  isNoIndex,
}: Props) {
  return (
    <Head>
      <title>{pageTitle ? `${pageTitle} | YUUBLOG` : "YUUBLOG"}</title>
      <meta
        property="description"
        content={description ? `${description}` : "YUUBLOGです。"}
      />
      {isNoIndex && (
        <>
          <meta name="robots" content="noindex" />
        </>
      )}
    </Head>
  );
}
