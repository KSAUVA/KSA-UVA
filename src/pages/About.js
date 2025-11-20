import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Image,
    Accordion,
} from "react-bootstrap";

const FEATURES = [
    {
        title: "Culture & Community",
        text: "Lunar New Year, Chuseok, food nights, and social mixers that bring people together.",
        icon: "🎎",
    },
    {
        title: "Signature Events",
        text: "Hanguk Day and KExpo showcase performances and student orgs in an action-packed day.",
        icon: "🎉",
    },
    {
        title: "Service & Outreach",
        text: "Volunteer projects and collaborations with other student orgs across Grounds.",
        icon: "🤝",
    },
];

const STATS = [
    { stat: "1000+", label: "Members" },
    { stat: "30+", label: "Events / Year" },
    { stat: "15+", label: "Campus Partners" },
];

const GALLERY_IMAGES = [
    "/famPhotos/pl5.jpg",
    "/famPhotos/pl6.jpg",
    "/famPhotos/pl10.jpg",
    "/famPhotos/pl11.jpg",
];

function About() {
    return (
        <>
            {/* Page styles */}
            <style>
                {`
        .about-banner {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          min-height: 60vh;
          display: flex;
          align-items: center;
          color: #fff;
          background: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.35)),
            url('/galleryPhotos/t1.jpg') center/cover no-repeat;
        }

        .about-banner-inner {
          position: relative;
          z-index: 1;
          padding: 5rem 0 4rem;
        }

        .about-kicker {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.8rem;
          font-weight: 600;
          opacity: 0.9;
        }

        .about-banner-title {
          font-size: clamp(2.8rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: .03em;
        }

        .about-banner-subtitle {
          max-width: 640px;
        }

        .about-banner-meta {
          display: flex;
          flex-wrap: wrap;
          gap: .75rem;
          margin-top: 1.5rem;
          font-size: .85rem;
          opacity: 0.92;
        }

        .about-chip {
          padding: .35rem .85rem;
          border-radius: 999px;
          background: rgba(248,250,252,0.18);
          border: 1px solid rgba(148,163,184,0.65);
        }

        .about-banner-actions .btn {
          min-width: 190px;
        }

        .about-section {
          padding: 4rem 0;
          background: #f9fafb;
        }

        .about-section:nth-of-type(even) {
          background: #ffffff;
        }

        .about-feature-card {
          border-radius: 1.1rem;
          border: 1px solid rgba(148,163,184,0.28);
          background:
            radial-gradient(circle at top left, rgba(248,113,113,0.08), transparent 55%),
            #ffffff;
          box-shadow: 0 10px 30px rgba(15,23,42,0.08);
          transition:
            transform .18s ease,
            box-shadow .18s ease,
            border-color .18s ease;
        }

        .about-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px rgba(15,23,42,0.18);
          border-color: rgba(248,113,113,0.7);
        }

        .about-feature-icon {
          font-size: 2.2rem;
        }

        .about-stats {
          background: radial-gradient(circle at top left, #fee2e2 0, #eff6ff 40%, #f9fafb 100%);
        }

        .about-stat-pill {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.25rem 1rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 10px 30px rgba(15,23,42,0.12);
          min-width: 160px;
        }

        .about-stat-pill h3 {
          margin-bottom: .2rem;
        }

        .about-gallery-img {
          transition: transform .3s ease, filter .3s ease;
        }

        .about-gallery-img:hover {
          transform: scale(1.05);
          filter: brightness(.92);
        }

        .about-faq-card {
          border-radius: 1.1rem;
          border: 1px solid rgba(148,163,184,0.28);
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15,23,42,0.06);
        }

        @media (max-width: 768px) {
          .about-banner-inner {
            padding: 4rem 1rem 3rem;
          }

          .about-banner-actions {
            flex-direction: column;
          }

          .about-banner-actions .btn {
            width: 100%;
          }
        }
      `}
            </style>

            {/* Hero */}
            <section className="about-banner">
                <Container className="about-banner-inner">
                    <Row className="justify-content-start">
                        <Col md={9} lg={7}>
                            <div className="about-kicker mb-2">About • KSA at UVA</div>
                            <h1 className="about-banner-title mb-3">Korean Student Association</h1>
                            <p className="lead about-banner-subtitle mb-4">
                                Promoting Korean culture, building community, and creating unforgettable
                                experiences on Grounds for students from all backgrounds.
                            </p>
                            <div className="d-flex flex-wrap gap-3 about-banner-actions mb-3">
                                <Button size="lg" variant="danger" href="/events">
                                    See Upcoming Events
                                </Button>
                                <Button size="lg" variant="outline-light" href="/join">
                                    Join KSA
                                </Button>
                            </div>
                            <div className="about-banner-meta">
                                <span className="about-chip">Founded 2013</span>
                                <span className="about-chip">Open to all Hoos</span>
                                <span className="about-chip">Culture • Community • Service</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* About */}
            <section className="about-section">
                <Container>
                    <Row className="mb-4">
                        <Col md={8}>
                            <h2 className="fw-bold mb-2">About KSA @ UVA</h2>
                            <p className="text-muted mb-0">
                                The Korean Student Association at UVA is dedicated to promoting Korean
                                culture, fostering cross-cultural exchange, and building a strong
                                community among students. We host events and activities to celebrate our
                                heritage and connect with others across Grounds.
                            </p>
                        </Col>
                    </Row>

                    <Row xs={1} md={3} className="g-4">
                        {FEATURES.map((c, i) => (
                            <Col key={i}>
                                <Card className="h-100 about-feature-card border-0">
                                    <Card.Body>
                                        <div className="about-feature-icon mb-2">{c.icon}</div>
                                        <Card.Title className="fw-semibold mb-2">{c.title}</Card.Title>
                                        <Card.Text className="text-muted mb-0">{c.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Stats */}
            <section className="about-section about-stats">
                <Container>
                    <Row className="justify-content-center text-center gy-4">
                        {STATS.map((s, i) => (
                            <Col md={4} key={i} className="d-flex justify-content-center">
                                <div className="about-stat-pill">
                                    <h3 className="display-6 fw-bold mb-0">{s.stat}</h3>
                                    <p className="text-muted mb-0">{s.label}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Gallery */}
            <section className="about-section">
                <Container>
                    <Row className="mb-3">
                        <Col>
                            <h2 className="fw-bold mb-2">Moments from Recent Events</h2>
                            <p className="text-muted mb-0">
                                Food nights, showcase performances, study sessions, and more.
                            </p>
                        </Col>
                    </Row>

                    <Row xs={2} md={4} className="g-3">
                        {GALLERY_IMAGES.map((src, i) => (
                            <Col key={i}>
                                <div className="ratio ratio-1x1 rounded overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`KSA gallery ${i + 1}`}
                                        className="w-100 h-100 object-fit-cover about-gallery-img"
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* FAQ */}
            <section className="about-section">
                <Container>
                    <Row className="mb-3">
                        <Col md={8}>
                            <h2 className="fw-bold mb-2">FAQ</h2>
                            <p className="text-muted mb-0">Quick answers for new and prospective members.</p>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        <Col md={8}>
                            <Card className="about-faq-card border-0">
                                <Card.Body>
                                    <Accordion alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Do I have to be Korean to join?</Accordion.Header>
                                            <Accordion.Body>
                                                Nope, KSA is open to everyone interested in Korean culture,
                                                language, food, and community.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How do I become a member?</Accordion.Header>
                                            <Accordion.Body>
                                                Hit <b>Join KSA</b> above and come to a general body meeting.
                                                Dues are due at the start of each semester, but can be paid at
                                                any time.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How can I stay updated?</Accordion.Header>
                                            <Accordion.Body>
                                                Follow our Instagram, join our mailing list, and check the Events
                                                page. We post monthly calendars and weekly reminders.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="about-faq-card border-0 h-100">
                                <Card.Body>
                                    <h5 className="fw-semibold mb-2">Still have questions?</h5>
                                    <p className="text-muted small mb-3">
                                        Reach out to our exec board and we&apos;ll get back to you as soon
                                        as we can.
                                    </p>
                                    <Button variant="danger" className="w-100 mb-2" href="/contact">
                                        Contact Us
                                    </Button>
                                    <Button
                                        variant="outline-secondary"
                                        className="w-100"
                                        href="/events"
                                    >
                                        View all events
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default About;
