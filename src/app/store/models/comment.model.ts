import { User } from "./user.model";

export interface Comment{
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: User,
    replies: Reply[];
}

export interface Reply extends Comment{
  replyTo:string;
  replyingParent:number,

}
