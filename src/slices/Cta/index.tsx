import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Cta from "../../components/Cta";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const CtaSlice = ({ slice }: CtaProps) => {
  return <Cta slice={slice} />;
};

export default CtaSlice;
