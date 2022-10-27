import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'


const Navbar = () => {
  return (
    <div className=' banner'>
      {/* <nav className="container navbar navbar-expand-lg nav-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"  >COFFEE CAFE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-grid gap-3" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pl-4">

              <Link to="/" className="nav-link">Home</Link>

              <Link to="/about" className="nav-link">About</Link>

              <Link to="/menu" className="nav-link">Menu</Link>

              <Link to="/pricing" className="nav-link">Pricing</Link>

              <Link to="/contact" className="nav-link">Contact</Link>

            </ul>

          </div>
        </div>
      </nav> */}
      <Nav/>
      <Home/>
     
</div>
  )
}

export default Navbar