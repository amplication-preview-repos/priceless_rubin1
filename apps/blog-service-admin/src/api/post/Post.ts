import { Comment } from "../comment/Comment";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  published: boolean | null;
  title: string | null;
  updatedAt: Date;
};
