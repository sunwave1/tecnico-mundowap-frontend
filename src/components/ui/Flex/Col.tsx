import { HTMLAttributes } from "react";
import { ColumnStyle } from "./styled";
import {
    AlignmentTypes,
    FlexWrapTypes,
    JustifyTypes,
    MarginTypes,
    PaddingTypes,
    SpacingTypes,
} from "../../../styles/theme";

interface ColProps extends HTMLAttributes<HTMLDivElement> {
    align?: AlignmentTypes;
    justify?: JustifyTypes;
    grow?: number;
    shrink?: number;
    basis?: string;
    wrap?: FlexWrapTypes;
    gap?: string;
    margin?: SpacingTypes | MarginTypes;
    spacing?: SpacingTypes | PaddingTypes;
}

export default function Col({
    align,
    justify,
    grow,
    shrink,
    basis,
    wrap,
    gap,
    margin,
    spacing,
    ...props
}: ColProps) {
    return (
        <ColumnStyle
            $align={align}
            $justify={justify}
            $grow={grow}
            $shrink={shrink}
            $basis={basis}
            $wrap={wrap}
            $gap={gap}
            $margin={margin}
            $spacing={spacing}
            {...props}
        >
            {props.children}
        </ColumnStyle>
    );
}
