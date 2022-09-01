import styled from "styled-components";

export const Main = styled.div`
  margin-top: 71px;
  background-color: #fff;
  width: 100;
  height: 100vh;

  figure{
    width: 100%;
    margin-top: 32px;
    margin-bottom: 43px;
  }

  figure img{
    width: 100%;
  }

  @media(min-width: 768px){
    figure{
      width: 100%;
      background-color: #02A4DC;
      display: flex;
      justify-content: center;
    }
    figure img{
      max-width: 768px;
    }
  }
`

export const Description = styled.div`
  margin: 0 20px;

  h2{
    font:bold 2rem 'Inter',sans-serif;
    text-align: center;
    color:#828282;
    margin-bottom: 15px;
  }

  p{
    font:normal 1.05rem 'Inter',sans-serif;
    text-align: justify;
    line-height: 25px;
    color:#828282;
  }

  @media(min-width: 500px){
    font:normal 1.15rem 'Inter',sans-serif;
    margin: 0 auto;
    p{
      text-align: center;
    }
    width: clamp(300px,500px,700px);
  }
  @media(min-width: 1300px){
    p{text-align: center}
    margin: 0 auto;
    max-width: 1300px;
  }
`

export const DivMaps = styled.div`
  margin: 0 22px;
  color: #828282;

  h2{
    font:bold 2rem 'Inter',sans-serif;
    text-align: center;
    color:#828282;
    margin-bottom: 25px;
  }

  span{
    font: italic 1.15rem 'Inter',sans-serif;
  }

  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ul li{
    width: 100%;
    max-width: 400px;
  }

  @media(min-width: 768px){
    ul{
      margin: 0 60px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-end;
      gap: 25px;
      width: 80%;
      max-width: 1300px;
      margin: 0 auto;
    }
  }

  @media(min-width: 1075px){
    ul{
      display: flex;
      justify-content: space-between;
    }

    ul li{
      width: 100%;
      max-width: 400px;
    }
  }
`

export const CardMap = styled.div`
  margin-bottom: 45px;
  margin-top: 10px;

  iframe{
    width: 100%;
    max-width: 400px;
    height:300px; 
    border:0;
    /* " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */
  }
`

