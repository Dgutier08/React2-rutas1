import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

import Home from './views/Home';
import Contact from './views/Contact';
import Login from './views/Login';
import NotFound from "./views/NotFound";
//import Contact from "./views/Contact";

function App () {
  return (
    <div className='App'>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
