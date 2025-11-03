import { PropsWithChildren } from "react";
import {
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
    VariantTypes,
} from "../../../styles/theme";
import { BadgeStyle } from "./styled";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: VariantTypes;
    spacing?: SpacingTypes | PaddingTypes;
    rounded?: RadiusTypes;
    asCursor?: boolean;
}

const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({
    children,
    variant = "primary",
    spacing = { px: "12px", py: "6px" },
    rounded = "full",
    asCursor = false,
    ...props
}) => {
    return (
        <BadgeStyle
            $variant={variant}
            $spacing={spacing}
            $rounded={rounded}
            $asCursor={asCursor}
            {...props}
        >
            {children}
        </BadgeStyle>
    );
};

export default Badge;
