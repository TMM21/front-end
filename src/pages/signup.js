import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function signup() {
    return (
        <div className="container mt-5 ">
            <h1 className="lead text-center mb-3">Signup</h1>
        <div className="card form ">

        <div className="input-group has-validation ">
            <div className="row">
                <div className="col-12">

            <input type="text" className="form-control mb-3 input " placeholder="FullName" aria-label="Username"></input>
                </div>
                <div className="col-12">

            <input type="email" className="form-control mb-3 input" placeholder="Email" aria-label="Username"></input>
                </div>
                <div className="col-12">

            <input type="tel" className="form-control mb-3 input" placeholder="Phone Number" aria-label="Username"></input>
                </div>
                <div className="col-12">

            <input type="password" className="form-control mb-3 input" placeholder="password" aria-label="Username"></input>
                </div>
                <div className="col-12">

            <input type="password" className="form-control mb-3 input" placeholder="Confirm Password" aria-label="Username"></input>
                </div>

            </div>
        <Link to="/"><button type="button" className="btn btn-primary sub">Submit</button></Link>
        </div>

          
        </div>
        </div>
    )
}

export default signup
