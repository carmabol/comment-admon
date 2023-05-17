import { createReducer, on } from "@ngrx/store";
import { commentsActions } from "../actions/comment.actions";
import { Comment, Reply } from '../models/comment.model'

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
      commentsActions.updatescore,
      (state,{commentId,increase})=>{
        let currentCommentList = [...state];
        let commentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === commentId);
        let commentToUpdateManual:Comment;
        let index=0;
        console.log("Before UpdateScore: ",state);
        if(commentToUpdate){
          const score = increase ? commentToUpdate.score+1 : commentToUpdate.score-1;
          commentToUpdateManual=
          {...commentToUpdate,
            score:score
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
      commentsActions.updatescorereply,
      (state,{commentId,increase,idParent})=>{
        let currentCommentList = [...state];
        let parentCommentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === idParent);
        let commentToUpdate=parentCommentToUpdate?.replies.find( comment => comment.id === commentId)
        let commentToUpdateManual:Reply;
        let index=0;
        let indexParent=0;
        console.log("Before UpdateScore: ",state);
        if(commentToUpdate&&parentCommentToUpdate){
          const score = increase ? commentToUpdate.score+1 : commentToUpdate.score-1;
          commentToUpdateManual=
          {...commentToUpdate,
            score:score
          }

          index=parentCommentToUpdate?.replies?.indexOf(commentToUpdate);
          indexParent=currentCommentList.indexOf(parentCommentToUpdate);

          const replies=[...parentCommentToUpdate.replies];
          replies[index]={...commentToUpdateManual};
          currentCommentList[indexParent]={
            ...parentCommentToUpdate,
            replies: [
              ...replies
            ]
          } //commentToUpdateManual;
        }
        console.log("UpdateScore: ",currentCommentList);
        let currentCommentListRO:readonly Comment[]=currentCommentList;
        return currentCommentListRO;

      }
      ),
      on(
        commentsActions.createcomment,
        (state,{comment,user})=>{
          let currentCommentList = [...state];
          let commentCreated:Comment={
            id: 5,
            content: comment,
            createdAt: 'A minute ago',
            score: 0,
            user: user,
            replies: []
          }

          currentCommentList.push(commentCreated);

          /*let parentCommentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === idParent);
          let commentToUpdate=parentCommentToUpdate?.replies.find( comment => comment.id === commentId)
          let commentToUpdateManual:Reply;
          let index=0;
          let indexParent=0;
          console.log("Before UpdateScore: ",state);
          if(commentToUpdate&&parentCommentToUpdate){
            const score = increase ? commentToUpdate.score+1 : commentToUpdate.score-1;
            commentToUpdateManual=
            {...commentToUpdate,
              score:score
            }

            index=parentCommentToUpdate?.replies?.indexOf(commentToUpdate);
            indexParent=currentCommentList.indexOf(parentCommentToUpdate);

            const replies=[...parentCommentToUpdate.replies];
            replies[index]={...commentToUpdateManual};
            currentCommentList[indexParent]={
              ...parentCommentToUpdate,
              replies: [
                ...replies
              ]
            } //commentToUpdateManual;
          }*/
          console.log("CreateComment: ",currentCommentList);
          let currentCommentListRO:readonly Comment[]=currentCommentList;
          return currentCommentListRO;

        }
        ),
        on(
          commentsActions.createcommentreply,
          (state,{comment,user,replyingTo,idParent})=>{
            let currentCommentList = [...state];
            let parentCommentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === idParent);
            let indexParent=0;
            let commentCreated:Comment;
            let commentToCreateManual:Reply;
            let replies:Reply[];
            let parentCommentToUpdateManual:Comment|undefined

            if(parentCommentToUpdate){
              indexParent=currentCommentList.indexOf(parentCommentToUpdate);

              commentCreated={
                id: parentCommentToUpdate.replies.length,
                content: comment,
                createdAt: 'A minute ago',
                score: 0,
                user: user,
                replies: []
              }

            commentToCreateManual={
              ...commentCreated,
              replyTo:replyingTo,
              replyingParent:parentCommentToUpdate.id
            }


          replies=[];
            replies=[...parentCommentToUpdate.replies];

            parentCommentToUpdateManual={
                ...parentCommentToUpdate,
                replies:[...replies,
                  commentToCreateManual
                ]
            }

            currentCommentList[indexParent]={
              ...parentCommentToUpdateManual
            }
          }
            console.log("Create Comment Reply: ",currentCommentList);
            let currentCommentListRO:readonly Comment[]=currentCommentList;
            return currentCommentListRO;
          }),
          on(
            commentsActions.deletecomment,
            (state,{commentId})=>{
              let currentCommentList = [...state];
              let filterCommentList=currentCommentList.filter(comment => comment.id !== commentId);

              console.log("Before Delete: ",state);

              console.log("UpdateScore: ",currentCommentList);
              let currentCommentListRO:readonly Comment[]=filterCommentList;
              return currentCommentListRO;

            }
            ),
            on(
              commentsActions.deletecommentreply,
              (state,{commentId,parentId})=>{


                let currentCommentList = [...state];

                let parentCommentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === parentId);
                let indexParent=0;
                let replies:Reply[];
                let parentCommentToUpdateManual:Comment|undefined
                if(parentCommentToUpdate){
                  indexParent=currentCommentList.indexOf(parentCommentToUpdate);
                  replies=parentCommentToUpdate.replies.filter(comment => comment.id !== commentId);
                  currentCommentList[indexParent]={
                    ...parentCommentToUpdate,
                    replies: [
                      ...replies
                    ]
                  } //commentToUpdateManual;
                }
                //let filterCommentList=currentCommentList.filter(comment => comment.id > commentId);

                console.log("Before Delete: ",state);

                console.log("UpdateScore: ",currentCommentList);
                let currentCommentListRO:readonly Comment[]=currentCommentList;
                return currentCommentListRO;
              }
              ),
              on(
                commentsActions.updatecomment,
                (state,{commentId,content})=>{
                  let currentCommentList = [...state];
                  let commentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === commentId);
                  let commentToUpdateManual:Comment;
                  let index=0;
                  console.log("Before UpdateScore: ",state);
                  if(commentToUpdate){
                    const contentComment = content;
                    commentToUpdateManual=
                    {...commentToUpdate,
                      content:contentComment
                    }
                    index=currentCommentList.indexOf(commentToUpdate)
                    currentCommentList[index]=commentToUpdateManual;
                  }
                  console.log("UpdateComment: ",currentCommentList);
                  let currentCommentListRO:readonly Comment[]=currentCommentList;
                  return currentCommentListRO;

                }
                ),
                on(
                  commentsActions.updatecommentreply,
                  (state,{commentId,content,idParent})=>{
                    let currentCommentList = [...state];
                    let parentCommentToUpdate:Comment|undefined = currentCommentList.find( comment => comment.id === idParent);
                    let commentToUpdate=parentCommentToUpdate?.replies.find( comment => comment.id === commentId)
                    let commentToUpdateManual:Reply;
                    let index=0;
                    let indexParent=0;
                    console.log("Before UpdateScore: ",state);
                    if(commentToUpdate&&parentCommentToUpdate){
                      const contentComment = content;
                      commentToUpdateManual=
                      {...commentToUpdate,
                        content:contentComment
                      }

                      index=parentCommentToUpdate?.replies?.indexOf(commentToUpdate);
                      indexParent=currentCommentList.indexOf(parentCommentToUpdate);

                      const replies=[...parentCommentToUpdate.replies];
                      replies[index]={...commentToUpdateManual};
                      currentCommentList[indexParent]={
                        ...parentCommentToUpdate,
                        replies: [
                          ...replies
                        ]
                      } //commentToUpdateManual;
                    }
                    console.log("UpdateCommentReply: ",currentCommentList);
                    let currentCommentListRO:readonly Comment[]=currentCommentList;
                    return currentCommentListRO;

                  }
                  ),
    )

