import styled from "styled-components";

export const Container = styled.li`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    justify-content: space-around; 
    height: 30vh;
    width: 70%;
    border: 1px solid var(--grey1);
    margin: 10px;
    padding: 5px;

`

export const NameContainer = styled.h1`

    font-size: 20px;

`
export const DescriptionContainer = styled.p`

    font-size: 10px;

`

export const PriceContainer = styled.span`

    font-size: 15px;

`

// export const Container = styled.ul`



// `