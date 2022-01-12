import styled from "styled-components";

export const Div = styled.div`
    display: fles;
    width: 200px;
    height: 200px;
    background-color: grey;
    justify-content: center;
    color: black
    & > p{
        color: green;
    }
    & > p:hover {
        color: blue;
    }
`;