//import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Navigation() {
  return (
    <>

      <div className="mb-3 text-center">
        <label for="exampleFormControlInput1" className="form-label">Correo:</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3 text-center">
        <label for="exampleFormControlTextarea1" className="form-label text-center">Descripcion:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <br />
        <button type="submit" className="btn btn-danger text-center">Enviar</button>
      </div>     
    </>
  )
}
