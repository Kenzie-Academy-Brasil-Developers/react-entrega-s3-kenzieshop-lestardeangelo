import styled from "styled-components";

export const Container = styled.li`

    display: flex;
    margin-right: 20px;
    width: 255px;
    height: 380px;
    background: var(--grey0);
    border: 2px solid var(--grey1);
    box-sizing: border-box;
    border-radius: 5px;
    list-style: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    box-shadow: 0px 2px 20px var(--grey2);
    margin-bottom: 10px;
    margin-top: 10px;

    @media (min-width: 768px){
        width: 230px;
        margin-bottom: 20px;
    }

    @media (min-width: 1440px){
        margin-bottom: 20px;
        width: 300px;
        height: 430px;
    }

    @media (min-width: 1600px){
        width: 245px;
        margin-bottom: 10px;
        margin-top: 20px;
    }


    button{

        height: 31px;
        margin-left: 10px;
        width: 40px;
        height: 35px;
        border: none;
        margin-bottom: 2px;

    }

`

export const NameContainer = styled.h1`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-left: 15px;
    margin-top: 6px;

`
export const DescriptionContainer = styled.p`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--grey2);
    margin: 2px;
`

export const PriceContainer = styled.span`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 24px;
    margin-left: 15px;
    margin-bottom: 10px;
    color: var(--green);

`

export const ImageContainer = styled.img`

    width: 220px;
    height: 200px;

    @media (min-width: 1440px){
        width: 295px;
        height: 250px;
    }

    @media (min-width: 1600px){
        width: 240px;
        height: 195px;
    }

`

export const ContainerCartDescription = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    left: -5px;
    height: 73px;
    text-align: left;
    width: 78px;
    left: -4px;
    text-align: center;

    h1{
        height: 20px;
        margin: 1px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: var(--black);
    }

    @media (min-width: 768px){
        
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 85px;
        justify-content: space-around;
        left: 0;

        span{
            margin: 0;
        }
        
    }

`

export const ImgBuy = styled.img`

    width: 33px;
    height: 33px;

`

export const ImgRemove = styled.img`

    width: 20px;
    height: 20px;
    background: transparent;

`

