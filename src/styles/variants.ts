import { PaddingTypes, RadiusTypes, SpacingTypes, theme } from "./theme";
import { css } from "styled-components";

export const variantStyles = (variant: string) => {
    switch (variant) {
        case "primary":
            return theme.colors.primary;
        case "secondary":
            return theme.colors.secondary;
        default:
            return theme.colors.primary;
    }
};

export const colorTextByVariant = (variant: string) => {
    switch (variant) {
        case "primary":
            return "black";
        case "secondary":
            return "white";
        default:
            return "white";
    }
};

export const borderRadiusStyle = (rounded?: RadiusTypes) => {
    switch (rounded) {
        case "xs":
            return theme["border-radius"].xs;
        case "sm":
            return theme["border-radius"].sm;
        case "md":
            return theme["border-radius"].md;
        case "lg":
            return theme["border-radius"].lg;
        case "xl":
            return theme["border-radius"].xl;
        case "full":
            return theme["border-radius"].full;
        default:
            return "0px";
    }
};

export const spacingStyle = (spacing?: SpacingTypes) => {
    switch (spacing) {
        case "xs":
            return theme.spacing.xs;
        case "sm":
            return theme.spacing.sm;
        case "md":
            return theme.spacing.md;
        case "lg":
            return theme.spacing.lg;
        case "xl":
            return theme.spacing.xl;
        default:
            return "0px";
    }
};

export const makePadding = ({ p, px, py, pt, pr, pl, pb }: PaddingTypes) => {
    return css`
        padding-top: ${pt ?? py ?? p ?? 0};
        padding-bottom: ${pb ?? py ?? p ?? 0};
        padding-left: ${pl ?? px ?? p ?? 0};
        padding-right: ${pr ?? px ?? p ?? 0};
    `;
};
