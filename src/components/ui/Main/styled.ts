import { styled } from "styled-components";
import { MarginTypes, SpacingTypes } from "../../../styles/theme";
import { makeMargin, spacingStyle } from "../../../styles/variants";

interface MainProps {
    $margin?: SpacingTypes | MarginTypes;
}

export const Main = styled.main<MainProps>`
    ${({ $margin }) =>
        typeof $margin === "object"
            ? makeMargin($margin)
            : `margin: ${spacingStyle($margin)};`}
`;
