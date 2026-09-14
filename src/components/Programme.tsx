"use client";

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
                <table className="table table-striped table-pricing programme-table">
                  <thead>
                    <tr>
                      <th className="programme-time">
                        {time_header || "Time"}
                      </th>
                      <th className="programme-activity">
                        {activity_header || "Activity"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((item, index) => (
                      <tr key={index}>
                        <td className="programme-time">{item.time}</td>
                        <td className="programme-activity">{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .programme-table thead tr {
          background-color: #0f385c;
          color: #ffffff;
        }

        .programme-table th {
          text-align: left;
          padding: 14px 18px;
          font-style: italic;
          font-weight: 700;
          color: #ffffff;
          border-bottom: none;
        }

        .programme-table td {
          font-style: italic;
          padding: 12px 18px;
          vertical-align: top;
        }

        .programme-time {
          width: 1%;
          white-space: nowrap;
        }

        .programme-activity {
          width: auto;
        }

        @media (max-width: 767px) {
          .programme-table th,
          .programme-table td {
            padding: 10px 12px;
            font-size: 14px;
            line-height: 1.35;
          }

          .programme-time {
            width: auto;
            max-width: 6.5rem;
            white-space: normal;
          }

          .programme-activity {
            width: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Programme;
