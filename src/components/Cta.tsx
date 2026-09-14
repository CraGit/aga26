import React from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import SectionWrapper from "./layout/SectionWrapper";

interface CtaProps {
  slice: Content.CtaSlice;
}

const Cta = ({ slice }: CtaProps) => {
  const { heading, button } = slice.primary;

  if (!isFilled.link(button) && !isFilled.keyText(heading)) {
    return null;
  }

  return (
    <SectionWrapper spacing="mt-50 mb-50">
      <div className="text-center">
        {isFilled.keyText(heading) && (
          <h2 className="text-heading-2 color-green-900 mb-30">{heading}</h2>
        )}
        {isFilled.link(button) && (
          <PrismicNextLink
            field={button}
            className="btn btn-black icon-arrow-right-white"
          >
            {button.text || "Learn more"}
          </PrismicNextLink>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Cta;
