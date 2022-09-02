import styled from "styled-components";
interface IContainerProps{
  color?:string | null
}
export const Main = styled.div`
background-color: rgb(245, 245, 245);
display: none;
height: 300px;
margin-bottom: 0px;
@media(min-width: 600px){
  display: block;
}
/*#F09116 #16C0F0 #8a25b1 #4bd18e*/
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
    color: green;
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
    color: red;
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
  width: 30%;
  font: italic 16px Arial;
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

  .links {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font: normal 12px Arial;
    align-items: center;
    background-color: #fff;
    padding-left:30px;
    padding: 15px;
  }

  .links h3{
    width: 100%;
    font:bold 14px 'Inter',sans-serif;
    padding-bottom: 10px;
    text-align: start;
    color: var(--gray-50);
  }

  .links svg{
    color:rgb(38, 78, 209);
  }

  .links ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding-left: 0px;
    color: var(--gray-50);
  }

  .links a{
    text-decoration: none;
    
  }

  .links ul li{
    text-decoration: none;
    color:var(--gray-50);
    cursor: pointer;
  }

  .links span{
    margin-left: 8px;
  }

  .info{
    width: 45%;
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
    font: normal 12px 'Inter',sans-serif;
  }

@media(max-width:1024px){
  .message p{
    line-height: 1;
    font:normal 12px 'Inter',sans-serif;
    text-align: start;
  }
}

@media(max-width:768px){
  height: auto;
  display: flex;
  flex-direction: column;

  .links{
    display: none;
    width: 100%;
    height: auto;
    /* flex-wrap: wrap; */
    display: flex;
  }

  .links ul{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .links ul li{
    width: 230px;
    padding: 5px 0;
    
  }

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
`
export const Copyright = styled.div<IContainerProps>`
height:30px;
background-color: ${props=> props ?`${props.color}`: 'var(--default-purple)'};
text-align: center;
font:12px Arial;
color:var(--gray-0);
`
