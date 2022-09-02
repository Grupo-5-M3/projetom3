import styled from "styled-components";
interface IContainerProps{
  color?:string | null
}
export const Main = styled.div`
  height: 300px;
  margin-bottom: 0px;
  margin-top: 5%;

  @media(min-width: 600px){
    display: block;
  }
  h1{
    font:var(--body);
  }

`
export const SocialMedia = styled.div<IContainerProps>`
  height: 50px;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .icon {
  width: 30px;
  height: 30px;
  color: ${props=> props ?`${props.color}`: '#8a25b1'};
  cursor: pointer;
  transition: transform 0.75s;
}

  .icon:hover {
    transform: scale(1.75);
  }

  .green:hover {
    color: rgb(8, 163, 0);
  }

  .blue:hover {
    color: rgb(22, 7, 241);
  }

  .blue-white:hover {
    color: rgb(38, 78, 209);
  }

  .grad:hover {
    color: rgb(253, 101, 0);
  }

  .red:hover {
    color: rgb(255,0,0);
  }

  .blue-clear:hover {
    color: rgb(45, 145, 240);
  }

`
export const Content = styled.div<IContainerProps>`
  height: 200px;
  box-sizing: border-box;
  padding: 15px;
  background-color: ${props=> props ?`${props.color}`: 'var(--default-purple)'};
  display: flex;
  justify-content: space-between;

  .message {
  width: 34%;
  font: italic 1rem Arial;
  color:var(--gray-50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 35px;
}

  .message p{
    line-height: 1.5;
    text-align: justify;
  }

  .message span {
    width: 100%;
    margin-top: 10px;
    font: normal 11px Arial;
    text-align: end;

  }

  .info{
    width: 66%;
    background-color: #fff;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    color:var(--gray-50);
  }

  .info ul{
    height:60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font: normal 1rem 'Inter',sans-serif;
  }

@media(max-width:1024px){
  .message p{
    line-height: 1;
    font:normal 0.90rem 'Inter',sans-serif;
    text-align: start;
  }
}

@media(max-width:768px){
  height: auto;
  display: flex;
  flex-direction: column;

  .message{
    width: 100%;
    height: auto;
    padding:20px;
  }

  .info{
    width: 100%;
    flex-wrap: wrap;
  }

  .info ul{
    padding: 20px;
    gap: 5px;
  }
}

@media(max-width:600px){
  .message{
    display: none;
  }
}
`
export const Copyright = styled.div<IContainerProps>`
height:30px;
background-color: ${props=> props ?`${props.color}`: 'var(--default-purple)'};
text-align: center;
font:12px Arial;
color:var(--gray-0);

  a{
    color: var(--gray-0);
    text-decoration: none;
  }
`
