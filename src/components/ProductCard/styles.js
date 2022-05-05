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

    button{

        padding: 0px 20px;
        width: 106px;
        height: 40px;
        background: var(--red1);
        box-sizing: border-box;
        border-radius: 8px;
        margin-left: 10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: var(--grey0);

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
    font-size: 14px;
    line-height: 24px;
    margin-left: 15px;
    margin-bottom: 10px;
    color: var(--green);

`

export const ImageContainer = styled.img`

    width: 220px;
    height: 200px;

`

// export const styleContainer = styled.div`

//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: flex-start;
//     position: relative;
//     left: -5px;
//     height: 73px;
//     width: 100px;
//     text-align: left;

//     h1{
//         height: 20px;
//         margin: 1px;
//         font-family: 'Inter';
//         font-style: normal;
//         font-weight: 700;
//         font-size: 14px;
//         line-height: 24px;
//         color: #333333;
//     }

//     p{
//         height: 20px;
//         margin: 1px;
//         font-family: 'Inter';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 12px;
//         line-height: 16px;
//         color: #828282;
//     }

// `