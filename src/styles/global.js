import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        background: transparent;
    }

    :root{

        --grey0: #F8F9FA;
        --grey1: #868E96;
        --grey2: #343B41;
        --grey3: #212529;
        --grey4: #121214;
        --red1: #FF577F;
        --red2: #59323F;
        --black: #000000;
        
    }

    body{
        
        background: var(--grey0);
        color: var(--black);
        margin: 0;
    }

`

