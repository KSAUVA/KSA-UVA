import React, { useMemo, useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { motion, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/join', label: 'Join' },
    { to: '/merch', label: 'Merch' },
    { to: '/officers', label: 'Officers' },
];

export default function NavigationBar() {
    const { pathname } = useLocation();
    const reduceMotion = useReducedMotion();
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        setFirstLoad(false);
    }, []);

    const container = useMemo(
        () => ({
            hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 },
            visible: reduceMotion
                ? { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
                : { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        }),
        [reduceMotion]
    );

    const list = useMemo(
        () => ({
            hidden: {},
            visible: {
                transition: reduceMotion ? {} : { staggerChildren: 0.08, delayChildren: 0.15 },
            },
        }),
        [reduceMotion]
    );

    const item = useMemo(
        () => ({
            hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 },
            visible: reduceMotion
                ? { opacity: 1, transition: { duration: 0.3 } }
                : { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } },
        }),
        [reduceMotion]
    );

    return (
        <Navbar
            as={motion.nav}
            variants={container}
            initial={firstLoad ? 'hidden' : 'visible'}
            animate="visible"
            variant="dark"
            expand="lg"
            sticky="top"
            className="shadow-sm ksa-navbar"
        >
            <Container fluid className="px-3">
                <Navbar.Brand
                    as={motion.a}
                    href="/"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                    <motion.img
                        src="/images/logo_white.png"
                        width="40"
                        height="40"
                        alt="KSA Logo"
                        initial={firstLoad && !reduceMotion ? { opacity: 0, scale: 0.9 } : 'visible'}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                    <span className="ms-2">KSA at UVA</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        as={motion.ul}
                        className="ms-auto"
                        variants={list}
                        initial={firstLoad ? 'hidden' : 'visible'}
                        animate="visible"
                        style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                    >
                        {LINKS.map(({ to, label }) => {
                            const active = pathname === to || (to !== '/' && pathname.startsWith(to));
                            return (
                                <LinkContainer to={to} key={to}>
                                    <Nav.Link
                                        className="px-2"
                                        as={motion.div}
                                        variants={item}
                                        layout="position"
                                    >
                                        <motion.div
                                            style={{ position: 'relative', display: 'inline-block', padding: '0 4px', lineHeight: 1.2 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <span>{label}</span>

                                            {active && (
                                                <motion.div
                                                    layoutId="nav-active-underline"
                                                    style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        right: 0,
                                                        bottom: -6,
                                                        height: 3,
                                                        borderRadius: 2,
                                                        background: 'rgba(255,255,255,0.95)',
                                                    }}
                                                    transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                                                />
                                            )}

                                            {!active && (
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    whileHover={{ scaleX: 1 }}
                                                    style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        right: 0,
                                                        bottom: -6,
                                                        height: 2,
                                                        transformOrigin: 'left',
                                                        background: 'rgba(255,255,255,0.8)',
                                                    }}
                                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                                />
                                            )}
                                        </motion.div>
                                    </Nav.Link>
                                </LinkContainer>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
