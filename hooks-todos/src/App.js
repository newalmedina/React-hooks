import React, {  useReducer } from 'react';

import './App.css';
import { Button } from 'react-bootstrap'
import ToDoList from './ToDoList';
export const TodosContext = React.createContext()


const todosInitialState = {
  todos: [
    { id: 1, text: "Finishing writing hooks chapter" },
    { id: 2, text: "Play with kids" },
    { id: 3, text: "Read bible" }
  ]
}

function todosReducer(state, action) {
  switch (action.type) {
    default:
      return todosInitialState
  }
}

function App() {

  const [state,dispatch] =useReducer(todosReducer,todosInitialState)

  return (
    <div>
    <TodosContext.Provider value={{state,dispatch}}>
    <ToDoList/>
    </TodosContext.Provider>
    </div>
  );
}

export default App;
