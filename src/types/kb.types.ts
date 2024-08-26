import { ReactNode } from "react";
import { IAttachment, ICreatedUser } from ".";

export interface IArticle {
  _id: string;
  content: string;
  modifiedDate: string;
  image?: IAttachment;
  attachments?: IAttachment[];
  summary?: string;
  status?: string;
  reactionChoices?: ReactNode;
  categoryId: string;
  title: string;
  createdUser: {
    id: string;
    username: string;
    email: string;
    details: { avatar: string; fullName: string };
  };
}

export interface IKBCategoryDetail {
  _id: string;
  title: string;
  description?: string;
  articles: IArticle[];
}
