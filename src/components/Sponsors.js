"use client";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import SectionWrapper from "./layout/SectionWrapper";

const logoStyle = {
  filter: "grayscale(100%)",
  opacity: "0.7",
  transition: "all 0.3s ease",
  maxWidth: "100%",
  maxHeight: "60px",
  height: "auto",
  objectFit: "contain",
};

const wrapStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80px",
  padding: "10px",
};

const Sponsors = ({ slice }) => {
  const { heading, subheading } = slice.primary;
  const sponsors = slice.items || [];

  return (
    <SectionWrapper>
      <div className="text-center">
        {heading && (
          <h2 className="text-heading-1 color-green-900 mb-20">{heading}</h2>
        )}
        {subheading && (
          <p className="text-body-lead color-gray-600 mb-60">{subheading}</p>
        )}
      </div>
      <ul className="list-partners" style={{ gap: "20px" }}>
        {sponsors.map((sponsor, index) => {
          const hasLink = isFilled.link(sponsor.link);
          const logo = sponsor.logo && (
            <PrismicNextImage
              field={sponsor.logo}
              alt={sponsor.company_name || "Company logo"}
              style={logoStyle}
              onMouseEnter={(e) => {
                e.target.style.filter = "grayscale(0%)";
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = "grayscale(100%)";
                e.target.style.opacity = "0.7";
              }}
            />
          );

          return (
            <li key={index} style={{ marginBottom: "30px" }}>
              {hasLink ? (
                <PrismicNextLink
                  field={sponsor.link}
                  style={{ ...wrapStyle, cursor: "pointer" }}
                >
                  {logo}
                </PrismicNextLink>
              ) : (
                <span style={{ ...wrapStyle, cursor: "default" }}>{logo}</span>
              )}
            </li>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};

export default Sponsors;
