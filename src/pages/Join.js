import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const FORMS = {
    membership: {
        label: 'New Member',
        src: 'https://docs.google.com/forms/d/123vjUp0ca8_gfhtdZ9I9ENle35425znuDPggeeTC5nk/viewform?embedded=true',
        blurb: 'First time joining KSA? Start here.'
    },
    returning: {
        label: 'Returning Member',
        src: 'https://docs.google.com/forms/d/1_qVV7o2FUcf_Y5if4C6aa8JpWHGgsGbktoxCRnz5_5g/viewform?embedded=true',
        blurb: 'Back for another year — welcome!!'
    }
};

function Join() {
    const [active, setActive] = useState('membership');

    return (
        <div className="join-bg py-5">
            <Container>
                {/* Hero */}
                <Row className="justify-content-center text-center mb-4">
                    <Col lg={8}>
                        <span className="badge text-bg-danger rounded-pill mb-3 px-3 py-2">KSA 2025–2026</span>
                        <h1 className="fw-bold mb-2">Join KSA</h1>
                        <p className="text-muted lead mb-0">
                            Pick the form that fits you and submit in under 2 minutes.
                        </p>
                    </Col>
                </Row>

                {/* Tabs */}
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="glass-card p-3 p-md-4">
                            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                <Nav
                                    variant="pills"
                                    activeKey={active}
                                    onSelect={(k) => setActive(k || 'membership')}
                                    className="flex-wrap"
                                >
                                    {Object.entries(FORMS).map(([key, f]) => (
                                        <Nav.Item key={key}>
                                            <Nav.Link eventKey={key} className="px-3 py-2">
                                                {f.label}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                                <div className="text-muted small">{FORMS[active].blurb}</div>
                            </div>

                            {/* Iframe wrapper */}
                            <div className="iframe-wrap mt-3 mt-md-4">
                                <iframe
                                    key={active} // forces refresh when tab changes
                                    src={FORMS[active].src}
                                    title={`${FORMS[active].label} Form`}
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    loading="lazy"
                                >
                                    Loading…
                                </iframe>
                            </div>

                            {/* Note / help */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <small className="text-muted">
                                    Having trouble with the embed?{' '}
                                    <a href={FORMS[active].src.replace('?embedded=true', '')} target="_blank" rel="noreferrer">
                                        Open the form in a new tab
                                    </a>
                                    .
                                </small>
                                <small className="text-muted">⏱ Avg. completion: ~2 minutes</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Join;
