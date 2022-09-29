import { Container } from "react-bootstrap";

import Contact from "../components/Contact";

export default () => {
  return (
    <Container className="pt-5 text-center">
      <h1 className="mb-4">Cuentanos, ¿en que te podemos ayudar?</h1>
      <Contact />
    </Container>
  );
};
