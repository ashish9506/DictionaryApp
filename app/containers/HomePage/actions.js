import { FETCH_ERROR, FETCH_INFO, FETCH_SUCCESS } from "./constants"

export const fetchInfo=(word)=>{
    return{
        type:FETCH_INFO,
        word
    }
}

export const fetchDetailsSuccess=(wordDetails)=>{
    return{
        type:FETCH_SUCCESS,
        wordDetails
    }

}

export const fetchDetailsError=(error)=>{
    return{
        type:FETCH_ERROR,
        payload:error
    }
}