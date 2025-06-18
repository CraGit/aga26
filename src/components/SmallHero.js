import { PrismicRichText } from "@prismicio/react";
import rtfComponents from "@/utils/RichText";

const SmallHero = ({ slice }) => {
  // Determine background class based on selection
  const getBackgroundClass = (bgColor) => {
    switch (bgColor) {
      case "Gray":
        return "banner-hero banner-breadcrums bg-gray-100";
      case "Brand":
        return "banner-hero banner-breadcrums bg-brand-1";
      case "Dark":
        return "banner-hero banner-breadcrums bg-gray-900";
      case "Navy":
        return "banner-hero banner-breadcrums";
      default:
        return "banner-hero banner-breadcrums";
    }
  };

  // Determine text color based on background
  const getTextColorClass = (bgColor) => {
    switch (bgColor) {
      case "Dark":
        return "color-white";
      case "Brand":
        return "color-white";
      case "Navy":
        return "color-white";
      default:
        return "color-gray-1000";
    }
  };

  const backgroundClass = getBackgroundClass(slice.primary.background_color);
  const textColorClass = getTextColorClass(slice.primary.background_color);

  // Custom style for navy background
  const getCustomStyle = (bgColor) => {
    if (bgColor === "Navy") {
      return { backgroundColor: "#0F385C" };
    }
    return {};
  };

  const customStyle = getCustomStyle(slice.primary.background_color);

  return (
    <section className="section-box">
      <div className={backgroundClass} style={customStyle}>
        <div className="container text-center">
          {slice.primary.heading && (
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading1: ({ children }) => (
                  <h1 className={`text-heading-2 ${textColorClass} mb-20`}>
                    {children}
                  </h1>
                ),
              }}
            />
          )}
          {slice.primary.description && (
            <div className="text-body-text color-gray-500">
              <PrismicRichText
                field={slice.primary.description}
                components={rtfComponents}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmallHero;
