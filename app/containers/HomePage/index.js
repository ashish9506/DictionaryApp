
import React,{useState,memo} from 'react';
import GlobalStyle from '../../global-styles'
import reducer from './reducer'
import {useInjectReducer} from '../../utils/injectReducer'
import { createStructuredSelector } from 'reselect';
import dictionarySelector from './selector';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ShowResult from '../../components/showResult';
import { fetchInfo } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga'

  function HomePage(props) {
  useInjectReducer({key:"dictionaryData",reducer})
  useInjectSaga({ key: 'dictionaryData', saga });
  const [inputValue, setInputValue] = useState("")
  const {data,loading}=props.details
  const  enterKeyPressed =(e)=>{
    let code = e.keyCode || e.which;
    if(code===13)
    {
      props.dispatch(fetchInfo(inputValue))
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">Word Dictionary</h1>
      <div className="searchBoxContainer text-center my-5">
          <input 
          type="text" 
          className="shadow inputBox"
          value={inputValue}
          onChange={(e)=>{setInputValue(e.target.value)}}
          onKeyPress={enterKeyPressed}
          />
      </div>

      <div className="buttonsContainer text-center">
          <button 
          className="btn shadow btn-lg btn-warning"
          onClick={()=>{props.dispatch(fetchInfo(inputValue))}}
          disabled={loading}
          >Search</button>
          <button 
          className="btn shadow btn-lg btn-warning ml-4"
          onClick={()=>{setInputValue("")}}
          >Reset</button>
      </div>
      {data? <ShowResult data={data}/> : "" }
      <GlobalStyle />
    </div>
  );
}


const mapStateToProps=createStructuredSelector({
  details:dictionarySelector()
})

const mapDispatchToProps=(dispatch)=>{
  return{
    dispatch
  }
}
const withConnect=connect(mapStateToProps,mapDispatchToProps)

export default compose(withConnect,memo)(HomePage)
