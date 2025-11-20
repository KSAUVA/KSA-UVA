import React from 'react';
import { Container, Row, Col, Alert, Image } from 'react-bootstrap';
import { FaTools, FaHardHat, FaHourglassHalf } from 'react-icons/fa';

function Merch() {
    return (
        <Container className="py-5 text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="mb-4">
                        <FaHardHat size={70} color="#ff4d4d" className="me-3" />
                        <FaTools size={70} color="#ff4d4d" className="me-3" />
                        <FaHourglassHalf size={70} color="#ff4d4d" />
                    </div>
                    <h1 className="fw-bold">🚧 KSA Merch is Under Construction 🚧</h1>
                    <Alert variant="warning" className="mt-4">
                        <p style={{ fontSize: "1.2rem" }}>
                            We’re still cooking up some merch :).
                        </p>
                        <p style={{ fontSize: "1.1rem" }}>
                            Check back soon, or you’ll miss out 👀.
                        </p>
                    </Alert>
                    <Image
                        src="https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif"
                        fluid
                        rounded
                        className="shadow"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Merch;

/*
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Merch() {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1>KSA Merchandise</h1>
                    <p>Support KSA by purchasing our exclusive merchandise!</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/famPhotos/pl10.jpg" />
                        <Card.Body>
                            <Card.Title>Merch Item 1</Card.Title>
                            <Button variant="danger">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/famPhotos/pl11.jpg" />
                        <Card.Body>
                            <Card.Title>Merch Item 2</Card.Title>
                            <Button variant="danger">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/famPhotos/pl5.jpg" />
                        <Card.Body>
                            <Card.Title>Merch Item 3</Card.Title>
                            <Button variant="danger">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Merch;
*/
