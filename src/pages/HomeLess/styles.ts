import styled from "styled-components";

export const BodyHomeLess = styled.div`
  padding: 30px 13px 0px 30px;

  @media(max-width: 600px) {
    background-color: #4BD18E;
  }
`

export const Main = styled.main`

  @media(max-width: 600px) {
    height: 100vh;
    background-color: #4BD18E;
  }
`


export const HeaderSearchHomeLess = styled.header`
  display: flex;
  justify-content: space-between;

  @media(max-width: 600px) {
    margin: auto;
    width: 16.875em;
  }
`
export const Search = styled.div`
  width: 22.5625em;
  height: 2.625em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: none;
    width: 19.125em;
    height: 2.625em;
    background: #D9D9D9;
    border-radius: 8px;
    padding: 20px;

    @media(max-width: 600px) {
      width: 13.5em;
      background-color: white;
    }
  }

  button {
    display: flex;
    background: #4BD18E;
    border-radius: 11px;
    border: none;
    height: 42px;
    width: 43px;
    align-items: center;
    justify-content: center;

    @media(max-width: 600px) {
      background-color: white;
    }
  }
`

export const DirectionsTop = styled.div`
  width: 3.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background-color: white;
  }

  @media(max-width: 600px) {
    display: none;
  }
`
export const DirectionsBottom = styled.div`
  width: 3.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  button {
    border: none;
    background-color: #4BD18E;
  }

  @media(min-width: 600px) {
    display: none;
  }
`

export const BodyMissing = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #4BD18E;
  border-radius: 6px;
  margin-top: 20px;
  padding-bottom: 20px;

  @media(max-width: 600px) {
    flex-wrap: nowrap;
    overflow-y: auto;
    justify-content: space-between;
  }
`

export const CardHomeLess = styled.li`
  display: flex;
  flex-direction: column;
  width: 17.0625em;
  height: 21.6875em;
  background: #FFFFFF;
  border-radius: 8px;
  margin-top: 20px;

  img {
    width: 17.0625em;
    height: 9.25em;
    border-radius: 8px 8px 0px 0px;
  }

  figcaption {
    padding: 10px;
    display: flex;
    height: 12.3125em;
    flex-direction: column;
    justify-content: space-around;

    span {
      font-weight: 900;
    }
  }

  @media(max-width: 600px) {
    margin-right: 20px;
  }

`