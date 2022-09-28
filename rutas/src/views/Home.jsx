import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Happy Cake</span>
        <br />
        <h6>El lugar de los pasteles</h6>
        <div className= "container text-center">
          <img src="/img/pastel.png" alt="pastel" width = "300" height="auto"/>
        </div>
      </h1>
      <br />

      <h6> Imagen 1: vista Home</h6>
    </Container>
  );
};
