"use client";
import React from "react";

const HeroBg = ({ slice }) => {
  const { background_image, large_text, title, subtitle, date, location, overlay } = slice.primary;
  const bgUrl = background_image?.url || null;

  const overlayGradient =
    overlay === "soft-blue"
      ? "linear-gradient(180deg, rgba(24,58,122,0.8) 0%, rgba(24,58,122,0.4) 40%, rgba(24,58,122,0.05) 100%)"
      : overlay === "none"
        ? "rgba(0,0,0,0)"
        : "linear-gradient(180deg, rgba(6,40,140,0.95) 0%, rgba(6,40,140,0.6) 30%, rgba(6,40,140,0.15) 60%, rgba(0,0,0,0) 100%)";

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
                      {Array.isArray(title) ? (
                        <h1 style={{ color: "#fff", margin: 0 }}>
                          {title.map((block, i) => (
                            <span key={i}>{block.text}</span>
                          ))}
                        </h1>
                      ) : (
                        <h1 style={{ color: "#fff", margin: 0 }}>{title}</h1>
                      )}
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
          z-index: 1;
          pointer-events: none;
          white-space: nowrap;
          text-transform: uppercase;
          text-align: center;
          width: 100%;
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
        }

        /* content column sizing and spacing */
        .hero-bg-content .col-12 {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          padding-top: 2rem;
          padding-bottom: clamp(3rem, 6vw, 6rem);
          position: relative;
          z-index: 3;
        }

        .hero-bg-content h1 {
          margin: 0 0 1.25rem 0;
          line-height: 1.05;
          font-size: clamp(1.75rem, 3.2vw, 3.5rem);
        }

        .hero-subtitle {
          color: rgba(255,255,255,0.92);
          margin: 1rem auto 1.5rem;
          max-width: 980px;
          font-size: clamp(1rem, 2.2vw, 1.25rem);
        }

        .hero-meta {
          display: inline-flex;
          gap: 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 12px 20px;
          border-radius: 12px;
          color: #fff;
          align-items: center;
          margin-top: 12px;
        }

        .hero-meta-label {
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .hero-meta-value {
          font-weight: 700;
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
        }

        @media (min-width: 1200px) {
          .hero-bg {
            min-height: 92vh;
          }

          .hero-inner {
            gap: clamp(1rem, 2vw, 3rem);
          }

          .hero-bg-large-text {
            font-size: clamp(7.15rem, 14vw, 24.2rem);
            opacity: 0.95;
            margin-bottom: clamp(0.8rem, 2vw, 2rem);
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%);
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%);
          }

          .hero-bg-content .col-12 {
            padding-top: 3rem;
          }

          .hero-bg-content .container {
            padding-left: 0;
          }

          .hero-subtitle {
            font-size: clamp(1.25rem, 1.8vw, 1.75rem);
          }

          .hero-meta-value {
            font-size: clamp(1.1rem, 1.6vw, 1.25rem);
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

          .hero-bg-content .col-12 {
            padding-top: 5rem;
            padding-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBg;
