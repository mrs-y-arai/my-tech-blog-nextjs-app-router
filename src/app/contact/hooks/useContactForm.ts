// いらなくなってしまった

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CONTACT_TYPE,
  getContentTypeLabel,
  CONTACT_TYPE_VALUES,
} from "../constants/contactType";
import { customErrorMap } from "~/libs/validation";

export const useContactForm = () => {
  // エラーメッセージ日本語化
  z.setErrorMap(customErrorMap);

  const schema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().min(1).email({
      message: "メールアドレスの形式が正しくありません。",
    }),
    type: z.enum(CONTACT_TYPE_VALUES),
    detail: z.string().min(1).max(1024),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      type: CONTACT_TYPE.Project.value,
      detail: "",
    },
  });

  const onSubmit = form.handleSubmit(async (inputValues) => {
    const { name, email, type: _type, detail } = inputValues;
    const type = getContentTypeLabel(_type);

    if (!type) {
      throw new Error("Invalid contact type");
    }

    const formData = new FormData();
    formData.append("お名前", name);
    formData.append("メールアドレス", email);
    formData.append("お問い合わせ種別", type);
    formData.append("お問い合わせ本文", detail);

    try {
      await fetch("https://ssgform.com/s/aGR7rW3U5UDF", {
        // headers: {
        //   "content-type": "multipart/form-data",
        // },
        mode: "cors",
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error(error);
    }
  });

  return {
    form,
    onSubmit,
  };
};
