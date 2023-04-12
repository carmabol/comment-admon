import { createActionGroup, props } from "@ngrx/store";

export const commentActions=createActionGroup(
    {
        source:"Comment",
        events:{
            getComments:props<{comments:Comment[]}>(),
            fillComments:props<{comments:Comment[]}>(),
        }
    })