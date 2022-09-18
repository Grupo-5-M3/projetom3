import styled from "styled-components";

export const BodyHomeLess = styled.div`
  margin: 70px 0px 0px 0px;
  padding: 30px 13px 0px 30px;

  @media (max-width: 600px) {
    background-color: #f5f5f5;
  }
`;

export const Main = styled.main`
  @media (max-width: 600px) {
    /* background-color: #4BD18E; */
  }
`;

export const HeaderSearchHomeLess = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: auto;
    width: 16.875em;
  }
`;
export const Search = styled.div`
  width: 22.5625em;
  height: 2.625em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: none;
    width: 306px;
    height: 42px;
    background: #d9d9d9;
    border-radius: 8px;
    padding: 20px;

    @media (max-width: 600px) {
      width: 216px;
      background-color: white;
    }
  }

  input:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 5px 3px var(--gray-50);
  }

  button {
    display: flex;
    background: var(--gray-50);
    border-radius: 11px;
    border: none;
    height: 42px;
    width: 43px;
    align-items: center;
    justify-content: center;
    color: white;
  }

  button:hover {
    background-color: var(--gray-20);
    color: var(--gray-50);
    box-shadow: 0 0 5px 2px var(--gray-50);
    transition: all 1.5s;
  }

  svg {
    width: 50%;
    height: 50%;
  }
`;

export const DirectionsTop = styled.div`
  width: 3.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background-color: white;
    width: 50px;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
export const DirectionsBottom = styled.div`
  width: 3.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  button {
    border: none;
    width: 50px;
    color: var(--gray-0);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const BodyMissing = styled.ul`
  max-width: 1240px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: #f5f5f5;
  border-radius: 6px;
  margin-top: 20px;
  padding-bottom: 20px;
  min-height: 387px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-wrap: nowrap;
    overflow-y: auto;
    justify-content: space-between;
  }
`;

export const CardHomeLess = styled.li`
  display: flex;
  flex-direction: column;
  width: 17.0625em;
  height: 21.6875em;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 20px;
  margin-right: 20px;

  figure {
    cursor: pointer;
  }

  figure:hover {
    box-shadow: 0 0 5px 4px var(--gray-50);
    border-radius: 11px;
    transition: all 0.5s;
  }

  a {
    text-decoration: none;
    color: var(--gray-100);
  }

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
    cursor: pointer;

    span {
      font-weight: 900;
      cursor: pointer;
    }

    ul li {
      cursor: pointer;
    }

    ul {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-around;
    }
  }

  @media (max-width: 600px) {
    margin-right: 20px;
  }
`;
