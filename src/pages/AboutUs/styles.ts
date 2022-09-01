import styled from "styled-components";
import help from "../../img/help.png"
const DivBackground = styled.div`
width: 100%;
height: 90%;
margin-top: 3px;
z-index: -1;
background-image: url(${help});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
@media only screen and (min-width: 480px){
  footer{
    height: 100px;
    width: 100%;
    background-color: white;
  }
}
@media only screen and (min-width: 1200px){
 footer{
  height: 150px;
 }
}

`
const Main = styled.main`
overflow-y: scroll;
width: 100%;
height: 100%;
background-color: #F09016;
opacity: 0.9;
display: flex;
flex-direction: column;
gap: 1%;
div{
  margin-top: 3%;
  margin-left: 10%;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h1,h2{
    margin-top: 1%;
    color: #1B187A;
    font-weight: 600;
    font-size: 1.5rem;
  }
  p{
    margin-top: 1%;
    color: #f9f9f9;
    opacity: 3;
    font-weight: 400;
    font-size: 1rem;
    text-align: justify;
    line-height: 1.5;
  }
  @media only screen and (min-width: 400px){
    p{
      text-align: justify;
      font-size: 1.1rem;
      line-height: 1.2;
      
    }
  }
}

@media only screen and (min-width: 1200px){
opacity: 0.8;
height: 100%;
 overflow-y: visible;
}
`
export {DivBackground,Main}
