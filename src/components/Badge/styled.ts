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
    makePadding,
    spacingStyle,
    borderRadiusStyle,
} from "../../styles/variants";

interface BadgeProps {
    $variant: VariantTypes;
    $spacing?: SpacingTypes | PaddingTypes;
    $rounded?: RadiusTypes;
    $asCursor?: boolean;
}

export const BadgeStyle = styled.div<BadgeProps>`
    background-color: ${({ $variant }) => variantStyles($variant)};
    color: ${({ $variant }) => colorTextByVariant($variant)};
    border-radius: ${({ $rounded }) => borderRadiusStyle($rounded)};
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $asCursor }) => ($asCursor ? "cursor: pointer;" : "")}

    ${({ $spacing }) =>
        typeof $spacing === "object"
            ? makePadding($spacing)
            : `padding: ${spacingStyle($spacing)};`}
`;
