import { styled } from "styled-components";
import { FontSizeTypes, WeightTypes } from "../../../styles/theme";
import { makeFontSize, makeWeight } from "../../../styles/variants";

interface LabelProps {
    $fontSize?: FontSizeTypes;
    $fontWeight?: WeightTypes;
}

export const LabelStyle = styled.label<LabelProps>`
    ${({ $fontWeight }) => makeWeight($fontWeight)};
    ${({ $fontSize }) => makeFontSize($fontSize)};
`;
