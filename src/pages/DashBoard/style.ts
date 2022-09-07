import styled from "styled-components";

export const Container = styled.div`
  margin: 70px 0px 0px 3px;
  background: rgb(138,37,177);
  background: linear-gradient(90deg, rgba(138,37,177,1) 50%, rgba(75,209,142,1) 50%, rgba(75,209,142,1) 100%);

  height: 100%;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  .text {
    display: none;
  }

  .form-container {
    width: 18rem;
    margin: 1rem auto;
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
      background-color: #FFFFFF;
  
      border-radius: 0 0 8px 8px;
  
      .input-container {
        display: flex;
        flex-direction: column;
  
        width: 13.5rem;

        .error-message {
          font-size: 12px;
          color: #F81A1A;
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
  
        background-color: #16C0F0;
        color: #FFFFFF;
        font-weight: bold;
  
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    margin: 0;

    .text {
      display: flex;
      flex-direction: column;

      color: #FFFFFF;

      max-width: 40vw;
      margin-left: 4rem;
      margin-top: 10rem;
      margin-right: 3rem;

      p:first-child {
        margin-top: 1rem;
      }

      p + p {
        margin-top: 5rem;
      }
    }

    .form-container {
      width: 21rem;
      margin-top: 10rem;
    }
  }
`;
