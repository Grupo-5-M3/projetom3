import styled from "styled-components";

export const Main = styled.div`
  margin-top: 71px;
  background-color: #fff;
  width: 100vw;

  figure{
    width: 100%;
    margin-top: 32px;
    margin-bottom: 43px;
  }

  figure img{
    width: 100%;
  }
`

export const Description = styled.div`
  margin: 0px 22px;

  h2{
    font:bold 26px 'Inter',sans-serif;
    text-align: center;
    color:#828282;
    margin-bottom: 15px;
  }

  p{
    font:normal 16px 'Inter',sans-serif;
    text-align: justify;
    text-indent: 30px;
    line-height: 25px;
    color:#828282;
  }
`

export const DivMaps = styled.div`
  margin: 0 22px;
  color: #828282;

  h2{
    font:bold 26px 'Inter',sans-serif;
    text-align: center;
    color:#828282;
    margin-bottom: 25px;
  }

  span{
    font: italic 16px 'Inter',sans-serif;
  }
`

export const CardMap = styled.div`
  margin-bottom: 45px;
  margin-top: 10px;

  iframe{
    width: 100%;
    height:300px; 
    border:0;
    /* " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */
  }
`

