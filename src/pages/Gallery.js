// src/pages/Gallery.js
import React, { useEffect, useState } from "react";

function usePublicAlbumScript() {
    useEffect(() => {
        const id = "publicalbum-embed-ui";
        if (document.getElementById(id)) return;

        const script = document.createElement("script");
        script.id = id;
        script.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
}

// Album data
const albums = [
    {
        id: "kexpo-hanguk-2024",
        title: "🌸 KEXPO + Hanguk Day",
        subtitle: "Performances, food, and community in one day.",
        season: "Fall 2024",
        location: "Newcomb & South Lawn",
        link: "https://photos.app.goo.gl/R2gjSDt44zdHLg3DA",
        description: "Shared album · Tap to view!",
        category: "culture",
        coverUrls: [
            "https://lh3.googleusercontent.com/pw/AP1GczOjbMFfvjuj0C7Ycr9OghhoZA-XZgNygHd2wHXZ9NSNHGQuvcC9LvwbmPZisX0HqPkZuy8OHDtsa0KOHHrGnxYtI4Adh7edrwmLUfHCiWJOBS25aULH=w1920-h1080",
            "https://lh3.googleusercontent.com/pw/AP1GczPbdTa1jbe5GKCF9P8fJ97Y2G15OZQKuNZ0yNaqKRQuoeDpHBm7tVcj6iMQyMRS3C3fCGFVImACZq16ohFu2H92YCT9P2JDyULi6rh_APaQmX_rmCRo=w1920-h1080",
            "https://lh3.googleusercontent.com/pw/AP1GczNJO7rzuXiZFfUghIaTESdzyIkPcmIZqVyeA1WIMK11iVZ2tzhC9Au4W_ov7j1tpsb_nLBVzy4HWgCRRDE1WtIewwWZCjMOYdxkvwrjJT4oyqVBJNp0=w1920-h1080",
            "https://lh3.googleusercontent.com/pw/AP1GczPJ8dlabrvLJ8xtDzZKOAb7EnplLNrHU90c_yFFggvavEE5ntjYYLXy9PAeuQZzKEbe_bPSI0103Nn56azr1krLN0JNymtZ5vBO96mlb6KJDZhmcgPD=w1920-h1080",
            "https://lh3.googleusercontent.com/pw/AP1GczPlcB8izmp2_KoR1VjQ8ZtIqeNQs3BXb0B7fsFm2IWYAYMpJZ4m6DB1zmmwuchRrHvxRYRHqSdlQbF8hjz1XZK1m1_cPnMtKCCurybIoEcC9Zc0kEee=w1920-h1080",
            "https://lh3.googleusercontent.com/pw/AP1GczMGrfHw8qJRYekdDUWB5H9b0kWqzQnX43PTkvYP09dl9nQpdAuecSY4nuq6J84pE-XNaOg_wh-A0KuI7PmgfKlt4-4nkDTkDBsZMTzyxcQA0HIfI7Wt=w1920-h1080",
            "https://lh3.googleusercontent.com/pw/AP1GczNeEiczUDF9jmEB72zj35EcM7UD_6aqyra1fyVy8Smc-yS1Nld_ykTCAcpZ4Q5bpDCZUcGSoZ7CoiBAdbLdHQhXE_EnvgNfyMeHd6r4S8afqwU6C6_M=w1920-h1080",
        ],
    },
    {
        id: "chuseok-2024",
        title: "Chuseok Night",
        subtitle: "Games, food, and traditions for Korean Thanksgiving.",
        season: "Fall 2024",
        location: "Newcomb Ballroom",
        link: "https://photos.app.goo.gl/R2gjSDt44zdHLg3DA", // TODO: replace
        description: "Shared album · Tap to view!",
        category: "culture",
        coverUrls: [
            "https://lh3.googleusercontent.com/pw/AP1GczOjbMFfvjuj0C7Ycr9OghhoZA-XZgNygHd2wHXZ9NSNHGQuvcC9LvwbmPZisX0HqPkZuy8OHDtsa0KOHHrGnxYtI4Adh7edrwmLUfHCiWJOBS25aULH=w1920-h1080",
        ],
    },
    {
        id: "families-2024",
        title: "KSA Families Reveal",
        subtitle: "Meeting bigs, littles, and new friends.",
        season: "Fall 2024",
        location: "South Lawn",
        link: "https://photos.app.goo.gl/R2gjSDt44zdHLg3DA", // TODO: replace
        description: "Shared album · Tap to view!",
        category: "social",
        coverUrls: [
            "https://lh3.googleusercontent.com/pw/AP1GczPbdTa1jbe5GKCF9P8fJ97Y2G15OZQKuNZ0yNaqKRQuoeDpHBm7tVcj6iMQyMRS3C3fCGFVImACZq16ohFu2H92YCT9P2JDyULi6rh_APaQmX_rmCRo=w1920-h1080",
        ],
    },
];

const categoryLabels = {
    all: "All",
    culture: "Culture",
    social: "Socials",
    families: "Families",
};

const categoryKeys = ["all", "culture", "social", "families"];

function GalleryPage() {
    usePublicAlbumScript();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredAlbums =
        activeCategory === "all"
            ? albums
            : albums.filter((album) => album.category === activeCategory);

    return (
        <main className="gallery-page">
            {/* Page styles */}
            <style>
                {`
        .gallery-page {
          background: #f3f4f6;
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .gallery-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .gallery-hero {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          background: linear-gradient(
            135deg,
            #0a1a44 0%,
            #10285d 15%,
            #c9181a 65%,
            #e74a54 85%
          );
          color: #fff;
          padding: 3.5rem 0 3rem;
          position: relative;
          overflow: hidden;
        }

        .gallery-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(255, 255, 255, 0.18),
              transparent 55%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(255, 255, 255, 0.1),
              transparent 60%
            ),
            radial-gradient(
              circle at 50% 120%,
              rgba(0, 0, 0, 0.25),
              transparent 75%
            );
          opacity: 0.9;
        }

        .gallery-hero-inner {
          position: relative;
          z-index: 1;
        }

        .gallery-kicker {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.75rem;
          font-weight: 600;
          opacity: 0.9;
        }

        .gallery-title {
          font-size: clamp(2.3rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: .25rem;
        }

        .gallery-subtitle {
          max-width: 620px;
          font-size: 0.95rem;
          opacity: 0.92;
        }

        /* Tabs */
        .gallery-tabs-wrap {
          margin-top: 1.5rem;
        }

        .gallery-tabs {
          display: inline-flex;
          padding: 4px;
          border-radius: 999px;
          background: rgba(15,23,42,0.6);
          border: 1px solid rgba(148,163,184,0.7);
        }

        .gallery-tab {
          border: none;
          background: transparent;
          color: #e5e7eb;
          font-size: 0.8rem;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          cursor: pointer;
          transition: background .15s ease, color .15s ease, box-shadow .15s ease;
          white-space: nowrap;
        }

        .gallery-tab-active {
          background: #f97373;
          color: #111827;
          box-shadow: 0 0 0 1px rgba(254,242,242,0.8), 0 10px 24px rgba(0,0,0,0.3);
        }

        /* Album header */
        .gallery-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1rem;
          margin: 2.5rem 0 1.5rem;
          flex-wrap: wrap;
        }

        .gallery-header h2 {
          margin: 0 0 0.25rem;
        }

        .gallery-header p {
          margin: 0;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .gallery-count {
          font-size: 0.8rem;
          color: #6b7280;
        }

        /* Album grid / cards */
        .gallery-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 1.75rem;
        }

        @media (min-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .gallery-card {
          border-radius: 1.25rem;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          box-shadow: 0 14px 30px rgba(15,23,42,0.12);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(15,23,42,0.18);
          border-color: #fecaca;
        }

        .gallery-card-header {
          display: flex;
          gap: 0.75rem;
          padding: 1rem 1.2rem 0.75rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .gallery-card-icon {
          display: none;
        }

        @media (min-width: 768px) {
          .gallery-card-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 999px;
            background: #fef2f2;
            font-size: 1.3rem;
          }
        }

        .gallery-card-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.15rem;
        }

        .gallery-card-subtitle {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
        }

        .gallery-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 0.45rem;
        }

        .gallery-chip {
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          background: #f3f4f6;
          color: #4b5563;
        }

        .gallery-card-body {
          padding: 0.75rem 1.1rem 1.1rem;
        }

        .gallery-embed-shell {
          border-radius: 0.9rem;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .gallery-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.6rem;
          font-size: 0.75rem;
          color: #6b7280;
          flex-wrap: wrap;
        }

        .gallery-link-button {
          border-radius: 999px;
          border: 1px solid #f97373;
          background: #fef2f2;
          color: #b91c1c;
          padding: 0.25rem 0.8rem;
          font-size: 0.7rem;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: background .15s ease, transform .15s ease, box-shadow .15s ease;
        }

        .gallery-link-button:hover {
          background: #fee2e2;
          box-shadow: 0 8px 18px rgba(248,113,113,0.4);
          transform: translateY(-1px);
        }

        .gallery-empty {
          border-radius: 1.25rem;
          border: 1px dashed #d1d5db;
          background: #ffffff;
          padding: 2.5rem 1.5rem;
          text-align: center;
          color: #6b7280;
          font-size: 0.9rem;
        }
      `}
            </style>

            {/* Hero */}
            <section className="gallery-hero">
                <div className="gallery-container gallery-hero-inner">
                    <div className="gallery-kicker">Gallery</div>
                    <h1 className="gallery-title">KSA Moments</h1>
                    <p className="gallery-subtitle">
                        A look back at performances, food nights, fam week, and memories from KSA.
                    </p>

                    {/* Filters */}
                    <div className="gallery-tabs-wrap">
                        <div className="gallery-tabs">
                            {categoryKeys.map((category) => {
                                const isActive = activeCategory === category;
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        className={
                                            "gallery-tab " + (isActive ? "gallery-tab-active" : "")
                                        }
                                    >
                                        {categoryLabels[category]}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Albums */}
            <section className="gallery-container">
                <div className="gallery-header">
                    <div>
                        <h2>All Albums</h2>
                        <p>Tap any gallery to see photos and videos from that event.</p>
                    </div>
                    <div className="gallery-count">
                        Showing <strong>{filteredAlbums.length}</strong> album
                        {filteredAlbums.length !== 1 ? "s" : ""}{" "}
                        {activeCategory !== "all" && categoryLabels[activeCategory]
                            ? `in ${categoryLabels[activeCategory]}`
                            : ""}
                    </div>
                </div>

                {filteredAlbums.length === 0 ? (
                    <div className="gallery-empty">
                        No albums in this category yet — check back soon!
                    </div>
                ) : (
                    <div className="gallery-grid">
                        {filteredAlbums.map((album) => (
                            <article key={album.id} className="gallery-card">
                                <div className="gallery-card-header">
                                    <div className="gallery-card-icon">📸</div>
                                    <div>
                                        <h3 className="gallery-card-title">{album.title}</h3>
                                        <p className="gallery-card-subtitle">{album.subtitle}</p>
                                        <div className="gallery-chips">
                                            <span className="gallery-chip">{album.season}</span>
                                            <span className="gallery-chip">{album.location}</span>
                                            <span className="gallery-chip">
                        {categoryLabels[album.category]}
                      </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="gallery-card-body">
                                    <div className="gallery-embed-shell">
                                        <div
                                            className="pa-gallery-player-widget"
                                            style={{ width: "100%", height: 420, display: "none" }}
                                            data-link={album.link}
                                            data-title={album.title}
                                            data-description={album.description}
                                        >
                                            {album.coverUrls.map((url, idx) => (
                                                <object data={url} key={idx} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="gallery-footer">
                                        <span>Click inside the gallery to open the full album.</span>
                                        <a
                                            href={album.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="gallery-link-button"
                                        >
                                            Open in Google Photos <span aria-hidden>↗</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default GalleryPage;
