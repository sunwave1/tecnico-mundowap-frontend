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

export type RadiusTypes = keyof (typeof theme)["border-radius"];
export type SpacingTypes = keyof typeof theme.spacing;
export type VariantTypes = keyof typeof theme.colors;
