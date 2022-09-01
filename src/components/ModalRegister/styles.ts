import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DivBack = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(138, 37, 177);
  background: linear-gradient(
    90deg,
    rgba(22, 192, 240, 1) 0%,
    rgba(22, 192, 240, 1) 50%,
    rgba(138, 37, 177, 1) 50%,
    rgba(138, 37, 177, 1) 100%
  );
  gap: 10%;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 500px;
    max-width: 40%;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    gap: 8px;

    h3 {
      background-color: #4bd18e;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px 8px 0 0;
      color: #fff;
      font-size: 22px;
    }

    label,
    input {
      width: 60%;
    }

    label {
      color: #828282;
      font-size: 12px;
    }

    input {
      border-style: none;
      border-bottom: 1px solid gray;
      padding: 3px;
    }

    label:nth-child(2) {
      margin-top: 10px;
    }

    input::placeholder {
      font-size: 10px;
      color: rgba(130, 130, 130, 0.75);
    }

    button {
      width: 139px;
      height: 26px;
      background-color: #4bd18e;
      border-style: none;
      border-radius: 8px;
      font-size: 12px;
      color: #fff;
      margin-top: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    p {
      display: none;
    }
    form {
      width: 90%;
      max-width: 500px;
    }
  }
`;
