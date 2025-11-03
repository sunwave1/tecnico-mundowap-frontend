import { styled } from "styled-components";
import { FontSizeTypes, VariantTypes, WeightTypes } from "../../styles/theme";
import { makeColor, makeFontSize, makeWeight } from "../../styles/variants";

interface TextProps {
    $color?: VariantTypes | string;
    $fontSize?: FontSizeTypes | string;
    $fontWeight?: WeightTypes | string;
}

export const TextStyle = styled.span<TextProps>`
    ${({ $fontWeight }) => makeWeight($fontWeight)};
    ${({ $fontSize }) => makeFontSize($fontSize)};
    color: ${({ $color }) => makeColor($color)};
`;
