import styled from "styled-components";

export const HomeContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
background: radial-gradient(circle, rgba(225,255,255,1) 0%, rgba(245,250,255,1) 100%);
.background-logo{
    position: fixed;
    left: 70%;
    top: -10%;
    height: auto;
    opacity: 0.03;
    z-index: 0;
}
`

export const CryptoList = styled.div`
flex-direction:column;
width: 60vw;
margin: 15px 0px 80px;
z-index: 0;
    a{
        color:black;
        text-decoration:none;
    }
    div{
        margin: 15px;
        .symbol-name{
            display:flex;
            align-items:center;
            img{
                margin-right:15px;
                height:50px;
                width:50px;
            }
        }
        .value{
            h3{
                color:darkgreen
            }
        }
    }
`

export const ListCard = styled.div`
height: 10vh;
display:flex;
align-items:center;
justify-content:space-between;
padding: 5px 20px;
background-color: rgba(150,232,255,0.5);
border-radius: 5px;
width: 100%;
transition: 0.5s;
    :hover{
        background: rgb(150,232,255);
        cursor:pointer;
        transform: translate(15px, 0px);
    }
`
