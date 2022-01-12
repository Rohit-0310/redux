import styled from "styled-components";


export const Button = styled.button`
    /* CSS Syntex */
    color: ${(props) => (props.theme === "light" ? "#fe7e6d" : "#FEECE9")};
    background: ${(props) => (props.theme === "light" ? "#FEECE9" : "#fe7e6d")};;
    border: none;
    border-radius: 10px;
    padding:10px;
    &:hover{
        box-shadow: 10px 5px 5px red;
        background-color: #F5EEDC;
        border: 1px solid #4F091D;
        border-radius: 15px;
        padding: 10px;
        color: blue;
        border: 1px solid #4F091D;
        border-radius: 15px;
    }
`;
//light: #eece9 dark: #fe726d
