import { VariantTypes, FontSizeTypes, WeightTypes } from "../../styles/theme";
import { TextStyle } from "./styled";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: VariantTypes | string;
    size?: FontSizeTypes | string;
    weight?: WeightTypes | string;
}

export function Text({ color, size, weight, ...props }: TextProps) {
    return (
        <TextStyle
            $color={color}
            $fontSize={size}
            $fontWeight={weight}
            {...props}
        >
            {props.children}
        </TextStyle>
    );
}
