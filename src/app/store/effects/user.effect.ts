import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { userActions } from "../actions/user.actions";

@Injectable()
export class UserEffects {
    loadUser$ = createEffect(
        ()=>{
            return this.actions$.pipe(
                ofType(userActions.getuser),
                map(()=>{
                    const userLoaded={
                      image: {
                        png: '/assets/images/avatars/image-juliusomo.png',
                        webp: 'xxx.webp'
                    },
                      username: "juliusomo"
                    } as any;
                    return (userActions.filluser({user:userLoaded}))
                }
                )
            )
        },

    )

    constructor(private actions$: Actions) {}
}
