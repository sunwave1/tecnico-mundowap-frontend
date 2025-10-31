import { ButtonHTMLAttributes } from "react";
import { PaddingTypes, RadiusTypes, SpacingTypes } from "../../styles/theme";
import { StyledInput } from "./styled";

interface InputProps extends ButtonHTMLAttributes<HTMLInputElement> {
    spacing?: SpacingTypes | PaddingTypes;
    rounded?: RadiusTypes;
}

export default function Input({
    spacing = "xs",
    rounded = "xs",
    ...props
}: InputProps) {
    return <StyledInput spacing={spacing} rounded={rounded} {...props} />;
}
