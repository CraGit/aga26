import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Sponsors from "../../components/Sponsors";

/**
 * Props for `Sponsors`.
 */
export type SponsorsProps = SliceComponentProps<Content.SponsorsSlice>;

/**
 * Component for "Sponsors" Slices.
 */
const SponsorsSlice = ({ slice }: SponsorsProps): React.ReactElement => {
    return <Sponsors slice={slice} />;
};

export default SponsorsSlice;
