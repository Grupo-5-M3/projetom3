import styled from "styled-components";

export const DivBack = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  background-image: url("../teaser_unfpa-debates_pop-sit-rua_interno 1.png");
  background-size: cover;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-height: 380px;
    max-width: 400px;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    gap: 20px;
    margin-top: 120px;

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
      font-size: 14px;
      color: rgba(130, 130, 130, 0.75);
    }

    .register {
      width: 180px;
      height: 44px;
      background-color: #16c0f0;
      border-style: none;
      border-radius: 8px;
      font-size: 17px;
      color: #fff;
      margin-top: 15px;
      margin-bottom: 20px;
      text-decoration: none;
    }

    button {
      border-style: none;
      background-color: transparent;
      text-decoration: underline;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    form {
      width: 80%;
      max-width: 500px;
    }
  }
`;

export const DivBackEdit = styled(DivBack)`
  background-image: none;
  margin-top: 0px;
  position: fixed;
  background-color: rgba(0,0,0,0.4);

  form {
    h3 {
      background-color: #435664;
      padding: 0px 10px 0px 10px;
      justify-content: space-between;

      button {
        color: white;
        margin-bottom: 0px;
      }
    }
  }
`