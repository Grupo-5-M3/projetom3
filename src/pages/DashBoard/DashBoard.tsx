import Form from "../../components/Form";
import Header from "../../components/Header/Header";
import { Container } from "./style";

export default function DashBoard() {

  return (
    <>
      <Header/>
      <Container>
        <div className='purple-side'>
        </div>
        <div className="green-side">
          <Form/>
        </div>
      </Container>
    </>
  );
};