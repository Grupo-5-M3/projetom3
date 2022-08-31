import styled from "styled-components";

export const BodyHomeLess = styled.div`
  padding: 30px 13px 0px 30px;

  @media(max-width: 600px) {
    background-color: #4BD18E;
  }
`

export const HeaderSearchHomeLess = styled.header`
  display: flex;
  justify-content: space-between;

  @media(max-width: 600px) {
    margin: auto;
    width: 270px;
  }
`
export const Search = styled.div`
  width: 361px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: none;
    width: 306px;
    height: 42px;
    background: #D9D9D9;
    border-radius: 8px;
    padding: 20px;

    @media(max-width: 600px) {
      width: 216px;
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

export const Directions = styled.div`
  width: 60px;
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
  width: 273px;
  height: 347px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-top: 20px;

  img {
    width: 273px;
    height: 148px;
  }

  figcaption {
    padding: 10px;
    display: flex;
    height: 197px;
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