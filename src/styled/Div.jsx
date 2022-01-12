import styled from "styled-components";

export const Div = styled.div`
    /* display: fles; */
    width: 100%;
    height: 70px;
    background-color: #36a5b4;
    justify-content: center;
    color: black;
    margin: 1%;
    & > p{
        color: green;
    }
    & > p:hover {
        color: blue;
    }
`;