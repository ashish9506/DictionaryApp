import request from 'utils/request';
import {call,put,takeLatest} from 'redux-saga/effects'
import { fetchDetailsError, fetchDetailsSuccess } from './actions'
import { FETCH_INFO, FETCH_SUCCESS } from './constants'

function* fetchInfo(action){
    const {word} =action
    const options={
        method:'GET',
        url:`/${word}`
    }

    try{
        const res=yield call(request,options);

        yield put(fetchDetailsSuccess(res));
    } catch(e){
        yield put(fetchDetailsError(e))
    }
  
}
export default function* mainSaga(){
    yield takeLatest(FETCH_INFO,fetchInfo)
}