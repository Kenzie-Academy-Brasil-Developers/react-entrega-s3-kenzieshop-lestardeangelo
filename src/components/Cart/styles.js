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

    }

    h1{

        position: relative;
        height: 20px;
        margin: 1px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        width: 85px;
        text-align: center;
        bottom: 12px;

    }

    p{
        height: 20px;
        margin: 1px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--grey2);
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