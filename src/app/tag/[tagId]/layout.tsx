import { TagList } from "~/models/Tag";
import { getTagList } from "~/utils";

export async function generateStaticParams() {
  const tagList: TagList = await getTagList();

  const tagIds = tagList.contents.map((tag) => ({
    tagId: tag.id,
  }));

  console.log("tagIds", tagIds);

  return tagIds;
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
