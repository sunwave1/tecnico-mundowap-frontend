import { HTMLAttributes } from "react";
import { ColumnStyle } from "./styled";
import {
    AlignmentTypes,
    FlexWrapTypes,
    JustifyTypes,
    MarginTypes,
    SpacingTypes,
} from "../../styles/theme";

interface ColProps extends HTMLAttributes<HTMLDivElement> {
    align?: AlignmentTypes;
    justify?: JustifyTypes;
    grow?: number;
    shrink?: number;
    basis?: string;
    wrap?: FlexWrapTypes;
    gap?: string;
    margin?: SpacingTypes | MarginTypes;
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
    ...props
}: ColProps) {
    return (
        <ColumnStyle
            align={align}
            justify={justify}
            grow={grow}
            shrink={shrink}
            basis={basis}
            wrap={wrap}
            gap={gap}
            margin={margin}
            {...props}
        >
            {props.children}
        </ColumnStyle>
    );
}
