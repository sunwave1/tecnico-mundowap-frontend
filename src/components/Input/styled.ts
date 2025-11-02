import { styled } from "styled-components";
import {
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
    theme,
} from "../../styles/theme";
import {
    borderRadiusStyle,
    makePadding,
    spacingStyle,
} from "../../styles/variants";

interface StyledInputProps {
    $rounded?: RadiusTypes;
    $spacing?: SpacingTypes | PaddingTypes;
}

export const StyledInput = styled.input<StyledInputProps>`
    border: none;
    background-color: ${theme.colors?.accent};
    border-radius: ${({ $rounded }) => borderRadiusStyle($rounded)};
    box-shadow: rgba(46, 45, 55, 0.12) 0px 1px 2px;
    min-height: 24px;
    ${({ $spacing }) =>
        typeof $spacing === "object"
            ? makePadding($spacing)
            : `padding: ${spacingStyle($spacing)};`};
    outline: none;
`;
