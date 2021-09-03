import styled from "styled-components";

export const Content = styled.div`
background: radial-gradient(circle, rgba(225,255,255,1) 0%, rgba(245,250,255,1) 100%);
max-height:200vh;
`
export const InfoContainer = styled.div`
padding: 5em 15em;
`

export const InfoTitle = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap: wrap;

    h2{
        font-size: 5em;
    }
    h3{
        font-size: 5em;
        font-weight: 300;
        color:darkgreen;
    }
    .symbol-title{
        display:flex;
        align-items:center;
        img{
            margin-right:15px;
            width:100px;
        }
    }
`

export const InfoBody = styled.div`
margin: 5em 0;

    .about{
        margin: 1em 0;
        height:250px;
        min-height: 2px;
        overflow:auto;
        p{
        color: #272727;
        word-spacing: 1px;
        line-height: 1.5;
        }
        a {
            text-decoration: none
        }
    }
    .options{
        display:flex;
        flex-wrap: wrap;
        justify-content:space-around;
        .data-info{
            background: linear-gradient(232deg, rgba(150,232,255) 0%, rgba(255,255,255,1) 10%, rgba(150,232,255) 100%);
            height: 10vh;
            width:10vw;
            border-radius: 10px;
            margin: 2em 0;
            padding: 1em;
            p{
                font-weight:300;
                font-size: 1.05em;
            }
            svg{
                margin-bottom:0.3em;
            }
            cursor:pointer;
            transition: 0.5s;
            :hover{
                transform: translate(10px, -5px);
            }
        }
    }
`

export const InfoFooter = styled.div``
