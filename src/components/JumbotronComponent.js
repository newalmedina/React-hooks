import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
const JumbotronComponent = (props) => {
    return (
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>{props.children}</p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    );
}

export default JumbotronComponent;