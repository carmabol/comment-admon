import { createActionGroup, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const userActions=createActionGroup(
    {
        source:"User",
        events:{
            getUser:props<{user:User}>(),
            fillUser:props<{user:User}>(),
        }
    })
