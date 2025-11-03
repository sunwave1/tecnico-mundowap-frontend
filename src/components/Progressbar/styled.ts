import { styled } from "styled-components";
import { VariantTypes } from "../../styles/theme";
import { makeColor } from "../../styles/variants";

interface ProgressbarStyleProps {
    $color?: VariantTypes | string;
    $height?: number;
}

export const ProgressbarContainerStyle = styled.div`
    width: 100%;
    background-color: #d9d9d9;
    border-radius: 10px;
    overflow: hidden;
`;

export const ProgressbarStyle = styled.span<ProgressbarStyleProps>`
    height: ${({ $height }) => $height}px;
    background: ${({ $color }) => makeColor($color)};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 10px;
`;
