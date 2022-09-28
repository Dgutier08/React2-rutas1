import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

export default function Navigation () {
  return (
    <>
      <Navbar bg='danger' variant='light'>
        <Container className='justify-content-start'>
          <Navbar.Brand></Navbar.Brand>
          {/* Links */}
          <span class="navbar-text">
          <Link to='/' className='left text-white ms-3 text-decoration-none'>
            Home
          </Link>
          <Link to="/Contact" className="text-white ms-3 text-decoration-none">
          📙 Contact
          </Link>
          <Link to="/Happy Cake " className=" text-white ms-3 text-decoration-none ">
             Happy Cake 🍰
          </Link>
              </span>
        </Container>
      </Navbar>
    </>
  )
}
