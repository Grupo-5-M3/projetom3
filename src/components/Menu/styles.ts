import styled from "styled-components";

const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;
  @media only screen and (min-width : 600px){
      display:none
    }
`;
const DivLinks = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-top: 71px;
  background-color: #4140ad;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 5%;

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    a {
      font-size: 12px;
      margin: 10px;
      margin-top: 25px;
      text-decoration: none;
      font-weight: 400;
      color: #f9f9f9;
      :hover{
        color: #F09116
      }
      svg {
        margin-right: 5px;
        color: white;
        cursor: pointer;
        :hover{
        color: #F09116
      }
      }
    }
  }
  width: 150px;
`;
const DivMatriz = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2%;
  h3 {
    text-align: center;
    font-size: 16px;
    color: #fafafa;
    font-weight: 400;
  }
  p {
    text-align: center;
    font-size: 10px;
    color: #fafafa;
    font-weight: 200;
  }
`;
const DivSocials = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  h3 {
    font-size: 8px;
    text-align: center;
    color: #fafafa;
    font-weight: 200;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    a {
      width: 50px;
      height: 20%;
      svg {
        width: 100%;
      }
    }
  }
`;
export { DivLinks, ContainerModal, DivMatriz, DivSocials };
