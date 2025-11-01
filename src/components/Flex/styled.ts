import { styled } from "styled-components";
import {
    makeAlign,
    makeJustify,
    makeMargin,
    spacingStyle,
} from "../../styles/variants";
import {
    AlignmentTypes,
    JustifyTypes,
    FlexWrapTypes,
    MarginTypes,
    SpacingTypes,
} from "../../styles/theme";

interface FlexProps {
    align?: AlignmentTypes;
    justify?: JustifyTypes;
    grow?: number;
    shrink?: number;
    basis?: string;
    wrap?: FlexWrapTypes;
    gap?: string;
    margin?: SpacingTypes | MarginTypes;
}

export const RowStyle = styled.div<FlexProps>`
    display: flex;
    flex-direction: row;

    flex-grow: ${({ grow }) => grow || 0};
    flex-shrink: ${({ shrink }) => shrink || 1};
    flex-basis: ${({ basis }) => basis || "auto"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
    gap: ${({ gap }) => gap || "0"};

    ${({ margin }) =>
        typeof margin === "object"
            ? makeMargin(margin)
            : `margin: ${spacingStyle(margin)};`}

    ${({ align }) => makeAlign(align)}
    ${({ justify }) => makeJustify(justify)}
`;

export const ColumnStyle = styled.div<FlexProps>`
    display: flex;
    flex-direction: column;

    flex-grow: ${({ grow }) => grow || 0};
    flex-shrink: ${({ shrink }) => shrink || 1};
    flex-basis: ${({ basis }) => basis || "auto"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
    gap: ${({ gap }) => gap || "0"};

    ${({ margin }) =>
        typeof margin === "object"
            ? makeMargin(margin)
            : `margin: ${spacingStyle(margin)};`}

    ${({ align }) => makeAlign(align)}
    ${({ justify }) => makeJustify(justify)}
`;
