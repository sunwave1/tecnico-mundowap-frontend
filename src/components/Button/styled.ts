import { styled } from "styled-components";
import {
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
    VariantTypes,
} from "../../styles/theme";
import {
    variantStyles,
    colorTextByVariant,
    borderRadiusStyle,
    spacingStyle,
    makePadding,
} from "../../styles/variants";

interface StyledButtonProps {
    variant: VariantTypes;
    rounded?: RadiusTypes;
    spacing?: SpacingTypes | PaddingTypes;
}

export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${({ variant }) => variantStyles(variant)};
    color: ${({ variant }) => colorTextByVariant(variant)};
    border: none;
    border-radius: ${({ rounded }) => borderRadiusStyle(rounded)};
    cursor: pointer;

    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 16px;

    ${({ spacing }) =>
        typeof spacing === "object"
            ? makePadding(spacing)
            : `padding: ${spacingStyle(spacing)};`}
`;
