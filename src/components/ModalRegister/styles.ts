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
  display: flex;
  /* align-items: center; */
  justify-content: center;
  background-image: url("teaser_unfpa-debates_pop-sit-rua_interno 1.png");
  background-size: cover;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-height: 500px;
    max-width: 400px;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    gap: 12px;
    margin-top: 150px;

    h3 {
      background-color: #16c0f0;
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
      width: 70%;
    }

    label {
      color: #828282;
      font-size: 14px;
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
      font-size: 12px;
      color: rgba(130, 130, 130, 0.75);
    }

    .register {
      width: 139px;
      height: 26px;
      background-color: #16c0f0;
      border-style: none;
      border-radius: 8px;
      font-size: 12px;
      color: #fff;
      margin-top: 5px;
      text-decoration: none;
    }

    button {
      border-style: none;
      background-color: transparent;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px) {
    form {
      width: 90%;
      max-width: 500px;
    }
  }
`;
