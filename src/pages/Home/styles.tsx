import styled from "styled-components";

export const ContainerHome = styled.div`
  margin: 70px 0px 0px 3px;
  width: 100%;
  height: 100%;
`

export const BodyImageHomeless = styled.figure`
  border: 1px solid var(--white);
  position: relative;

  img {
    width: 100%;

    @media(max-width: 600px){
      height: 225px;
    }
  }
`

export const LegendImageHomeless = styled.figcaption`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  color: #ffffff;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 99.5%;
  padding: 10px;
  box-sizing: border-box;
  transition: 1s;
  
  &:hover {
    transition: 1s;
    opacity: 1;
  }

  @media(max-width: 1220px) {
    justify-content:center ;
  }
`

export const Message = styled.div`
  width: 31.25em;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right:15%;
  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 2.5em;
    line-height: 48px;
    color: #FFFFFF;
  }

  p {
    margin: 1%;
    font-weight: 100;
    font-size: 1.2rem;
    line-height: 29px;
    text-align: justify;
    color: #F9F9F9;
  }

  @media(max-width: 800px) {
    position: static;
    h1 {
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
    }
  }

  @media(max-width: 600px) {
    h1 {
      font-size: 1em;
      line-height: normal;
    }

    p {
      font-size: 1em;
      line-height: normal;
    }
  }
`

export const BtnSupport = styled.button`
  margin-top: 8px;
  width: 10em;
  height: 3.125em;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5em;
  color: #ffffff;
  background: #18167C;
  border-radius: 5px;
  border: 3px solid #18167c;
  transition:all 0.5s;

  :hover{
    transition:all 0.5s;
    background-color: rgba(24, 22, 124,0.5);
    border: 3px solid transparent;
  }

  @media(max-width: 800px) {
    width: 7em;
    font-size: 1em;
  }

  @media(max-width: 700px) {
    display: none;
  }
`

export const BodyCart = styled.ul`
  display: flex;
  margin-top: -3px;

  @media(max-width: 1220px) {
    flex-wrap: wrap;
  }

  @media(max-width: 600px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`

export const CartCoat = styled.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 22.3125em;
  background-color: #16C0F0;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-property: border-radius,box-shadow,tranform;
  transition-duration:2s;
  transition-timing-function: cubic-bezier(cubic-bezier(.15,.89,.85,.26));
  img{
    position: relative;
    left: -220px;
    transform: translateX(220px);
    
  }
  
:hover{
  transition: 0.5s;
  transform: scale(1.07) translateX(20px);
  border-radius: 10%;
  transition-duration:0.5s;
  transition-timing-function: cubic-bezier(cubic-bezier(.15,.89,.85,.26));

  img {    
    transition: 2s;
    transform: translateX(220px)
    op
  }
}
  div {
    display: flex;
    width: 12.9375em;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap:15px;
    justify-content: space-around;
    cursor:pointer;
    transition: all 1.5s;
  }
  h2 {
    font-size: 1.25em;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    cursor:pointer;
  }

  p {
    font-size: 0.9375em;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    cursor:pointer;
  }

  a {
    color: white;
    text-decoration: none;
    cursor:pointer;
  }

  @media(max-width: 1220px) {
    width: 50%;
    height: 50%;
  }

  @media(max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`

export const CartInstitution = styled(CartCoat)`
  background-color: var(--default-purple);

  :hover{
    transform: scale(1.1);
  }
`

export const CartProjects = styled(CartCoat)`
  background-color: #F09016;

  :hover{
    transform: scale(1.1);
  }
`

export const CartSearch = styled(CartCoat)`
  background-color: #4BD18E;

  :hover{
    transform: scale(1.1) translateX(-20px);
  }
`
