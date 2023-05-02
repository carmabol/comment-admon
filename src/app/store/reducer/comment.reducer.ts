import { createReducer, on } from "@ngrx/store";
import { commentsActions } from "../actions/comment.actions";
import { Comment } from '../models/comment.model'

const initialStateComment:ReadonlyArray<Comment>=[];
export const commentReducer = createReducer(initialStateComment,
    on(
      commentsActions.fillcomments,
      (_state,{comments}):ReadonlyArray<Comment>=>{
          console.log(comments);
          return comments;
      }
    ),
    on(
      commentsActions.updatescoreplus,
      (state,{commentId})=>{
        let currentCommentList = [...state];
        let commentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === commentId);
        let commentToUpdateManual:Comment;
        let index=0;
        console.log("Before UpdateScore: ",state);
        if(commentToUpdate && commentToUpdate?.score){
          commentToUpdateManual={
            id:commentToUpdate.id,
            content:commentToUpdate.content,
            createdAt:commentToUpdate.createdAt,
            score:commentToUpdate.score+1,
            user:commentToUpdate.user,
            replies:commentToUpdate?.replies
          }
          index=currentCommentList.indexOf(commentToUpdate)

          currentCommentList[index]=commentToUpdateManual;
        }
        console.log("UpdateScore: ",currentCommentList);
        let currentCommentListRO:readonly Comment[]=currentCommentList;
        return currentCommentListRO;

      }
      ),
    on(
      commentsActions.updatescoreminus,
      (state,{commentId})=>{
        let currentCommentList = [...state];
        let commentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === commentId);
        let commentToUpdateManual:Comment;
        let index=0;
        console.log("Before UpdateScore: ",state);
        if(commentToUpdate && commentToUpdate?.score){
          commentToUpdateManual={
            id:commentToUpdate.id,
            content:commentToUpdate.content,
            createdAt:commentToUpdate.createdAt,
            score:commentToUpdate.score-1,
            user:commentToUpdate.user,
            replies:commentToUpdate?.replies
          }
          index=currentCommentList.indexOf(commentToUpdate)

          currentCommentList[index]=commentToUpdateManual;
        }
        console.log("UpdateScore: ",currentCommentList);
        let currentCommentListRO:readonly Comment[]=currentCommentList;
        return currentCommentListRO;

      }
      )
    )

