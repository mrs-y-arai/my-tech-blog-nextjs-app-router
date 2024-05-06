import CategoryLabel from "~/components/ui/categoryLabel";
import { CategoryList } from "~/models/Category";
import { TagList } from "~/models/Tag";
import Tag from "~/components/ui/tag";
import { cn } from "~/libs/utils";
import { getCategoryList, getTagList } from "~/utils";

type Props = {
  props: {
    classes?: string;
  };
};

export default async function SideBar({ props }: Props) {
  const categoryList: CategoryList = await getCategoryList();
  const tagList: TagList = await getTagList();

  return (
    <>
      <aside
        className={cn(
          "flex flex-col gap-y-4 rounded-lg p-4 shadow-md md:p-6",
          props.classes,
        )}
      >
        <div>
          <h2 className="header-sm mb-2">Profile</h2>
          <p className="font-bold">Tech Blogger</p>
          <p>フロントエンドエンジニアです。</p>
        </div>
        {categoryList.contents.length > 0 ? (
          <>
            <div>
              <h2 className="header-sm mb-2">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categoryList.contents.map((category) => {
                  return (
                    <CategoryLabel
                      key={category.id}
                      id={category.id}
                      text={category.name}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : null}
        {tagList.contents.length > 0 ? (
          <>
            <div>
              <h2 className="header-sm mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tagList.contents.map((tag) => {
                  return (
                    <Tag key={tag.id} props={{ id: tag.id, text: tag.name }} />
                  );
                })}
              </div>
            </div>
          </>
        ) : null}
      </aside>
    </>
  );
}
