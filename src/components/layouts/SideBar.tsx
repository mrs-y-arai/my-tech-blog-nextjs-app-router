import CategoryLabel from "~/components/ui/categoryLabel";
import Tag from "~/components/ui/tag";
import { cn } from "~/libs/utils";

type Props = {
  props: {
    classes?: string;
  };
};

export default function SideBar({ props }: Props) {
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
        <div>
          <h2 className="header-sm mb-2">Categories</h2>
          <ul className="space-y-2">
            <li>
              <CategoryLabel href="#" text="JavaScript" />
            </li>
          </ul>
        </div>
        <div>
          <h2 className="header-sm mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Tag props={{ href: "#", text: "pickup" }} />
          </div>
        </div>
      </aside>
    </>
  );
}
