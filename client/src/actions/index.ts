import axios, { AxiosPromise } from "axios";
import { DefaultRootState, DispatchProp, ReactReduxContextValue } from "react-redux";
import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { stateType } from "../reducer";
import { User, UserAuth0 } from "../types";

const api=axios.create({
    baseURL:"http://localhost:3001"
})

export const GET_USER:string="GET_USER"
export const GET_ALL_MISSING_PETS="GET_ALL_MISSING_PETS"

export function getUser(user:UserAuth0):ThunkAction<void, stateType, unknown, AnyAction>{
    return async (dispatch)=>{
        try {
            let userDB=await api.post(`/getUser/${user.sub}`,{user:user})
            dispatch({type:GET_USER,payload:userDB.data})
            
        } catch (error) {
            alert(error)
        }

    }
}

export function getAllMissingPets():ThunkAction<void, stateType, unknown, AnyAction>{
    return async (dispatch)=>{
        try {
            let allMissingPets=await api.get(`/getAllMissingPets`)
            dispatch({type:GET_ALL_MISSING_PETS,payload:allMissingPets.data})
            
        } catch (error) {
            alert(error)
        }

    }
}