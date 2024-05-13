export const CONTACT_TYPE = {
  Project: {
    value: "1",
    label: "案件のご相談",
  },
  Blog: {
    value: "2",
    label: "本ブログへのご要望",
  },
  Scout: {
    value: "3",
    label: "転職スカウト",
  },
  Other: {
    value: "4",
    label: "その他",
  },
} as const;

export type ContactType = (typeof CONTACT_TYPE)[keyof typeof CONTACT_TYPE];
export type ContactValueType =
  (typeof CONTACT_TYPE)[keyof typeof CONTACT_TYPE]["value"];
export type ContactLabelType =
  (typeof CONTACT_TYPE)[keyof typeof CONTACT_TYPE]["label"];

// TODO: 型を縛りたい。CONTACT_TYPEのvalueを過不足なく全て含むようにしたい。過不足あったら型エラーを出したい
export const CONTACT_TYPE_VALUES = [
  "1",
  "2",
  "3",
  "4",
] as const satisfies ContactValueType[];

export const getContentTypeLabel = (value: ContactValueType) => {
  return (
    Object.values(CONTACT_TYPE).find((type) => type.value === value)?.label ||
    null
  );
};
