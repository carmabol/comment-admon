import { createActionGroup, props } from "@ngrx/store";
import { Comment } from '../models/comment.model'

export const commentsActions=createActionGroup(
    {
        source:"Comments",
        events:{
            getComments:props<{comments:Comment[]}>(),
            fillComments:props<{comments:Comment[]}>(),
            updateScorePlus:props<{commentId:number}>(),
            updateScoreMinus:props<{commentId:number}>(),
        }
    })
