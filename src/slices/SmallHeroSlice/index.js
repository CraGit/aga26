import SmallHero from "@/components/SmallHero";

/**
 * @typedef {import("@prismicio/client").Content.SmallHeroSlice} SmallHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmallHeroSlice>} SmallHeroProps
 * @param {SmallHeroProps}
 */
const SmallHeroSlice = ({ slice }) => {
  return <SmallHero slice={slice} />;
};

export default SmallHeroSlice;
