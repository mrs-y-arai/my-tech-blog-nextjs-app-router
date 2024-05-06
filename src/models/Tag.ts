import type {
  MicroCMSListResponse,
  MicroCMSContentId,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type TagList = MicroCMSListResponse<Tag>;
