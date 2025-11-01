export const theme = {
    colors: {
        primary: "#FFFFFF",
        secondary: "#E11138",
        success: "#008E5A",
        error: "",
        warning: "",
        info: "",
        light: "",
        dark: "",
        accent: "#ECEDF2",
    },
    breakpoints: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
    },
    spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
    },
    "border-radius": {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        full: "99rem",
    },
};

export interface PaddingTypes {
    p?: string;
    px?: string;
    py?: string;
    pt?: string;
    pr?: string;
    pl?: string;
    pb?: string;
}

export interface MarginTypes {
    m?: string;
    mx?: string;
    my?: string;
    mt?: string;
    mr?: string;
    ml?: string;
    mb?: string;
}

export type RadiusTypes = keyof (typeof theme)["border-radius"];
export type SpacingTypes = keyof typeof theme.spacing;
export type VariantTypes = keyof typeof theme.colors;
export type AlignmentTypes = "start" | "center" | "end";
export type JustifyTypes =
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";
export type FlexWrapTypes = "nowrap" | "wrap" | "wrap-reverse";
export type LargeTypes = "small" | "medium" | "large";
export type WeightTypes = "light" | "regular" | "medium" | "bold" | string;
export type FontSizeTypes =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | string;
