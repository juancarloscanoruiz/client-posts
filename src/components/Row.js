import styled from "styled-components";

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ${({ justify }) => justify ? `justify-content: ${justify}` : "flex-start"}
`;

export default Row;