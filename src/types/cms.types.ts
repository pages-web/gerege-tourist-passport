import { IAttachment } from ".";

export interface ICmsCategory {
  _id: string;
  name: string;
  slug: string;
}

export interface ICmsTag {
  _id: string;
  name: string;
}

export interface ICmsPost {
  _id: string;
  slug: string;
  categoryIds: string[];
  categories: ICmsCategory[];
  tagIds: string[];
  tags: ICmsTag[];
  thumbnail: IAttachment;
  attachments: IAttachment[];
  title: string;
  excerpt: string;
  content: string;
}
