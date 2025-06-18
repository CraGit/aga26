"use client";
import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import rtfComponents from "@/utils/RichText";
import SectionWrapper from "./layout/SectionWrapper";

function Faq({ slice }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: null,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: null,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  if (!slice || !slice.items || slice.items.length === 0) {
    return null;
  }

  return (
    <SectionWrapper>
      <div className="text-center">
        {slice.primary?.heading && (
          <div className="mb-40">
            <PrismicRichText
              field={slice.primary.heading}
              components={rtfComponents}
            />
          </div>
        )}
      </div>
      <div className="accordion" id="accordionFAQ">
        {slice.items.map((item, index) => (
          <div key={index} className="accordion-item">
            <h2
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              <button
                className={
                  isActive.key === index
                    ? "accordion-button text-heading-5"
                    : "accordion-button text-heading-5 collapsed"
                }
                type="button"
              >
                {item.question}
              </button>
            </h2>
            <div
              className={
                isActive.key === index
                  ? "accordion-collapse collapse show"
                  : "accordion-collapse collapse"
              }
            >
              <div className="accordion-body">
                <PrismicRichText
                  field={item.answer}
                  components={rtfComponents}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Faq;
