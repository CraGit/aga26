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
const SponsorsSlice = ({ slice }: SponsorsProps): JSX.Element => {
    return <Sponsors slice={slice} />;
};

export default SponsorsSlice;
