import { CardStyle } from "./styled";
import {
    MarginTypes,
    PaddingTypes,
    RadiusTypes,
    SpacingTypes,
    VariantTypes,
} from "../../styles/theme";

interface CardProps extends React.AllHTMLAttributes<HTMLDivElement> {
    variant?: VariantTypes;
    hasShadow?: boolean;
    hasBorder?: boolean;
    margin?: SpacingTypes | MarginTypes;
    spacing?: SpacingTypes | PaddingTypes;
    rounded?: RadiusTypes;
}

export default function Card({
    children,
    variant = "primary",
    hasShadow = false,
    hasBorder = false,
    margin,
    spacing = "sm",
    rounded = "md",
    ...props
}: CardProps) {
    return (
        <CardStyle
            variant={variant}
            hasShadow={hasShadow}
            hasBorder={hasBorder}
            margin={margin}
            spacing={spacing}
            rounded={rounded}
            {...props}
        >
            {children}
        </CardStyle>
    );
}
