import { styled } from "styled-components";
import {
    LargeTypes,
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
    theme,
} from "../../../styles/theme";
import {
    borderRadiusStyle,
    makePadding,
    makeSize,
    spacingStyle,
} from "../../../styles/variants";

interface ContainerProps {
    $rounded?: RadiusTypes;
    $sizes?: LargeTypes;
    $spacing?: SpacingTypes | PaddingTypes;
}

interface HeaderProps {
    $spacing?: PaddingTypes;
}

export const OverlayStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
    padding: 20px;
`;

export const ContainerStyle = styled.div<ContainerProps>`
    background: ${theme.colors.primary};
    border-radius: ${({ $rounded }) => borderRadiusStyle($rounded)};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: ${({ $sizes }) => makeSize($sizes)};
    width: 100%;
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    z-index: 1002;

    ${({ $spacing }) =>
        typeof $spacing === "object"
            ? makePadding($spacing)
            : `padding: ${spacingStyle($spacing)};`}
`;

export const WrapperStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1001;
`;

export const HeaderStyle = styled.div<HeaderProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ $spacing }) => makePadding($spacing ?? {})}
`;

export const TitleStyle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: black;
`;

export const ContentStyle = styled.div`
    padding: 20px;
    overflow-y: auto;
    flex: 1;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #ccc;
    }
`;

export const FooterStyle = styled.div`
    padding: 0 20px 20px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
`;
