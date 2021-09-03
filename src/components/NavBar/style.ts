import styled from "styled-components";

export const NavContainer = styled.div`
position:sticky;
background: linear-gradient(171deg, hsla(0,0%,100%,0.8) 0%, rgb(150,232,255) 100%);
left:0;
top:0;
color: white;
min-height: 7vh;
max-height: 7vh;
display:flex;
align-items:center;
z-index:1;
padding: 0px 15%;
opacity: 0.9;
backdrop-filter: saturate(180%) blur(5px);
    a{
        text-decoration:none;
    }
    h1{
        font-weight:300;
        color: #000000;
    }
`