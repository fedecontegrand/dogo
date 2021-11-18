import { Action, AnyAction } from "redux"
import { GET_ALL_MISSING_PETS, GET_USER } from "../actions"
import { allMissingPets, User } from "../types"

const initialState:stateType = {
    userDB:undefined,
    allMissingPets: undefined
}
export interface stateType{
    userDB: User |undefined,
    allMissingPets:allMissingPets[] | undefined
}

export default (state:stateType = initialState, { type, payload}:AnyAction)=> {
    switch (type) {

    case GET_USER:
        return { ...state, userDB:payload}
    
    case GET_ALL_MISSING_PETS:
            return {...state,allMissingPets:payload}
    default:
        return state
    }
}

