import styled from "styled-components";

export const MarketContainer = styled.div`
height:40vh;
max-height:40vh;
background: #FFFFFF;
border-radius:10px;
margin-bottom: 2em;
padding: 1.5em;
overflow:auto;
display:flex;
    h3{
        font-weight:300;
    }
    hr{
        margin: 0 0 1em ;
    }
    input[type=number]{
        border:none;
        border-bottom: 2px solid black;
        background-color: whitesmoke;
        margin: 0.5em 0 2em;
        font-size:2em;
        width:50%;
    }
    .market-volume{
        width:50%;
    }
    .price{
        width:50%;
    }
`