import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>  (
        <Fragment>
           <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/page' className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/login' className="nav-link active" href="#">login</Link>
                </li>
                <li className="nav-item">
                  <Link to='/signup' className="nav-link active" href="#">signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
</Fragment>
)
export default Navbar