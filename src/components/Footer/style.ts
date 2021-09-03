import styled from "styled-components"

export const FooterContainer = styled.div`
background: rgba(150,232,255,1);
display:flex;
flex-direction:column;
padding: 1em;
box-sizing:border-box;
    h1{
        margin-left:1rem;
        font-weight:500;
    }
    i{
        font-size:1.3rem;
        font-weight:300;
        margin: auto;
    }
`

export const Content = styled.div`
padding: 3em;
`

export const FooterTitle = styled.div`
display:flex;
align-items:center;
justify-content:start;
`

export const FooterBody = styled.div`
display:flex;
justify-content:space-evenly;
margin:50px;
h4{
    font-size:1.5rem;
    font-weight:500;
    margin-bottom: 1rem;
}
ul{
    list-style:none;
    font-weight:300;
    font-size:1.3rem;
}
`