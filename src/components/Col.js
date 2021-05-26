import styled from "styled-components";
import Breakpoints from "../styles/Breakpoints";

const getWidth = (span, gap) => {
    if(!span) return;
    let width = span / 12 * 100;
    let gapCol = gap * 2;
    if (gap) {
        return `width: calc(${width}% - ${gapCol}px)`;
    }
    return `width: ${width}%`;
}

const Col = styled.div`
    ${({ gap }) => gap ? `margin: ${gap}px` : ""};
    ${({ xs }) => (xs ? getWidth(xs) : "width: 100%")};
    @media (min-width: ${Breakpoints.md}px){
        ${({ md, gap }) => md && getWidth(md, gap)}
    };
    @media (min-width: ${Breakpoints.lg}px){
        ${({ lg, gap }) => lg && getWidth(lg, gap)}
    };
    @media (min-width: ${Breakpoints.xl}px){
        ${({ xl, gap }) => xl && getWidth(xl, gap)}
    };
`;

export default Col;