import React from "react";
import { Content } from "@prismicio/client";

interface RegistrationFeesProps {
    slice: Content.RegistrationFeesSlice;
}

const RegistrationFees = ({ slice }: RegistrationFeesProps) => {
    const { heading, category_header, fee_header } = slice.primary;

    return (
        <section className="section-box mt-50 mb-50">
            <div className="container">
                {heading && (
                    <h2 className="text-heading-2 color-gray-900 mb-40 text-center">{heading}</h2>
                )}
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="table-responsive">
                            <table
                                className="table table-striped table-pricing"
                            >
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
                                            }}
                                        >
                                            {category_header || "Category"}
                                        </th>
                                        <th
                                            style={{
                                                textAlign: "right",
                                                padding: "14px 18px",
                                                fontStyle: "italic",
                                                fontWeight: 700,
                                                color: "#ffffff",
                                                borderBottom: "none",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {fee_header || "Fee"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {slice.items.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{ fontStyle: "italic" }}>{item.category}</td>
                                            <td style={{ textAlign: "right", fontStyle: "italic", whiteSpace: "nowrap" }}>
                                                {item.fee}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationFees;
