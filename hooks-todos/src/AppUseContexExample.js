import React,{useContext, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {UserContext} from './index'
import {Button} from 'react-bootstrap'

function App() {
  const value = useContext(UserContext)
 
  const initialState={
    count:0
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state,action){
    switch (action.type) {
      case 'increment':
        return {count:state.count+1}    
        
      case 'decrement':
        return {count:state.count-1}    

      case 'reset':
        return initialState    

      default:
        return initialState    
    }
    
      
  }

  return (
    <div>
      Received, {value}

      <h1>Count: {state.count}</h1>
      <br/>

      <Button onClick={()=>dispatch({type:'increment'})}>Increment</Button>
      <Button variant='secondary' className="ms-2" onClick={()=>dispatch({type:'decrement'})}>Decrement</Button>
      <Button variant='success' className="ms-2" onClick={()=>dispatch({type:'reset'})}>Reset</Button>
    </div>
  );
}

export default App;
