"use client";
import { PrismicNextImage } from "@prismicio/next";
import SectionWrapper from "./layout/SectionWrapper";

const Sponsors = ({ slice }) => {
  const { heading, subheading } = slice.primary;
  const sponsors = slice.items || [];

  return (
    <SectionWrapper>
      <div className="text-center">
        {heading && (
          <h2 className="text-heading-1 color-gray-900 mb-20">{heading}</h2>
        )}
        {subheading && (
          <p className="text-body-lead color-gray-600 mb-60">{subheading}</p>
        )}
      </div>
      <ul className="list-partners" style={{ gap: "20px" }}>
        {sponsors.map((sponsor, index) => (
          <li key={index} style={{ marginBottom: "30px" }}>
            <a
              href="#"
              style={{
                cursor: "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80px",
                padding: "10px",
              }}
            >
              {sponsor.logo && (
                <PrismicNextImage
                  field={sponsor.logo}
                  alt={sponsor.company_name || "Company logo"}
                  style={{
                    filter: "grayscale(100%)",
                    opacity: "0.7",
                    transition: "all 0.3s ease",
                    maxWidth: "100%",
                    maxHeight: "60px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = "grayscale(0%)";
                    e.target.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = "grayscale(100%)";
                    e.target.style.opacity = "0.7";
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Sponsors;
