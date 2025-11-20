import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Events() {
    return (
        <Container className="py-5">
            <Row>
                <Col className="text-center">
                    <h2>Upcoming Events</h2>
                    <iframe
                        src="https://embed.styledcalendar.com/#VAUjCyMKKr2a1bO9yOj5"
                        title="Styled Calendar"
                        style={{
                            width: '100%',
                            height: '600px',
                            border: 'none',
                            marginTop: '2rem',
                        }}
                    ></iframe>
                </Col>
            </Row>
        </Container>
    );
}

export default Events;