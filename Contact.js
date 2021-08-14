import React from 'react'
import Logo from './images/logo.png'
import { Link } from 'react-router-dom'
import app from "./firebase/config";

 const Contact = () => {
    return (
       
      <div>
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand"><img src={Logo} className="logo-size" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <Link to='/home' className="dsm-6">Home</Link>
            <Link to='/' className="dsm-5">Galerie</Link>
            <Link to='/contact' className="dsm-4">Contact</Link>
            <Link to='login' onClick={() => app.auth().signOut()} class="btn-gale">SignOut</Link>
          </div></nav>
      </div>
      <div>
        <section className="contact">
          <div className="container">
            <div className="row">
              <div className="col">
                <span><p className="yell">Contact me</p>
                  <h1 className="fix-contact">How Can I help You ?</h1></span>
                <p className="bi"><i className="fas fa-check fa-2x" />
                  <span className="spa1"> +9181718759</span> </p>
                <p className="bo"><i className="fas fa-check fa-2x" />
                  <span className="spa2"> zighedimen921@gmail.com </span></p>
                <p><i className="fas fa-check fa-2x" />
                  <span className="spa3"> ImenZighed </span></p>
              </div>
              <div className="col">
                <div className="card cards ">
                  <div className="card-body">
                    <div className="mb-3">
                      <input type="text" className="form-control padd" id="exampleFormControlInput1" placeholder="Name" />
                      <input type="email" className="form-control padd2" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control padd8" id="exampleFormControlTextarea1" placeholder="Message" rows={3} defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
            </div></div></section>
        <div className="card card2 ">
          <div className="card-body">
            <p className="text"> <a href="#" className="btn "><i className="fas fa-envelope" /> </a>Join the newsletter and read the new posts first<button className="eml-btn">Email</button><button className="sub-btn">Subscribe</button></p>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Contact
