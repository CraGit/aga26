"use client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

const Hero = ({ slice }) => {
  const {
    heading,
    subheading,
    background_image,
    primary_button_text,
    primary_button_link,
    secondary_button_text,
    secondary_button_link,
    logo,
  } = slice.primary;

  return (
    <section className="section-box">
      <div
        className="banner-hero banner-1"
        style={{
          backgroundImage: background_image?.url
            ? `url(${background_image.url})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          position: "relative",
        }}
      >
        {background_image?.url && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          />
        )}
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-7">
              {heading && (
                <h1
                  className="text-display-2"
                  style={{ color: background_image?.url ? "#fff" : "inherit" }}
                >
                  {heading}
                </h1>
              )}
              {subheading && (
                <p
                  className="text-body-lead-large mt-40 pr-40"
                  style={{
                    color: background_image?.url
                      ? "rgba(255, 255, 255, 0.9)"
                      : "#6B7280",
                  }}
                >
                  {subheading}
                </p>
              )}
              <div className="mt-40">
                {primary_button_text && primary_button_link && (
                  <PrismicNextLink
                    field={primary_button_link}
                    className="btn btn-black icon-arrow-right-white"
                  >
                    {primary_button_text}
                  </PrismicNextLink>
                )}
                {secondary_button_text && secondary_button_link && (
                  <PrismicNextLink
                    field={secondary_button_link}
                    className="btn btn-link icon-arrow-right color-gray-900 text-heading-6"
                  >
                    {secondary_button_text}
                  </PrismicNextLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {logo?.url && (
        <div className="container mt-50">
          <div className="row">
            <div className="col-lg-12 text-center">
              <PrismicNextImage
                field={logo}
                style={{ maxHeight: "80px", width: "auto" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
