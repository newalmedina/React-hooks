import React, { useContext, useState, useEffect } from 'react';
import { TodosContext } from './App';
import { Button, Form, Table } from 'react-bootstrap'
import useAPI from './useAPI';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

const ToDoList = (props) => {
    const { state, dispatch } = useContext(TodosContext)
    const [todoText, setTodoText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [editTodo, setEditTodo] = useState(null)
    const buttonTitle = editMode ? "Edit" : "Add"

    const endpoint = props.path + "todos/"
    const savedTodos = useAPI(endpoint)

    useEffect(() => {
        dispatch({ type: 'get', payload: savedTodos })

    }, [savedTodos]);

    const saveItem = async event => {
        event.preventDefault();
        if (editMode) {
            await axios.patch(endpoint + editTodo.id, { text: todoText })
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
            setEditMode(false)
            setEditTodo(null)
        } else {
            const newTodo = { id: uuidv4(), text: todoText }
            await axios.post(endpoint, newTodo)
            dispatch({ type: 'add', payload: newTodo })
        }
        setTodoText("")
    }
    return (

        <div >
            <Form onSubmit={saveItem} className="mt-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter To Do"
                        onChange={event => setTodoText(event.target.value)}
                        value={todoText}
                    />
                </Form.Group>
                <Button variant="success" type="submit" className='mt-2 mb-2'>
                    {buttonTitle}
                </Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>To Do</th>
                        <th>Edit</th>
                        <th style={{ color: "red" }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map(todo => (
                        <tr key={todo.id}>
                            <td >{todo.text}</td>
                            <td>
                                <Button variant='primary' onClick={() => {
                                    setTodoText(todo.text)
                                    setEditMode(true)
                                    setEditTodo(todo)
                                }}>
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button variant='danger'
                                    onClick={async () => {
                                        await axios.delete(endpoint + todo.id)
                                        dispatch({ type: "delete", payload: todo })
                                    }}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div >

    );
}

export default ToDoList;