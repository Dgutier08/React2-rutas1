import { Container } from "react-bootstrap";
import Cake from "../assets/Cake.png";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Happy Cake</span>
        <br />
        <h6>El lugar de los pasteles</h6>
        <br />
        <div className= "container text-center">
        <img src={Cake} className="h-auto w-60 pt-9"/>
        </div>
      </h1>
      <br />

      <h6> Imagen 1: vista Home</h6>
    </Container>
  );
};
