import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import GalleryDay from "../../components/GalleryDay";

/**
 * Props for `GalleryDay`.
 */
export type GalleryDayProps = SliceComponentProps<Content.GalleryDaySlice>;

/**
 * Component for "GalleryDay" Slices.
 */
const GalleryDaySlice = ({ slice }: GalleryDayProps) => {
  return <GalleryDay slice={slice} />;
};

export default GalleryDaySlice;
