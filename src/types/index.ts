import type { QueryOptions } from "@apollo/client";

export interface IPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface CommonParams {
  variables?: QueryOptions["variables"];
}

export type IAttachment = { url?: string } | null;
export type ICreatedUser = {
  _id: string;
  username: string;
  email: string;
  details: { avatar: string; fullName: string };
};
