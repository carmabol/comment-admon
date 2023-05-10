import { createReducer, on } from "@ngrx/store";
import { userActions } from "../actions/user.actions";
import { User } from "../models/user.model";

const initialStateUser:User={};

export const userReducer = createReducer(initialStateUser,
    on(
    userActions.filluser,
    (_state,{user}):User=>{
        console.log(user);
        return user;
    }
    ))

