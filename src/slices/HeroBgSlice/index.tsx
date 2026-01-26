import HeroBg from "@/components/HeroBg";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

type HeroBgSliceProps = SliceComponentProps<Content.HeroBgSlice>;

const HeroBgSlice = ({ slice }: HeroBgSliceProps) => {
  return <HeroBg slice={slice} />;
};

export default HeroBgSlice;
