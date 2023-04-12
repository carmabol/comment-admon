import { createReducer, on } from "@ngrx/store";
import { commentActions } from "../actions/comment.actions";

const initialStateComment:ReadonlyArray<Comment>=[];
export const reducerComment = createReducer(initialStateComment,
    on(
    commentActions.fillcomments,
    (state,commentList)=>{
        console.log(commentList);
        return {...state, commentList}
    }
    ))

