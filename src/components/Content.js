"use client";
import { PrismicRichText } from "@prismicio/react";
import rtfComponents from "../utils/RichText";

const Content = ({ slice }) => {
  const { content } = slice.primary;

  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box-content">
              {content && (
                <PrismicRichText field={content} components={rtfComponents} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
