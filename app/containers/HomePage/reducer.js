import produce from "immer"
import { FETCH_ERROR, FETCH_INFO, FETCH_SUCCESS } from "./constants"

export const initialState={
    loading:false,
    data:null,
   
}


 const DictionaryReducer=(state=initialState,action)=>
    produce(state,draft=>{
        switch(action.type)
        {
            case FETCH_INFO:
                draft.loading=true
                break;
            
            case FETCH_SUCCESS:
                    draft.loading=false,
                    draft.data=action.wordDetails
                    break;
    
            case FETCH_ERROR:
             
                    draft.loading=false
                    break;
        }
    })
    


export default DictionaryReducer