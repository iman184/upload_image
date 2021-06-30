import React from 'react'
import app from "./firebase/config";
import { Link } from 'react-router-dom'

 const Contact = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/' className="nav-link active" aria-current="page" href="#">Galerie</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact' className="nav-link active" aria-current="page" href="#">Contact</Link>
                </li>
                <li className="nav-item">
                <Link to='login' onClick={() => app.auth().signOut()}>Sign out</Link>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
        <h1>Contact</h1>
        </div>
    )
}
export default Contact
