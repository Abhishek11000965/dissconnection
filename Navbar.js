import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Disconnection Monitoring Tool : </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">JE Login </Link>
      </li>
       {/* <li className="nav-item">
        <Link className="nav-link" to="/Lineman">Create Lineman</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/DelLineman">Delete Lineman</Link>
      </li>     
      <li className="nav-item">
        <Link className="nav-link" to="/Welcome">Welcome Page </Link>
      </li>     */}
     
     
    </ul>
  
  </div>
</nav>
  )
}

export default Navbar