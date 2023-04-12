import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { commentActions } from "../actions/comment.actions";

@Injectable()
export class CommentEffects {
    loadComments$ = createEffect(
        ()=>{
            return this.actions$.pipe(
                ofType(commentActions.getcomments),
                map(()=>{
                    const commentList=[
                        {
                          "id": 1,
                          "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
                          "createdAt": "1 month ago",
                          "score": 12,
                          "user": {
                            "image": { 
                              "png": "./images/avatars/image-amyrobson.png",
                              "webp": "./images/avatars/image-amyrobson.webp"
                            },
                            "username": "amyrobson"
                          }
                        },
                        {
                          "id": 2,
                          "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
                          "createdAt": "2 weeks ago",
                          "score": 5,
                          "user": {
                            "image": { 
                              "png": "./images/avatars/image-maxblagun.png",
                              "webp": "./images/avatars/image-maxblagun.webp"
                            },
                            "username": "maxblagun"
                          }
                        }
                      ] as any[];
                    return (commentActions.fillcomments({comments:commentList}))
                }
                )
            )
        },
        
    )

    constructor(private actions$: Actions) {}
}