import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "../libs/microCms";
import {
  ArticleList as ArticleListType,
  Article as ArticleType,
} from "../models/Article";
import {
  CategoryList as CategoryListType,
  Category as CategoryType,
} from "../models/Category";
import { TagList as TagListType, Tag as TagType } from "../models/Tag";

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
 * Get Single Category
 */
export const getCategory = async (categoryId: string) => {
  const data = await client.get({
    endpoint: `categories/${categoryId}`,
  });

  const category: CategoryType = data;

  return category;
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

/**
 * Get Single Tag
 */
export const getTag = async (tagId: string) => {
  const data = await client.get({
    endpoint: `tags/${tagId}`,
  });

  const tag: TagType = data;

  return tag;
};
