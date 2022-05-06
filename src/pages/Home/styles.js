
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    text-align: center;
    flex-direction: column;
    
    ul::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px){

        width: 500px;
    }

    @media (min-width: 1024px){
        width: 760px;
    }

    @media (min-width: 1440px){
        width: 1000px;
    }


`

export const Header = styled.div`

    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        height: 75px;
        background: var(--grey3);
        box-shadow: 0px 3px 15px var(--grey3);
    }
 
    h1{
        color: var(--grey0);
        font-size: 40px ;

        @media (min-width: 1440px){
            font-size: 347%;
        }

    }

    button{

        width: 35px;
        height: 34px;
        color: var(--grey0);
        margin-top: 0px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: var(--grey0);

        img{
            width: 31px;
            height: 28px; 
        }
        
    }

`

export const CartContent = styled.div`

    width: 100%;
    height: 100%;
    
    ul::-webkit-scrollbar {
        display: none;
    }

`

export const HeaderCart = styled.div`

    position: absolute;
    width: 280px;
    height: 50px;
    left: 18px;
    top: 500px;
    background: var(--grey3);
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
        font-size: 27px;
        line-height: 24px;
        color: var(--grey0);

        @media (min-width: 375px){
            left: 12%;
        }

        @media (min-width: 425px){
            left: 16%;
        }

        @media (min-width: 768px){
            left: 10%;
            font-size: 21px;
        }

        @media (min-width: 1440px){
            left: 15%;
            font-size: 30px;
        }


    }

    @media(min-width: 375px){
        width: 339.91px; 
    }

    @media (min-width: 425px){

        width: 387.91px;
    }

    @media (min-width: 768px){
        width: 236px;
        height: 60px;
        left: 520px;
        top: 90px;
    }

    @media (min-width: 1024px){
        left: 770px;
    }

    @media (min-width: 1440px){
        left: 1040px;
        width: 385px;

    }

    @media (min-width: 1600px){

        left: 1155px;

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
    background: var(--grey2);

    @media(min-width: 375px){
        width: 339.91px;
    }

    @media (min-width: 425px){

        width: 387.91px;
    }

    @media (min-width: 768px){
        width: 236px;
        height: 230px;
        left: 520px;
        top: 150px;
    }

    @media (min-width: 1024px){
        left: 770px;
    }

    @media (min-width: 1440px){
        left: 1040px;
        width: 385px;
        height: 400px;
        top: 150px;
    }

    @media (min-width: 1600px){
        
        left: 1120px;

    }

    @media (min-width: 1600px){
        
        left: 1155px;

    }

`

export const TransitionContainer = styled.section`
    display: ${(props) => props.display};

`

export const TotalContainer = styled.div`


`

