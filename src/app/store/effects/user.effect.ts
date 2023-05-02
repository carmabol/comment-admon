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
                        png: 'xxx.png',
                        webp: 'xxx.webp'
                    },
                      username: "carmabol"
                    } as any;
                    return (userActions.filluser({user:userLoaded}))
                }
                )
            )
        },

    )

    constructor(private actions$: Actions) {}
}
