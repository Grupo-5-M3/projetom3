import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 68.5%;
  margin: auto;
`

export const BodyImageHomeless = styled.figure`
  border: 1px solid var(--white);
  position: relative;

  img {
    width: 100%;
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
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  transition: 1s;
  opacity: 0;

  &:hover {
    transition: 1s;
    opacity: 1;
  }

`

export const Message = styled.div`
  width: 31.25em;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 2.5em;
    line-height: 48px;
    color: #FFFFFF;
  }

  p {
    font-weight: 500;
    font-size: 1.5em;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
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
`