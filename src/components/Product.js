import React, { useState } from 'react';
import Rating from './Rating';

import { Media, Card, Row, Col } from 'react-bootstrap';

const Product = (props) => {
    return (
        <div>
            <Card className="mb-3">
                <Card.Body>
                    <Row>
                        <Col md={2}>
                            <img
                                alt="Sample Image"

                                className="mr-3"
                                src={props.data.imageUrl}
                            />
                        </Col>
                        <Col md={10}>
                            <h5>{props.data.productName}</h5>
                            {props.data.releasedDate}
                            <Rating
                                rating={props.data.rating}
                                numOfReviews={props.data.numOfReviews}
                            />
                            <p>{props.data.description}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </div>
    );
}

export default Product;