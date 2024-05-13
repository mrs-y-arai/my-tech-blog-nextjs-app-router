import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "../libs/microCms";
import {
  ArticleList as ArticleListType,
  Article as ArticleType,
} from "../models/Article";
import { CategoryList as CategoryListType } from "../models/Category";
import { TagList as TagListType } from "../models/Tag";

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

/**
 * Get Category list
 */
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const data = await client.get({
    endpoint: "categories",
    queries,
  });

  const categories: CategoryListType = data;

  return categories;
};

/**
 * Get Tag list
 */
export const getTagList = async (queries?: MicroCMSQueries) => {
  const data = await client.get({
    endpoint: "tags",
    queries,
  });

  const tags: TagListType = data;

  return tags;
};
