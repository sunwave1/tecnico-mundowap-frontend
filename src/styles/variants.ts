import { css } from "styled-components";
import {
    AlignmentTypes,
    FontSizeTypes,
    JustifyTypes,
    LargeTypes,
    MarginTypes,
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
    theme,
    VariantTypes,
    WeightTypes,
} from "./theme";

export const variantStyles = (variant: VariantTypes) => {
    switch (variant) {
        case "primary":
            return theme.colors.primary;
        case "secondary":
            return theme.colors.secondary;
        case "success":
            return theme.colors.success;
        case "accent":
            return theme.colors.accent;
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
        case "accent":
            return "black";
        default:
            return "white";
    }
};

export const makeColor = (color?: VariantTypes | string) => {
    switch (color) {
        case "primary":
        case "secondary":
        case "accent":
        case "success":
            return variantStyles(color);
        case "muted":
            return theme.colors.muted;
        default:
            return color;
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

export const makeMargin = ({ m, mx, my, mt, mr, ml, mb }: MarginTypes) => {
    return css`
        margin-top: ${mt ?? my ?? m ?? 0};
        margin-bottom: ${mb ?? my ?? m ?? 0};
        margin-left: ${ml ?? mx ?? m ?? 0};
        margin-right: ${mr ?? mx ?? m ?? 0};
    `;
};

export const makeAlign = (align?: AlignmentTypes) => {
    switch (align) {
        case "start":
            return css`
                align-items: start;
            `;
        case "center":
            return css`
                align-items: center;
            `;
        case "end":
            return css`
                align-items: end;
            `;
        default:
            return css``;
    }
};

export const makeJustify = (justify?: JustifyTypes) => {
    switch (justify) {
        case "start":
            return css`
                justify-content: flex-start;
            `;
        case "center":
            return css`
                justify-content: center;
            `;
        case "end":
            return css`
                justify-content: flex-end;
            `;
        case "between":
            return css`
                justify-content: space-between;
            `;
        case "around":
            return css`
                justify-content: space-around;
            `;
        case "evenly":
            return css`
                justify-content: space-evenly;
            `;
        default:
            return css``;
    }
};

export const makeSize = (sizes?: LargeTypes) => {
    switch (sizes) {
        case "small":
            return "400px";
        case "medium":
            return "800px";
        case "large":
            return "1280px";
        default:
            return "90vw";
    }
};

export const makeWeight = (weight?: WeightTypes | string) => {
    switch (weight) {
        case "light":
            return css`
                font-weight: 300;
            `;
        case "regular":
            return css`
                font-weight: 400;
            `;
        case "medium":
            return css`
                font-weight: 500;
            `;
        case "semibold":
            return css`
                font-weight: 600;
            `;
        case "bold":
            return css`
                font-weight: 700;
            `;
        default:
            return css`
                font-weight: ${weight};
            `;
    }
};

export const makeFontSize = (size?: FontSizeTypes | string) => {
    switch (size) {
        case "small":
            return css`
                font-size: 12px;
            `;
        case "medium":
            return css`
                font-size: 16px;
            `;
        case "large":
            return css`
                font-size: 20px;
            `;
        default:
            return css`
                font-size: ${size};
            `;
    }
};
