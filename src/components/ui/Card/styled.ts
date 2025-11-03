import { styled } from "styled-components";
import {
    MarginTypes,
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
    VariantTypes,
} from "../../../styles/theme";
import {
    makeMargin,
    makePadding,
    spacingStyle,
    variantStyles,
    borderRadiusStyle,
} from "../../../styles/variants";

interface CardProps {
    $variant: VariantTypes;
    $hasShadow?: boolean;
    $hasBorder?: boolean;
    $margin?: SpacingTypes | MarginTypes;
    $spacing?: SpacingTypes | PaddingTypes;
    $rounded?: RadiusTypes;
}

export const CardStyle = styled.div<CardProps>`
    background-color: ${({ $variant }) => variantStyles($variant)};
    border-radius: ${({ $rounded }) => borderRadiusStyle($rounded)};
    box-shadow: ${({ $hasShadow }) =>
        $hasShadow ? "rgba(46, 45, 55, 0.12) 0px 1px 2px" : "none"};

    ${({ $hasBorder }) => $hasBorder && "border: 1px solid #D0CFDA;"}

    ${({ $margin }) =>
        typeof $margin === "object"
            ? makeMargin($margin)
            : `margin: ${spacingStyle($margin)};`}
    ${({ $spacing }) =>
        typeof $spacing === "object"
            ? makePadding($spacing)
            : `padding: ${spacingStyle($spacing)};`}
`;
