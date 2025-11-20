// src/pages/Officers.js
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

// ------------------------------
// DATA
// ------------------------------
const exec = [
    { name: "Bonny Koo",   role: "President",      photo: "/boardPhotos/bonny.webp" },
    { name: "Hannah Lee",  role: "Vice President", photo: "/boardPhotos/hannah.webp" },
    { name: "Alicia Yoo",  role: "Secretary",      photo: "/boardPhotos/alicia.webp" },
];

// Flat list you provided (left as-is)
const councilFlat = [
    // Internal
    { name: "Alana Lee",   role: "Internal Chair", photo: "/boardPhotos/alana.webp" },
    { name: "Sam Leal",    role: "Internal Chair", photo: "/boardPhotos/sam.webp" },
    { name: "Esther Kong", role: "Internal Chair", photo: "/boardPhotos/esther.webp" },

    // Culture
    { name: "Nuri Han",     role: "Culture Chair",  photo: "/boardPhotos/nuri.webp" },
    { name: "Dahyun Lee",   role: "Culture Chair",  photo: "/boardPhotos/dahyun.webp" },
    { name: "Je Young Yoo", role: "Culture Chair",  photo: "/boardPhotos/jeyoung.webp" },

    // Social (2 people)
    { name: "Elliot Park",  role: "Social Chair",   photo: "/boardPhotos/elliot.webp" },
    { name: "Hailey Chong", role: "Social Chair",   photo: "/boardPhotos/hailey.webp" },

    // Outreach
    { name: "Vivan Ngyuen",     role: "Outreach Chair",  photo: "/boardPhotos/vivian.webp" },
    { name: "Isabel Vikesland", role: "Outreach Chair",  photo: "/boardPhotos/isabel.webp" },

    // Fundraising
    { name: "Grace Noh",   role: "Fundraising Chair",  photo: "/boardPhotos/grace.webp" },
    { name: "Sujin Gahng", role: "Fundraising Chair",  photo: "/boardPhotos/sujin.webp" },

    // PR
    { name: "Hein Cho",  role: "PR Chair",  photo: "/boardPhotos/hein.webp" },
    { name: "Donna Park",role: "PR Chair",  photo: "/boardPhotos/donna.webp" },
    { name: "Yujin Seo", role: "PR Chair",  photo: "/boardPhotos/yujin.webp" },

    // Historian
    { name: "Annamaria Lund",     role: "Historian",  photo: "/boardPhotos/anna.webp" },
    { name: "Alejandro Rodriguz", role: "Historian",  photo: "/boardPhotos/alejandro.webp" },
    { name: "Fatima Afilal",      role: "Historian",  photo: "/boardPhotos/fatima.webp" },

    // Sports
    { name: "Pierce Tan",  role: "Sports Chair",  photo: "/boardPhotos/pierce.webp" },
    { name: "Leo Lee",     role: "Sports Chair",  photo: "/boardPhotos/leo.webp" },
    { name: "Daniel Son",  role: "Sports Chair",  photo: "/boardPhotos/danson.webp" },

    // Webmaster
    { name: "Danniel Cao",  role: "Webmaster",   photo: "/boardPhotos/danniel.webp" },
    { name: "Talaal Maxood",role: "Webmaster ",  photo: "/boardPhotos/talaal.webp" },

    // Advisor
    { name: "Samantha Chin", role: "Advisors",  photo: "/boardPhotos/samantha.webp" },
    { name: "Rachel Kang ",  role: "Advisors",  photo: "/boardPhotos/rachel.webp" },
];

// How many people are in each committee, in the same order as defined above
const councilGroupsSpec = {
    Internal: 3,
    Culture: 3,
    Social: 2,       // forces 2-up layout for this committee
    Outreach: 2,
    Fundraising: 2,
    PR: 3,
    Historian: 3,
    Sports: 3,
    Webmaster: 2,
    Advisor: 2
};

// Turn the flat array into grouped committees using the counts above
function groupCouncil(flat, spec) {
    const groups = [];
    let i = 0;
    for (const [committee, count] of Object.entries(spec)) {
        groups.push({
            committee,
            members: flat.slice(i, i + count),
        });
        i += count;
    }
    return groups;
}

const council = groupCouncil(councilFlat, councilGroupsSpec);

// ------------------------------
// PRESENTATION
// ------------------------------
function ExecSection() {
    return (
        <>
            <Row className="mb-3">
                <Col>
                    <h2 className="text-center officers-title">EXEC</h2>
                </Col>
            </Row>

            <Row className="g-4">
                {exec.map((p) => (
                    <Col key={`exec-${p.name}`} xs={12} sm={6} md={4}>
                        <Card className="officer-card fade-in-section h-100 text-center border-0 shadow-sm">
                            <div className="ratio ratio-4x3 officer-photo-wrap">
                                <img
                                    src={p.photo}
                                    alt={`${p.name} — ${p.role}`}
                                    className="officer-photo"
                                    loading="lazy"
                                />
                            </div>
                            <Card.Body>
                                <Card.Title className="mb-1">{p.name}</Card.Title>
                                <Card.Text className="text-muted m-0">
                                    <Badge bg="light" text="dark" className="fw-semibold text-uppercase">
                                        {p.role}
                                    </Badge>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

function CouncilSection() {
    return (
        <>
            <Row className="mb-3 mt-5">
                <Col>
                    <h2 className="text-center officers-title">COUNCIL</h2>
                </Col>
            </Row>

            {council.map((group) => (
                <div key={group.committee} className="my-4">
                    <h4 className="text-center fw-bold mb-4">{group.committee}</h4>

                    <Row className="g-4">
                        {group.members.map((p, idx) => (
                            <Col
                                key={`${group.committee}-${p.name}`}
                                xs={12}
                                sm={6}
                                md={
                                    group.members.length === 2 && idx === 0
                                        ? { span: 4, offset: 2 }
                                        : 4
                                }
                                lg={
                                    group.members.length === 2 && idx === 0
                                        ? { span: 4, offset: 2 }
                                        : 4
                                }
                                className="d-flex"
                            >
                                <Card className="officer-card fade-in-section h-100 text-center border-0 shadow-sm w-100">
                                    <div className="ratio ratio-4x3 officer-photo-wrap">
                                        <img
                                            src={p.photo}
                                            alt={`${p.name} — ${p.role}`}
                                            className="officer-photo"
                                            loading="lazy"
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="mb-1">{p.name}</Card.Title>
                                        <Card.Text className="text-muted m-0">
                                            <Badge bg="light" text="dark" className="fw-semibold text-uppercase">
                                                {p.role}
                                            </Badge>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </>
    );
}

export default function Officers() {
    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target); // animate only once
                    }
                });
            },
            { threshold: 0.2 }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, []);

    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center fw-bold">KSA EXEC & COUNCIL</h1>
                    <p className="text-center text-muted">Meet the team that keeps everything running.</p>
                </Col>
            </Row>

            <ExecSection />

            <Row className="my-5">
                <Col>
                    <hr className="officers-divider" />
                </Col>
            </Row>

            <CouncilSection />
        </Container>
    );
}
