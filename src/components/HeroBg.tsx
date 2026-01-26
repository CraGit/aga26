"use client";
import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

type HeroBgProps = { slice: Content.HeroBgSlice };

const HeroBg = ({ slice }: HeroBgProps) => {
  const { background_image, large_text, title, subtitle, date, location, overlay } = slice.primary;
  const bgUrl = background_image?.url || null;

  const overlayGradient =
    overlay === "soft-blue"
      ? "linear-gradient(180deg, rgba(15,56,92,0.8) 0%, rgba(15,56,92,0.4) 40%, rgba(15,56,92,0.05) 100%)"
      : overlay === "none"
        ? "rgba(0,0,0,0)"
        : "linear-gradient(180deg, rgba(15,56,92,0.95) 0%, rgba(15,56,92,0.6) 30%, rgba(15,56,92,0.15) 60%, rgba(0,0,0,0) 100%)";

  return (
    <section className="section-box">
      <div
        className="hero-bg banner-1"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: bgUrl ? `${overlayGradient}, url(${bgUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-inner">
          {large_text && (
            <div aria-hidden className="hero-bg-large-text">
              {large_text}
            </div>
          )}

          <div className="hero-bg-content" style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <div className="container">
              <div className="row">
                <div className="col-12" style={{ textAlign: "center", padding: "2rem 1rem" }}>
                  {title && (
                    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                      <PrismicRichText
                        field={title}
                        components={{
                          heading1: ({ children }) => (
                            <h1 style={{ color: "#fff", margin: 0 }}>{children}</h1>
                          ),
                        }}
                      />
                    </div>
                  )}

                  {subtitle && (
                    <p className="hero-subtitle">
                      {subtitle}
                    </p>
                  )}

                  {(date || location) && (
                    <div className="hero-meta" role="group" aria-label="Event date and location">
                      {date && (
                        <div className="hero-meta-item">
                          <div className="hero-meta-label">Date</div>
                          <div className="hero-meta-value">{date}</div>
                        </div>
                      )}
                      {location && (
                        <div className="hero-meta-item">
                          <div className="hero-meta-label">Location</div>
                          <div className="hero-meta-value">{location}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos bar */}
      {slice?.primary?.logos && slice.primary.logos.length > 0 && (
        <div className="hero-logos-bar" role="region" aria-label="Logos">
          <div className="container">
            <div className="logos-row">
              {slice.primary.logos.map((l, i) => {
                const img = l.logo || null;
                const href = (l.link as any)?.url || (l.link as any)?.href || null;
                const alt = img?.alt || `logo-${i}`;
                const src = img?.url || undefined;
                const content = (
                  <img key={i} src={src} alt={alt} style={{ maxHeight: 64, width: 'auto', display: 'block' }} />
                );

                return href ? (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                    {content}
                  </a>
                ) : (
                  <div key={i} style={{ display: 'inline-block' }}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hero-bg {
          overflow: hidden;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-inner {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(0.25rem, 0.8vw, 1.2rem);
          z-index: 3; /* keep inner content above the overlay */
        }

        .hero-bg-large-text {
          position: relative;
          display: block;
          margin: 0 auto;
          margin-bottom: clamp(0.25rem, 1vw, 1rem);
          font-size: clamp(6.6rem, 18vw, 24.2rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          opacity: 0.95;
          letter-spacing: -0.02em;
          line-height: 0.85;
          z-index: 6; /* sits above the overlay gradient */
          pointer-events: none;
          white-space: nowrap;
          text-transform: uppercase;
          text-align: center;
          width: 100%;
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
        }

        /* bottom overlay fade for extra contrast */
        .hero-bg::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: clamp(6rem, 18vh, 220px);
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%);
          pointer-events: none;
          z-index: 0; /* keep the overlay behind the hero content */
        }

        /* content column sizing and spacing */
        .hero-bg-content .col-12 {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding-top: 2rem;
          padding-bottom: clamp(3rem, 6vw, 6rem);
          position: relative;
          z-index: 8; /* ensure content sits above the hero overlay */
        }

        .hero-bg-content h1 {
          margin: 0 0 1.25rem 0;
          line-height: 1.05;
          font-size: clamp(1.75rem, 3.2vw, 3.5rem);
        }

        .hero-subtitle {
          color: rgba(255,255,255,0.94);
          margin: 1rem auto 1.25rem;
          max-width: 980px;
          font-size: clamp(1.1rem, 2.6vw, 1.4rem);
          line-height: 1.25;
        }

        .hero-meta {
          display: inline-flex;
          gap: 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 14px 22px;
          border-radius: 12px;
          color: #fff;
          align-items: center;
          margin-top: 14px;
        }

        .hero-meta-label {
          font-size: 0.85rem;
          opacity: 0.95;
        }

        .hero-meta-value {
          font-weight: 700;
          font-size: clamp(1.05rem, 1.9vw, 1.25rem);
        }

        @media (min-width: 1200px) {
          .hero-bg {
            min-height: 70vh;
          }

          .hero-inner {
            gap: clamp(0.5rem, 1vw, 1.5rem);
          }

          .hero-bg-large-text {
            font-size: clamp(6.5rem, 13vw, 22rem);
            opacity: 0.95;
            margin-bottom: clamp(0.4rem, 1vw, 1rem);
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%);
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%);
          }

          .hero-bg-content .col-12 {
            padding-top: 1.25rem;
          }

          .hero-bg-content .container {
            padding-left: 0;
          }

          .hero-subtitle {
            font-size: clamp(1.5rem, 1.8vw, 2rem);
          }

          .hero-meta-value {
            font-size: clamp(1.3rem, 1.8vw, 1.6rem);
          }
        }

        @media (max-width: 991px) {
          .hero-inner {
            gap: clamp(0.75rem, 2vw, 1.8rem);
          }

          .hero-bg-large-text {
            font-size: clamp(4.4rem, 16vw, 15.4rem);
            opacity: 0.85;
            margin-bottom: clamp(0.4rem, 1.2vw, 1.2rem);
            white-space: nowrap;
            text-align: center;
          }

          .hero-bg-content .container {
            padding-left: 1rem;
          }
        }

        @media (max-width: 640px) {
          .hero-inner {
            gap: clamp(0.5rem, 1.2vw, 1rem);
          }

          .hero-bg-large-text {
            display: block;
            font-size: clamp(4.4rem, 22vw, 15.4rem);
            opacity: 0.8;
            margin-bottom: clamp(0.3rem, 1vw, 0.8rem);
            white-space: normal;
            text-align: center;
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
          }

          /* make the bottom overlay stronger on small screens */
          .hero-bg::after {
            height: clamp(10rem, 30vh, 340px);
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
            z-index: 2;
          }

          .hero-bg-content .col-12 {
            padding-top: 5rem;
            padding-bottom: 3rem;
          }

          .hero-subtitle {
            font-size: clamp(1.15rem, 3.5vw, 1.45rem);
          }

          .hero-meta-value {
            font-size: clamp(1.05rem, 3vw, 1.25rem);
          }
        }

        /* logos bar */
        .hero-logos-bar {
          background: #fff;
          padding: 0.5rem 0;
          z-index: 1;
        }

        .logos-row {
          display: flex;
          gap: clamp(1rem, 3vw, 2rem);
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding: 0.5rem 0;
        }

        .logos-row img {
          max-height: 64px;
          height: auto;
          width: auto;
          display: block;
        }

        .logos-row a, .logos-row div {
          display: inline-block;
          padding: 0 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default HeroBg;
