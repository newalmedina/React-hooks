import React, { useContext, useState } from 'react';
import { TodosContext } from './App';
import { Button, Form, Table } from 'react-bootstrap'

const ToDoList = () => {
    const { state, dispatch } = useContext(TodosContext)
    const [todoText, setTodoText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [editTodo, setEditTodo] = useState(null)
    const buttonTitle = editMode ? "Edit" : "Add"

    const saveItem = event => {
        event.preventDefault();
        if (editMode) {
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
            setEditMode(false)
            setEditTodo(null)
        } else {
            dispatch({ type: 'add', payload: todoText })
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
                        <th>Delete</th>
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
                                <Button variant='danger' onClick={() =>
                                    dispatch({ type: "delete", payload: todo })}>
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