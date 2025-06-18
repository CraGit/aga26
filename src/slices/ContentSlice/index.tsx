import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContentComponent from "../../components/Content";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const ContentSlice = ({ slice }: ContentProps) => {
    return <ContentComponent slice={slice} />;
};

export default ContentSlice;
