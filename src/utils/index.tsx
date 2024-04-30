import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "../libs/microCms";
import {
  ArticleList as ArticleListType,
  Article as ArticleType,
} from "../models/Article";

/**
 * Get article list
 */
export const getArticleList = async (queries?: MicroCMSQueries) => {
  const data = await client.get({
    endpoint: "articles",
    queries,
  });

  const articles: ArticleListType = data;

  return articles;
};

/**
 * Get article Detail
 */
export const getArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const data = await client.get({
    endpoint: "articles",
    contentId,
    queries,
  });

  const article: ArticleType = data;

  return article;
};
