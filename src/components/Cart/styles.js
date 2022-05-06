import styled from "styled-components";

export const Container = styled.ul`

    overflow-x: scroll;
    top: 13px;
    position: absolute;
    padding: 0px;
    width: 100%;
    left: 0px;
    height: 85%;

    li{

        display: flex;
        list-style: none;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 5px;
        margin-top: 5px;
        width: 96%;
        margin-left: 5px;
        flex-direction: row;
        flex-wrap: wrap;
        height: 50%;
        padding: 5px;

        @media (min-width: 1440px){
            height: 32%;
        }

    }

    span{

        font-size: 16px;
    }

    button{

        position: relative;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: var(--grey2);
        border-color: transparent;
        background: transparent;
        width: 40px;
        top: -30px;
        box-shadow: none;
        left: 10px;

        img{

            width: 20px;
            height: 20px;
            background: transparent;
        }

        @media (min-width: 1440px){
            left: 30px;
        }

    }

    img{
        width: 70px;
        height: 70px;
        position: relative;
        left: 0%;
        right: 76.68%;
        top: 0%;
        bottom: 0%;
        background: #E0E0E0;
        border-radius: 5px;
    }

`

export const ContainerInfo = styled.div``

export const MessageH1 = styled.h1`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 16.67%;
    bottom: -16.67%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: var(--green);
    height: 85%;
`

export const MessageP = styled.p`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 35%;
    bottom: -33.33%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: var(--green);
    height: 20%;
`