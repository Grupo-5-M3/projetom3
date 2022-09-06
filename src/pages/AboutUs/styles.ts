import styled from "styled-components";
import help from "../../img/help.png";
const DivBackground = styled.div`

  width: 100%;
  margin: 70px 0px 0px 3px;
  z-index: -1;
  background-image: url(${help});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;
const Main = styled.main`
overflow-y: scroll;
width: 100%;
background-color: #F09016;
box-shadow: 0px 5px 5px 2px  #425563;
border-bottom-right-radius: 3px;
border-bottom-left-radius: 3px;
opacity: 0.9;
display: flex;
flex-direction: column;
gap: 1%;
div{
  margin-top: 3%;
  margin-left: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
  h1,h2,h3{
    margin: 3% 0px;
    color: #1B187A;
    font-weight: 600;
    font-size: 1.5rem;
  }
  h4{
    font-size: 1rem;
    font-weight: 700;
    margin: 5px 0px;
  }
  p{
    margin-bottom: 3% ;
    color: #f9f9f9;
    opacity: 3;
    font-weight: 400;
    font-size: 1rem;
    text-align: justify;
    line-height: 1.5;
     p{
    font-size: 0.8rem;
    font-style: italic;
     }

  a{
    text-decoration: underline;
    color: white;
    font-weight: 700;
  }
  #italic{
    font-style: italic;
    font-weight: 700;
  }

  }
  ul{
    list-style: circle;
    li{
      margin: 5px 0px 5px 5%;
      list-style: circle;
      color: white;
      font-weight: 700;
    }
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
`;
export { DivBackground, Main };
