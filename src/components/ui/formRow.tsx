import type { ReactNode } from "react";
import { cn } from "~/libs/utils";

type Props = {
  props: {
    label: string;
    required?: boolean;
    classes?: string;
    id?: string;
  };
  children: ReactNode;
};

export default function FormRow({ props, children }: Props) {
  return (
    <>
      <div className={cn("flex flex-col gap-y-3", props.classes)}>
        <label className="flex items-center" htmlFor={props.id}>
          {props.label}
          {props.required && (
            <span className="bg-red ml-2 rounded-sm px-2 py-1 text-xs text-white">
              必須
            </span>
          )}
        </label>
        {children}
      </div>
    </>
  );
}
