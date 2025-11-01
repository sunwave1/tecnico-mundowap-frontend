import { HTMLAttributes } from "react";
import { RowStyle } from "./styled";
import {
    AlignmentTypes,
    FlexWrapTypes,
    JustifyTypes,
} from "../../styles/theme";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
    align?: AlignmentTypes;
    justify?: JustifyTypes;
    grow?: number;
    shrink?: number;
    basis?: string;
    wrap?: FlexWrapTypes;
    gap?: string;
}

export default function Row({
    align,
    justify,
    grow,
    shrink,
    basis,
    wrap,
    gap,
    ...props
}: RowProps) {
    return (
        <RowStyle
            align={align}
            justify={justify}
            grow={grow}
            shrink={shrink}
            basis={basis}
            wrap={wrap}
            gap={gap}
            {...props}
        >
            {props.children}
        </RowStyle>
    );
}
