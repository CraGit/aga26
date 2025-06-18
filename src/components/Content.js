"use client";
import { PrismicRichText } from "@prismicio/react";
import rtfComponents from "../utils/RichText";
import SectionWrapper from "./layout/SectionWrapper";

const Content = ({ slice }) => {
  const { content } = slice.primary;

  return (
    <SectionWrapper>
      <div className="box-content">
        {content && (
          <PrismicRichText field={content} components={rtfComponents} />
        )}
      </div>
    </SectionWrapper>
  );
};

export default Content;
