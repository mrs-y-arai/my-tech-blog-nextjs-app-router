import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar";
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
      <aside className={cn(props.classes)}>
        <section className="mb-5 flex flex-col rounded-lg p-4 shadow-md md:p-6">
          <h2 className="header-sm mb-2">Profile</h2>
          <Avatar className="mx-auto h-[160px] w-[160px] md:h-[130px] md:w-[130px]">
            <AvatarImage alt="Yuki Araiの顔写真" src="/profile-image.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <h3 className="mb-2 font-bold">Yuki Arai</h3>
          <p className="text-strong-gray">フロントエンドエンジニア</p>
          <p>歴5年のエンジニアです。</p>
          <p>Java Script/Type Scriptが得意</p>
        </section>
        <div className="flex flex-col gap-y-4 rounded-lg p-4 shadow-md md:p-6">
          {categoryList.contents.length > 0 ? (
            <>
              <section>
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
              </section>
            </>
          ) : null}
          {tagList.contents.length > 0 ? (
            <>
              <section>
                <h2 className="header-sm mb-2">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {tagList.contents.map((tag) => {
                    return (
                      <Tag
                        key={tag.id}
                        props={{ id: tag.id, text: tag.name }}
                      />
                    );
                  })}
                </div>
              </section>
            </>
          ) : null}
        </div>
      </aside>
    </>
  );
}
