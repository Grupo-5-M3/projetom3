import styled from "styled-components";
import help from "../../img/help.png"
const DivBackground = styled.div`
width: 100%;
height: 100%;
margin-top: 4.5px;
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
width: 100%;
height: 100%;
background-color: #F09016;
opacity: 0.8;
@media only screen and (min-width: 480px){
 height: 90%;
}
@media only screen and (min-width: 1200px){
 height: 82%;
}
`
export {DivBackground,Main}
