import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

export default function Navigation() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to='/' className='left text-white ms-3 text-decoration-none'>
              🏠 Home
          </Link>
              </li>
              <li class="nav-item">
              <Link to="/Contact" className="text-white ms-3 text-decoration-none">
          📙 Contact
          </Link>
              </li>
              <li class="nav-item dropdown">
              </li>
              </ul>
            <div class="d-flex">
              <Link to="/Happy Cake " className=" text-white ms-3 text-decoration-none ">
                Happy Cake 🍰
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}