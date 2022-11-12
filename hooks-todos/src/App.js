import React, { useReducer } from 'react';

import './App.css';
import { Button } from 'react-bootstrap'
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid'



const todosInitialState = {
  todos: [
    { id: 1, text: "Finishing writing hooks chapter" },
    { id: 2, text: "Play with kids" },
    { id: 3, text: "Read bible" }
  ]
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      const newTodo = { id: uuidv4(), text: action.payload }
      const addedTodos = [...state.todos, newTodo]
      return { ...state, todos: addedTodos }

    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos }

    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      return { ...state, todos: filteredTodoState }

    default:
      return todosInitialState
  }
}

export const TodosContext = React.createContext()

function App() {

  const [state, dispatch] = useReducer(todosReducer, todosInitialState)

  return (
    <div>
      <TodosContext.Provider value={{ state, dispatch }}>
        <ToDoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
