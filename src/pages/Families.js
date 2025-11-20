import React from 'react';
import { Container, Row, Col, Alert, Image } from 'react-bootstrap';
import { FaTools, FaHardHat, FaHourglassHalf } from 'react-icons/fa';

function Families() {
    return (
        <Container className="py-5 text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="mb-4">
                        <FaHardHat size={70} color="#ff4d4d" className="me-3" />
                        <FaTools size={70} color="#ff4d4d" className="me-3" />
                        <FaHourglassHalf size={70} color="#ff4d4d" />
                    </div>
                    <h1 className="fw-bold">🚧 KSA Families Almost here🚧</h1>
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

export default Families;






/*
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Families() {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1>KSA Families</h1>
                    <p>
                        KSA Families are a great way to connect with other members and build lasting friendships. Each family participates in fun activities, bonding events, and competitions throughout the year.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Families;

 */