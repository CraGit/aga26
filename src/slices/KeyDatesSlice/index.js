import KeyDates from "@/components/KeyDates";

/**
 * @typedef {import("@prismicio/client").Content.KeyDatesSlice} KeyDatesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<KeyDatesSlice>} KeyDatesProps
 * @param {KeyDatesProps}
 */
const KeyDatesSlice = ({ slice }) => {
  return <KeyDates slice={slice} />;
};

export default KeyDatesSlice;
