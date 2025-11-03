import { HTMLAttributes } from "react";
import { RowStyle } from "./styled";
import {
    AlignmentTypes,
    FlexWrapTypes,
    JustifyTypes,
    MarginTypes,
    PaddingTypes,
    SpacingTypes,
} from "../../styles/theme";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
    align?: AlignmentTypes;
    justify?: JustifyTypes;
    grow?: number;
    shrink?: number;
    basis?: string;
    wrap?: FlexWrapTypes;
    gap?: string;
    spacing?: SpacingTypes | PaddingTypes;
    margin?: SpacingTypes | MarginTypes;
}

export default function Row({
    align,
    justify,
    grow,
    shrink,
    basis,
    wrap,
    gap,
    spacing,
    margin,
    ...props
}: RowProps) {
    return (
        <RowStyle
            $align={align}
            $justify={justify}
            $grow={grow}
            $shrink={shrink}
            $basis={basis}
            $wrap={wrap}
            $gap={gap}
            $spacing={spacing}
            $margin={margin}
            {...props}
        >
            {props.children}
        </RowStyle>
    );
}
