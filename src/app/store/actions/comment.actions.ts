import { createActionGroup, props } from "@ngrx/store";
import { Comment } from '../models/comment.model'
import { User } from "../models/user.model";

export const commentsActions=createActionGroup(
    {
        source:"Comments",
        events:{
            getComments:props<{comments:Comment[]}>(),
            fillComments:props<{comments:Comment[]}>(),
            updateScore:props<{commentId:number,increase:boolean}>(),
            updateScoreReply:props<{commentId:number,increase:boolean,idParent:number}>(),
            createComment:props<{comment:string,user:User}>(),
            createCommentReply:props<{comment:string,user:User,replyingTo:string,idParent:number}>()
        }
    })
