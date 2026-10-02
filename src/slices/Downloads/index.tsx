import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Downloads from "../../components/Downloads";

/**
 * Props for `Downloads`.
 */
export type DownloadsProps = SliceComponentProps<Content.DownloadsSlice>;

/**
 * Component for "Downloads" Slices.
 */
const DownloadsSlice = ({ slice }: DownloadsProps) => {
  return <Downloads slice={slice} />;
};

export default DownloadsSlice;
