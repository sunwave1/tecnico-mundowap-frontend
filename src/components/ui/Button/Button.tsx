import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";
import {
    RadiusTypes,
    VariantTypes,
    SpacingTypes,
    PaddingTypes,
} from "../../../styles/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: VariantTypes;
    disabled?: boolean;
    rounded?: RadiusTypes;
    spacing?: SpacingTypes | PaddingTypes;
}

export default function Button({
    children,
    variant = "primary",
    disabled = false,
    rounded = "xs",
    spacing = "xs",
    ...props
}: ButtonProps) {
    return (
        <StyledButton
            $variant={variant}
            $rounded={rounded}
            $spacing={spacing}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    );
}
