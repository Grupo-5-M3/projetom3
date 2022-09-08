import styled from "styled-components";

export const Container = styled.div`
  margin: 70px 0px 0px 0px;
  background: rgb(138, 37, 177);
  background: linear-gradient(
    90deg,
    rgba(138, 37, 177, 1) 50%,
    rgba(75, 209, 142, 1) 50%,
    rgba(75, 209, 142, 1) 100%
  );

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .text {
    width: 18rem;
    display: flex;
    align-items: center;
    margin-top: 50px;
  }

  .form-container {
    width: 18rem;
    margin: 1rem auto;
    margin-top: 1rem;
    border-radius: 8px 8px 8px 8px;

    -webkit-box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.69);
    box-shadow: 0px 6px 7px 1px rgba(0, 0, 0, 0.69);

    .form-header {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 3rem;
      border-radius: 8px 8px 0 0;
      background-color: #16c0f0;

      h1 {
        color: #ffffff;
        font-weight: bold;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #ffffff;

      border-radius: 0 0 8px 8px;

      .input-container {
        display: flex;
        flex-direction: column;

        width: 13.5rem;

        .error-message {
          font-size: 12px;
          color: #f81a1a;
        }
      }

      .input-container:first-child {
        margin-top: 1rem;
      }

      .input-container + .input-container {
        margin-top: 1rem;
      }

      .input-container label {
        font-size: 14px;
      }

      .input-container input {
        height: 2rem;
        margin-top: 0.5rem;

        border: none;
        border-bottom: 1px solid black;

        outline: none;
      }

      button {
        height: 1.625rem;
        width: 13.5rem;

        border-radius: 8px;
        border: none;

        background-color: #16c0f0;
        color: #ffffff;
        font-weight: bold;

        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 0;
    flex-direction: row;
    align-items: baseline;
    height: 100%;

    .text {
      display: flex;
      flex-direction: column;
      color: #ffffff;
      width: 50%;
    }

    .form-container {
      width: 21rem;
      margin-top: 8rem;
    }
  }
`;
