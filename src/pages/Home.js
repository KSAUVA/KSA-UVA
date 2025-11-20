import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/main.css";

/**
 * Homepage with full-width banner.
 * The only logic preserved from the original is the live Google Calendar events.
 */

// Calendar ID from the user's embed URL
const CAL_ID =
    "9087d643acfa69bd125566ec4997d55a936394274e87684bec097456b41a41cf@group.calendar.google.com";

// Get API key from env
const API_KEY =
    import.meta?.env?.VITE_GCAL_API_KEY || process.env.REACT_APP_GCAL_API_KEY;

function fmtTime(dtStr) {
    const d = new Date(dtStr);
    const date = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
    }).format(d);
    const time = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
    }).format(d);
    return { date, time };
}

function tagFor(summary = "") {
    const s = summary.toLowerCase();
    if (s.includes("workshop")) return "Workshop";
    if (s.includes("mixer") || s.includes("social")) return "Social";
    if (s.includes("chuseok") || s.includes("culture")) return "Cultural";
    return "Event";
}

/* ------------------------- EVENTS PREVIEW (KEEP) ------------------------- */
function EventsPreview() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!API_KEY) {
            setLoading(false);
            setError("Missing Google Calendar API key");
            return;
        }

        const timeMin = new Date().toISOString();
        const url = new URL(
            `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
                CAL_ID
            )}/events`
        );
        url.searchParams.set("key", API_KEY);
        url.searchParams.set("singleEvents", "true");
        url.searchParams.set("orderBy", "startTime");
        url.searchParams.set("timeMin", timeMin);
        url.searchParams.set("maxResults", "6");
        url.searchParams.set("timeZone", "America/New_York");

        fetch(url.toString())
            .then((r) => r.json())
            .then((data) => {
                const items = (data.items || [])
                    .filter((e) => e.status !== "cancelled")
                    .map((e) => {
                        const startISO = e.start?.dateTime || e.start?.date;
                        const endISO = e.end?.dateTime || e.end?.date;
                        return {
                            id: e.id,
                            title: e.summary || "Untitled Event",
                            desc: e.description || "",
                            location: e.location || "",
                            startISO,
                            endISO,
                            tag: tagFor(e.summary),
                            htmlLink: e.htmlLink,
                        };
                    });
                setEvents(items.slice(0, 3));
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to load events");
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Row className="mb-3">
                <Col className="d-flex justify-content-between align-items-end">
                    <div>
                        <h3 className="mb-0">Upcoming Events</h3>
                        <small className="text-muted">Live from our Google Calendar</small>
                    </div>
                    <a
                        className="btn btn-outline-danger btn-sm"
                        href="https://calendar.google.com/calendar/embed?src=9087d643acfa69bd125566ec4997d55a936394274e87684bec097456b41a41cf%40group.calendar.google.com&ctz=America%2FNew_York"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Full Calendar
                    </a>
                </Col>
            </Row>

            {error && (
                <Row className="mb-3">
                    <Col>
                        <div className="alert alert-warning py-2 mb-0">
                            {error}. Set <code>VITE_GCAL_API_KEY</code> or{" "}
                            <code>REACT_APP_GCAL_API_KEY</code> and make sure the calendar is
                            public.
                        </div>
                    </Col>
                </Row>
            )}

            <Row className="g-4">
                {loading &&
                    [0, 1, 2].map((i) => (
                        <Col md={4} key={i}>
                            <Card className="h-100 home-card">
                                <Card.Body>
                                    <div className="placeholder-glow">
                                        <span className="placeholder col-3 me-2" />
                                        <span className="placeholder col-2" />
                                    </div>
                                    <div className="placeholder-glow mt-2">
                                        <span className="placeholder col-8" />
                                    </div>
                                    <div className="placeholder-glow mt-2">
                                        <span className="placeholder col-12" />
                                        <span className="placeholder col-10" />
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="outline-danger"
                                        disabled
                                        className="mt-3"
                                    >
                                        Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                {!loading && events.length === 0 && (
                    <Col>
                        <Card className="h-100 home-card">
                            <Card.Body>
                                <Card.Title className="mb-2">No upcoming events</Card.Title>
                                <Card.Text className="text-muted">
                                    Check back soon for new events.
                                </Card.Text>
                                <a
                                    className="btn btn-outline-danger btn-sm"
                                    href="https://calendar.google.com/calendar/embed?src=9087d643acfa69bd125566ec4997d55a936394274e87684bec097456b41a41cf%40group.calendar.google.com&ctz=America%2FNew_York"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Full Calendar
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                )}

                {!loading &&
                    events.map((e) => {
                        const isAllDay = e.startISO?.length === 10;
                        const { date, time } = isAllDay
                            ? {
                                date: new Date(e.startISO).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                }),
                                time: "All day",
                            }
                            : fmtTime(e.startISO);

                        const descPlain = e.desc.replace(/<[^>]*>/g, "");

                        return (
                            <Col md={4} key={e.id}>
                                <Card className="h-100 home-card home-card-event lift">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between mb-2">
                                            <Badge bg="danger" pill>
                                                {e.tag}
                                            </Badge>
                                            <small className="text-muted">
                                                {date} • {time}
                                            </small>
                                        </div>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text className="text-muted">
                                            {descPlain
                                                ? descPlain.slice(0, 140) +
                                                (descPlain.length > 140 ? "…" : "")
                                                : e.location || "Details coming soon."}
                                        </Card.Text>
                                        <a
                                            className="btn btn-sm btn-outline-danger"
                                            href={e.htmlLink}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View in Google Calendar
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </>
    );
}

/* ---------------------------- FULL-WIDTH BANNER ---------------------------- */

function TopBanner() {
    const bg = `/boardPhotos/full.webp`; // wide group photo

    return (
        <section
            className="home-banner d-flex align-items-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.4)), url(${bg})`,
            }}
        >
            <Container>
                <Row>
                    <Col md={8}>
                        {/* Tiny Hangul accent, not the main focus */}
                        <div className="home-korean-pill mb-3">한인 학생회 · KSA at UVA</div>
                        <div className="home-korean-pill mb-3">한인 학생회400 · KSA at UVA</div>
                        <div className="home-korean-pill mb-3">한인 학생회400 · KSA at UVA</div>

                        <h1 className="home-banner-title mb-2">
                            Korean Student Association at UVA
                        </h1>
                        <p className="home-banner-subtitle mb-3">
                            Celebrating Korean culture, friendships, and community on Grounds.
                        </p>

                        <Row className="g-2 home-hero-stats">
                            {[
                                { label: "Members", value: "1000+" },
                                { label: "Events / Year", value: "30+" },
                                { label: "Founded", value: "2013" },
                            ].map((s, i) => (
                                <Col xs={6} sm={3} key={i}>
                                    <div className="home-stat">
                                        <div className="home-stat-value">{s.value}</div>
                                        <div className="home-stat-label">{s.label}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* Subtle taegeuk-inspired color strip */}
            <div className="home-taegeuk-bar" />
        </section>
    );
}

/* ------------------------- ABOUT & HIGHLIGHTS ------------------------- */

function AboutSection() {
    return (
        <section className="home-section py-5">
            <Container>
                <Row className="align-items-center gy-4">
                    <Col md={6}>
                        <h2 className="h2 mb-3">Who we are</h2>
                        <p className="text-muted mb-3">
                            KSA at UVA is a student-run organization dedicated to promoting
                            Korean culture, building cross-cultural friendships, and creating
                            inclusive spaces for everyone interested.
                        </p>
                        <p className="text-muted mb-4">
                            From Chuseok and K-EXPO performances to late-night hangs
                            and KSA Families, we connect students through culture, food,
                            music, and shared experiences.
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                            <Button as={Link} to="/about" variant="danger">
                                Learn more about KSA
                            </Button>
                            <Button as={Link} to="/gallery" variant="outline-secondary">
                                Browse past events
                            </Button>
                        </div>
                    </Col>

                    <Col md={6}>
                        <Row className="g-3">
                            <Col sm={6}>
                                <Card className="home-card glass lift h-100">
                                    <Card.Body>
                    <span className="home-badge-pill mb-2 d-inline-block">
                      Community
                    </span>
                                        <h5 className="mb-2">KSA Fams + Bigs</h5>
                                        <p className="text-muted mb-0 small">
                                            Our family system pairs new members with upperclassmen
                                            mentors so Grounds feels a little more like home.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="home-card glass lift h-100">
                                    <Card.Body>
                    <span className="home-badge-pill mb-2 d-inline-block">
                      Culture
                    </span>
                                        <h5 className="mb-2">Cultural Nights</h5>
                                        <p className="text-muted mb-0 small">
                                            Celebrate big moments like Chuseok and K-EXPO with
                                            performances, games, and Korean food.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="home-card glass lift h-100">
                                    <Card.Body>
                    <span className="home-badge-pill mb-2 d-inline-block">
                      Social
                    </span>
                                        <h5 className="mb-2">Social</h5>
                                        <p className="text-muted mb-0 small">
                                            Meet new friends through collabs with other big/littles,
                                            social events, and chill hangouts.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="home-card glass lift h-100">
                                    <Card.Body>
                    <span className="home-badge-pill mb-2 d-inline-block">
                      Growth
                    </span>
                                        <h5 className="mb-2">Leadership &amp; Service</h5>
                                        <p className="text-muted mb-0 small">
                                            Plan events, support the community, and build leadership
                                            skills on our officer teams and committees.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

/* ------------------------ EVENTS & CALENDAR WRAP ------------------------ */

function EventsSection() {
    return (
        <section className="home-section home-section-muted py-5">
            <Container>
                <Row className="mb-4">
                    <Col className="text-center">
                        <h2 className="h3 mb-1">This Semester&apos;s Events</h2>
                        <p className="text-muted mb-0">
                            These are pulled live from our public Google Calendar.
                        </p>
                    </Col>
                </Row>
                <Row className="gy-4">
                    <Col lg={8}>
                        <EventsPreview />
                    </Col>
                    <Col lg={4}>
                        <Card className="home-card glass lift h-100">
                            <Card.Body>
                                <h5 className="mb-3">Stay in the loop</h5>
                                <p className="text-muted small mb-3">
                                    Get the latest updates, event reminders, and opportunities to
                                    get involved with KSA.
                                </p>
                                <ul className="list-unstyled small text-muted mb-4">
                                    <li className="mb-2">• Follow our Instagram for photos</li>
                                    <li className="mb-2">
                                        • Join our fam-chats in Messenger for announcements
                                    </li>
                                    <li className="mb-2">
                                        • Add our Google Calendar so you never miss an event
                                    </li>
                                </ul>
                                <div className="d-grid gap-2">
                                    <Button
                                        as={Link}
                                        to="/join"
                                        variant="danger"
                                        className="w-100"
                                    >
                                        Join KSA
                                    </Button>
                                    <Button
                                        href="https://calendar.google.com/calendar/embed?src=9087d643acfa69bd125566ec4997d55a936394274e87684bec097456b41a41cf%40group.calendar.google.com&ctz=America%2FNew_York"
                                        target="_blank"
                                        rel="noreferrer"
                                        variant="outline-secondary"
                                        className="w-100"
                                    >
                                        Add calendar to your account
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

/* ------------------------------- PAGE ------------------------------- */

export default function Home() {
    return (
        <>
            <style>{`
        .lift {
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(15,23,42,0.28);
        }

        .glass {
          backdrop-filter: blur(14px);
          background: rgba(255,255,255,0.88);
          border: 1px solid rgba(148,163,184,0.35) !important;
        }

        .home-card {
          border-radius: 1.1rem;
        }

        .home-card-event {
          border-left: 4px solid #dc2626;
        }

        .home-section {
          position: relative;
          z-index: 1;
          background-color: #f9fafb;
        }

        .home-section + .home-section {
          border-top: 1px solid #e5e7eb;
        }

        .home-section-muted {
          background: radial-gradient(circle at top left, #fee2e2 0, #f8fafc 40%, #f1f5f9 100%);
        }

        /* FULL-WIDTH TOP BANNER */
        .home-banner {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          min-height: 260px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: #fff;
          display: flex;
          align-items: center;
          padding: 72px 0 56px;
          overflow: hidden;
        }

        .home-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.35));
        }

        .home-banner > * {
          position: relative;
          z-index: 1;
        }

        .home-banner-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }

        .home-banner-subtitle {
          font-size: 1.05rem;
          font-weight: 400;
          opacity: 0.95;
        }

        .home-korean-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.9rem;
          border-radius: 999px;
          background: rgba(15,23,42,0.75);
          border: 1px solid rgba(249,250,251,0.4);
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .home-taegeuk-bar {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #0047ab 0%, #ffffff 50%, #cd2e3a 100%);
          opacity: 0.95;
        }

        .home-stat {
          border-radius: 999px;
          background: rgba(15,23,42,0.7);
          border: 1px solid rgba(148,163,184,0.8);
          padding: 6px 14px;
        }

        .home-stat-label {
          text-transform: uppercase;
          letter-spacing: .08em;
          font-size: 0.65rem;
          color: #e5e7eb;
        }

        .home-stat-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fefce8;
        }

        .home-badge-pill {
          background-color: rgba(248, 113, 113, 0.12);
          color: #b91c1c;
          border-radius: 999px;
          padding: 0.2rem 0.65rem;
          font-weight: 500;
          font-size: 0.75rem;
        }

        @media (max-width: 768px) {
          .home-banner {
            min-height: 240px;
            padding: 56px 0 40px;
          }
          .home-hero-stats {
            margin-top: 0.75rem;
          }
        }
      `}</style>

            <TopBanner />
            <AboutSection />
            <EventsSection />
        </>
    );
}
