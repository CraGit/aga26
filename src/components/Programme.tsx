import React from "react";
import { Content, isFilled } from "@prismicio/client";

interface ProgrammeProps {
  slice: Content.ProgrammeSlice;
}

const Programme = ({ slice }: ProgrammeProps) => {
  const { heading, time_header, activity_header, rows } = slice.primary;

  return (
    <section className="section-box mt-50 mb-50">
      <div className="container">
        {heading && (
          <h2 className="text-heading-2 color-green-900 mb-40 text-center">
            {heading}
          </h2>
        )}
        {isFilled.group(rows) && (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <div className="table-responsive">
                <table className="table table-striped table-pricing">
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#0F385C",
                        color: "#ffffff",
                      }}
                    >
                      <th
                        style={{
                          textAlign: "left",
                          padding: "14px 18px",
                          fontStyle: "italic",
                          fontWeight: 700,
                          color: "#ffffff",
                          borderBottom: "none",
                          whiteSpace: "nowrap",
                          width: "30%",
                        }}
                      >
                        {time_header || "Time"}
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "14px 18px",
                          fontStyle: "italic",
                          fontWeight: 700,
                          color: "#ffffff",
                          borderBottom: "none",
                        }}
                      >
                        {activity_header || "Activity"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((item, index) => (
                      <tr key={index}>
                        <td
                          style={{
                            fontStyle: "italic",
                            whiteSpace: "nowrap",
                            verticalAlign: "top",
                          }}
                        >
                          {item.time}
                        </td>
                        <td style={{ fontStyle: "italic" }}>{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Programme;
