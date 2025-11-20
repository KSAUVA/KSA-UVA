import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const socialLinks = [
    {
        href: "https://www.youtube.com/channel/UCCrULtpfBAm2Mdq6qPHyGFQ",
        icon: <YouTubeIcon fontSize="large" />,
        color: "#FF0000",
        label: "YouTube",
    },
    {
        href: "https://www.instagram.com/ksa.uva/",
        icon: <InstagramIcon fontSize="large" />,
        color: "#E1306C",
        label: "Instagram",
    },
    {
        href: "https://www.facebook.com/ksaatuva",
        icon: <FacebookIcon fontSize="large" />,
        color: "#1877F2",
        label: "Facebook",
    },
];

function Footer() {
    const reduceMotion = useReducedMotion();

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: reduceMotion
                ? { duration: 0.2 }
                : { duration: 0.4, staggerChildren: 0.12 },
        },
    };

    const item = {
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
        visible: reduceMotion
            ? { opacity: 1, transition: { duration: 0.2 } }
            : {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 400, damping: 24 },
            },
    };

    return (
        <Box
            component={motion.footer}
            variants={container}
            initial="hidden"
            animate="visible"
            sx={{
                backgroundColor: '#222',
                color: '#eee',
                textAlign: 'center',
                py: 4,
                mt: 'auto',
            }}
        >
            <Typography variant="body1" gutterBottom component={motion.p} variants={item}>
                Follow us on social media:
            </Typography>

            {socialLinks.map((itemData, i) => (
                <motion.div
                    key={itemData.href}
                    variants={item}
                    whileHover={{ scale: 1.25, color: itemData.color }}   // no rotate
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block", margin: "0 8px" }}
                >
                    <IconButton
                        href={itemData.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        aria-label={itemData.label}
                        sx={{
                            // Smooth color/scale transitions
                            transition: "color 0.25s ease",
                        }}
                    >
                        {itemData.icon}
                    </IconButton>
                </motion.div>
            ))}
        </Box>
    );
}

export default Footer;
