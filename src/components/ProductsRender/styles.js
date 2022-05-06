import styled from "styled-components";

export const Container = styled.ul`

    overflow-x: scroll;
    display: flex;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 10px;
    height: 415px;
    margin-top: 0px;
        

    @media (min-width: 768px){
        flex-wrap: wrap;
        height: 730px;
        width: 510px;
    }

    @media (min-width: 1024px){
        width: 760px;
        height: 730px;
    }

    @media (min-width: 1440px){
        width: 1000px;

    }

    @media (min-width: 1600px){
        width: 1120px;

    }

`