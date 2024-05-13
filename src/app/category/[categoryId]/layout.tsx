import { CategoryList } from "~/models/Category";
import { getCategoryList } from "~/utils";

export async function generateStaticParams() {
  const categoryList: CategoryList = await getCategoryList();

  const categoryIds = categoryList.contents.map((category) => ({
    categoryId: category.id,
  }));

  return categoryIds;
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
