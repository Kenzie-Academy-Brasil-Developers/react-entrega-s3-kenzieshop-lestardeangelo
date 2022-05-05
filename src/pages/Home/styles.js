
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
        margin-top: 0px;
        background-image: url(../../svgs/cart2.png);
        background-repeat: no-repeat;
        background-position: center center ;
        
    }

`

export const CartContent = styled.div`

    width: 100%;
    height: 100%;

`

export const HeaderCart = styled.div`

    position: absolute;
    width: 280px;
    height: 50px;
    left: 18px;
    top: 500px;
    background: var(--grey1);
    border-radius: 5px 5px 0px 0px;
    

    h1{

        position: absolute;
        left: 5%;
        right: 0%;
        top: 29.67%;
        bottom: -16.67%;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--grey0);
    }

`

export const CartContainer = styled.div`

    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    position: absolute;
    width: 279.91px;
    height: 260px;
    left: 18px;
    top: 550px;
    border-radius: 0px 0px 5px 5px;
    justify-content: flex-end;
    align-items: flex-start;
    border: 1px solid var(--grey1);

`

export const TransitionContainer = styled.section`
    display: ${(props) => props.display};


`