
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    text-align: center;
    flex-direction: column;

`
export const Content = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

`

export const Header = styled.div`

    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        height: 75px;
        background: var(--grey4)
    }
 
    h1{
        color: var(--red1)
    }

    button{
        width: 68px;
        height: 32px;
        color: var(--grey0);
        background-color: var(--red2);
        margin-top: 0px;
    }

`