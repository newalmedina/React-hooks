import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ReactLoading from 'react-loading'
import { Card, Row, Col, Container, Form } from 'react-bootstrap';

const GitHub = () => {

    const [data, setData] = useState([]);
    const [serachTerm, setSerachTerm] = useState("greg");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const res = await axios.get(`https://api.github.com/search/users?q=${serachTerm}`).then(res => {
            setData(res.data.items)
            setIsLoading(false)
        })

    }

    const listUsers = data.map((user) =>
        <Col md={4}>
            <Card style={{ width: '18rem' }} className="mt-2 col-md-4">
                <Card.Img variant="top" src="holder.js/100px180" src={user.avatar_url} />
                <Card.Body>
                    <Card.Title><i>Login: </i>{user.login}</Card.Title>
                    <Card.Text>
                        id: {user.id}
                    </Card.Text>

                </Card.Body>
            </Card></Col>

    )

    const sendFrm = event => {
        event.preventDefault()
        setIsLoading(true)
        getData()
    }

    return (
        <div>

            <Container fluid="md">
                <Row>
                    <Col >
                        <Form onSubmit={sendForm}>
                            <input
                                class="form-control"
                                type="text"
                                onChange={event => setSerachTerm(event.target.value)}
                                value={serachTerm}
                            />
                            <button type="submit">Search</button>

                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        {isLoading &&
                            <ReactLoading type='spinningBubbles' color='#444' />
                        }

                    </Col>
                </Row>
                <Row>

                    {listUsers}

                </Row>
            </Container>

        </div>
    );
}

export default GitHub;