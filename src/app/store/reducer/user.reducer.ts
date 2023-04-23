import { createReducer, on } from "@ngrx/store";
import { userActions } from "../actions/user.actions";
import { User } from "../models/user.model";

const initialStateUser:User={};

export const userReducer = createReducer(initialStateUser,
    on(
    userActions.filluser,
    (state,user)=>{
        console.log(user);
        return {...state, user}
    }
    ))

