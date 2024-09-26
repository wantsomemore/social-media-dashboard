import { IComment } from './IComment';
import { IPost } from './IPost';

export interface IUser {
  id: string;
  comments: IComment[];
  engagementRate: number;
  followers: number;
  createdAt: Date;
  likes: number;
  username: string;
  posts: IPost[];
  email: string;
}
