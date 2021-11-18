import { Action, AnyAction } from "redux"
import { GET_USER } from "../actions"
import { User } from "../types"

const initialState:stateType = {
    userDB:undefined
}
export interface stateType{
    userDB: User |undefined
}

export default (state:stateType = initialState, { type, payload}:AnyAction)=> {
    switch (type) {

    case GET_USER:
        return { ...state, userDB:payload}

    default:
        return state
    }
}

