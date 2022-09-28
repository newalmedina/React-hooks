import React, { useState } from 'react';

import { Form, Button, Alert } from 'react-bootstrap'
const UserForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("");

    const sendForm = (event) => {
        event.preventDefault()
        var emailValid = false
        var passwardValid = false

        if (email.length == 0) {
            setEmailError("Email is required")
        } else if (email.length < 6) {
            setEmailError("Email show be minimum 6 characters")
        } else {
            setEmailError('')
            emailValid = true
        }

        if (password.length == 0) {
            setPasswordError("Password is required")
        } else if (password.length < 3) {
            setPasswordError("Password show be minimum 3 characters")
        } else if (password.indexOf(' ') >= 0) {
            setPasswordError("Password can not contain spaces")
        }
        else {
            setPasswordError('')
            passwardValid = true
        }

        if (emailValid && passwardValid) {
            alert(`Email: ${email} and \n Password: ${password}`)
            setEmail("")
            setPassword("")
        }
    }
    return (
        <div>
            <Form onSubmit={sendForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                    {emailError.length > 0 &&
                        <label className='text-danger'>{emailError}</label>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                    {passwordError.length > 0 &&
                        <label className='text-danger'>{passwordError}</label>
                    }
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            Email entered: {email} <br />
            Pass entered: {password}

        </div >
    )
}

export default UserForm;