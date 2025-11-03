import { FontSizeTypes, WeightTypes } from "../../../styles/theme";
import { LabelStyle } from "./styled";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    fontSize?: FontSizeTypes;
    fontWeight?: WeightTypes;
}

export default function Label({
    children,
    fontSize,
    fontWeight,
    ...props
}: LabelProps) {
    return (
        <LabelStyle $fontSize={fontSize} $fontWeight={fontWeight} {...props}>
            {children}
        </LabelStyle>
    );
}
