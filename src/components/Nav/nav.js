import React from 'react'
import logo from '../../asset/images/logo-white.png'
import './nav.css'
import {Link} from 'react-router-dom'

export default function nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light color">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <Link to='/'><img src={logo} alt="logo" className="logo" /> </Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto  navbar-nav-scroll" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Booking
          </a>
          <ul className="dropdown-menu menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="/book_a_seat">book_a_seat</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/hire_car">hire_car</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">FAQs</a>
        </li>
      </ul>
      <div className="d-flex">
        <button type="button" className="btn btn-danger reg"> <Link to="/signup">Signup </Link></button>
        <button type="button" className="btn btn-primary"> <Link to="/login">Log in</Link></button>
      </div>
   
    </div>
  </div>
</nav>
      //   <nav className="navbar navbar-expand-lg navbar-light color">
      //   <div className="container-fluid">
      //     <div className="navbar-brand"> </div>
      //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //       <div className="navbar-nav">
      //         <a className="nav-link active" aria-current="page" href="/">Home</a>
      //         <a className="nav-link" href="/about">Features</a>
      //         <li class="nav-item dropdown">
      //     <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      //       Link
      //     </a>
      //     </li>
      //     <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
      //       <li><a class="dropdown-item" href="#">Action</a></li>
      //       <li><a class="dropdown-item" href="#">Another action</a></li>
      //       <li><hr class="dropdown-divider"/></li>
      //       <li><a class="dropdown-item" href="#">Something else here</a></li>
      //     </ul>
           
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    )
}
