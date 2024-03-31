import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        overflow-x: hidden;
        max-width: 100vw;
    }

    main {
        display: block;
    }

    hr {
        box-sizing: content-box; 
        height: 0; 
        overflow: visible; 
    }

    a {
        background-color: transparent;
        text-decoration: none;
    }

    b,
    strong {
        font-weight: bolder;
    }

    img {
        display: block;
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        margin: 0; 
    }
    
    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        outline: none;
        padding: 0;
    }

    textarea {
        overflow: auto;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    details {
        display: block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }
`