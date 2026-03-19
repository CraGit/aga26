import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import RegistrationFees from "../../components/RegistrationFees";

/**
 * Props for `RegistrationFees`.
 */
export type RegistrationFeesProps =
    SliceComponentProps<Content.RegistrationFeesSlice>;

/**
 * Component for "RegistrationFees" Slices.
 */
const RegistrationFeesSlice = ({ slice }: RegistrationFeesProps) => {
    return <RegistrationFees slice={slice} />;
};

export default RegistrationFeesSlice;
