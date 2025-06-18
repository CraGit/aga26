import Faq from "@/components/Faq";

/**
 * @typedef {import("@prismicio/client").Content.FaqSliceSlice} FaqSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSliceSlice>} FaqSliceProps
 * @param {FaqSliceProps}
 */
const FaqSlice = ({ slice }) => {
  return <Faq slice={slice} />;
};

export default FaqSlice;
