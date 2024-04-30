import type {
  MicroCMSListResponse,
  MicroCMSContentId,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Article = {
  title: string;
  description: string;
  content: string;
  image?: MicroCMSImage;
  category: {
    id: string;
    name: string;
    date: MicroCMSDate;
  };
  tags: {
    id: string;
    name: string;
    date: MicroCMSDate;
  }[];
} & MicroCMSContentId &
  MicroCMSDate;

export type ArticleList = MicroCMSListResponse<Article>;
