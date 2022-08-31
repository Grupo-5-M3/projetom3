import styled from "styled-components";

export const Container = styled.section`
  /* position: absolute; */
  width: 18rem;
  margin-top: 1rem;
  border-radius: 8px 8px 8px 8px;

  -webkit-box-shadow: 0px 6px 7px 1px rgba(0,0,0,0.69); 
  box-shadow: 0px 6px 7px 1px rgba(0,0,0,0.69);
  
  .form-header {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    border-radius: 8px 8px 0 0;
    background-color: #16C0F0;

    h1 {
      color: #FFFFFF;
      font-weight: bold;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #626262;

    border-radius: 0 0 8px 8px;

    .input-container {
      display: flex;
      flex-direction: column;

      width: 13.5rem;
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
    }

    button {
      height: 1.625rem;
      width: 13.5rem;

      border-radius: 8px;
      border: none;

      background-color: #16C0F0;
      color: #FFFFFF;
      font-weight: bold;

      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;
