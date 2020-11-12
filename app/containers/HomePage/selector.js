import { createSelector } from "reselect";
import { initialState } from "./reducer";

const stateSelector=state=>state.dictionaryData || initialState

const dictionarySelector=()=> createSelector(
    stateSelector,
    substate=>substate
);

export default dictionarySelector
export {dictionarySelector}