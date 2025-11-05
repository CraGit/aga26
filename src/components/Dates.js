"use client";
import { PrismicNextImage } from "@prismicio/next";
import SectionWrapper from "./layout/SectionWrapper";

const Dates = ({ slice }) => {
  const {
    heading,
    image,
    date_1,
    participant_1,
    date_2,
    participant_2,
    date_3,
    participant_3,
    date_4,
    participant_4,
  } = slice.primary;

  return (
    <SectionWrapper>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          {image && (
            <div className="box-image d-flex align-items-center justify-content-center">
              <PrismicNextImage
                field={image}
                className="img-responsive bdrd-16"
                width={600}
                height={400}
              />
            </div>
          )}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="box-optimized pl-30">
            {heading && (
              <h2 className="text-heading-1 color-gray-900 mb-40 text-center">{heading}</h2>
            )}

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                {date_1 && participant_1 && (
                  <div
                    className="list-icons mb-40"
                    style={{
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="item-icon">
                      <span className="text-heading-4 color-green-900">
                        {date_1}
                      </span>
                      <p className="text-body-text color-gray-600 mt-15">
                        {participant_1}
                      </p>
                    </div>
                  </div>
                )}

                {date_3 && participant_3 && (
                  <div
                    className="list-icons mb-40"
                    style={{
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="item-icon">
                      <span className="text-heading-4 color-green-900">
                        {date_3}
                      </span>
                      <p className="text-body-text color-gray-600 mt-15">
                        {participant_3}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                {date_2 && participant_2 && (
                  <div
                    className="list-icons mb-40"
                    style={{
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="item-icon">
                      <span className="text-heading-4 color-green-900">
                        {date_2}
                      </span>
                      <p className="text-body-text color-gray-600 mt-15">
                        {participant_2}
                      </p>
                    </div>
                  </div>
                )}

                {date_4 && participant_4 && (
                  <div
                    className="list-icons mb-40"
                    style={{
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="item-icon">
                      <span className="text-heading-4 color-green-900">
                        {date_4}
                      </span>
                      <p className="text-body-text color-gray-600 mt-15">
                        {participant_4}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Dates;
