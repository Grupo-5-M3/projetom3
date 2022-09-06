import styled from "styled-components";

const HeaderDiv = styled.div`
position: fixed;
top: 0;
background-color: white;
z-index: 1;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 5px grey;
  align-items: center;
`;
const DivLogo = styled.div`
  width: clamp(250px, 65%, 350px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    width: clamp(117px, 50%, 122px);
  }
  @media only screen and (min-width: 600px) {
    justify-content: flex-start;
    width: 15%;
    margin-left: 1%;
  }
`;
const DivList = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
const DivNavigate = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    margin-left: 8%;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    gap: 3%;
    a {
      text-decoration: none;
      font-size: 0.7rem;
      color: #374c5a;
      font-weight: 600;
      transition: 0.5s;
      :hover{
        color: #A500E2;
        transition: 0.5s;
        transform: scale(1.1);
      }
    }
  }
  @media only screen and (min-width: 615px) {
    a {
      font-size: 0.7rem;
    }
  }
  @media only screen and (min-width: 690px) {
    margin-left: 4%;
    a {
      text-decoration: none;
      font-size: 0.9rem;
    }
  }
  @media only screen and (min-width: 880px) {
    margin-left: 1%;
    a {
      font-size: 1rem;
    }
  }
`;
const DivNav = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    margin-right: 15px;
    display: flex;
    justify-content: flex-end;
    width: 25%;
    gap: 5%;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 0.7rem;
      color: #374c5a;
      font-weight: 600;
      transition: 0.5s;
      :hover{
        color: #A500E2;
        transition: 0.5s;
        transform: scale(1.1);
      }
      
    svg{
      margin-right: 3px;
    }
    }
    
  }
  @media only screen and (min-width: 690px) {
    margin-left: 4%;
    a {
      text-decoration: none;
      font-size: 0.8rem;
    }
  }
  @media only screen and (min-width: 880px) {
    margin-right: 2%;
    a {
      font-size: 1rem;
    }
  }
`;
const DivMenu = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (min-width: 600px) {
    display: none;
  }

  button {
    margin-right: 4%;
    width: 20%;
    height: 50px;
    border: none;
    background-color: #ffffff;
    svg {
      
      width: 100%;
      height: 50%;
      color: #3b505e;
    }
  }
`;
export default HeaderDiv;
export { DivLogo, DivMenu, DivList, DivNav, DivNavigate };
