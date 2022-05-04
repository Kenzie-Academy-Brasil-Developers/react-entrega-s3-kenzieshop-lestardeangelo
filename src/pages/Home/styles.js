
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100vh;

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
    }
 
    h1{
        color: var(--red1)
    }

    button{
        width: 68px;
        height: 32px;
        color: var(--grey0);
        background-color: var(--grey3);
        margin-top: 0px;
    }

`