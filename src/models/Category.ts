import type {
  MicroCMSListResponse,
  MicroCMSContentId,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type CategoryList = MicroCMSListResponse<Category>;
