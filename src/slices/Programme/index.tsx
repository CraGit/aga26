import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Programme from "../../components/Programme";

/**
 * Props for `Programme`.
 */
export type ProgrammeProps = SliceComponentProps<Content.ProgrammeSlice>;

/**
 * Component for "Programme" Slices.
 */
const ProgrammeSlice = ({ slice }: ProgrammeProps) => {
  return <Programme slice={slice} />;
};

export default ProgrammeSlice;
