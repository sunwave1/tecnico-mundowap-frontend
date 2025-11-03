import { forwardRef } from "react";
import { PaddingTypes, RadiusTypes, SpacingTypes } from "../../../styles/theme";
import { StyledInput } from "./styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    $spacing?: SpacingTypes | PaddingTypes;
    $rounded?: RadiusTypes;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ $spacing = "xs", $rounded = "xs", ...props }, ref) => {
        return (
            <StyledInput
                ref={ref}
                $spacing={$spacing}
                $rounded={$rounded}
                {...props}
            />
        );
    },
);

Input.displayName = "Input";

export default Input;
