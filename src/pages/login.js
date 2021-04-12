import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function login() {
    return (
        <div className="container mt-5 ">
        <h1 className="lead text-center mb-3">Signup</h1>
    <div className="card form ">

    <div className="input-group has-validation ">
        <div className="row">
            
           
            <div className="col-12">

        <input type="tel" className="form-control mb-3 input" placeholder="Phone Number" aria-label="Username"></input>
            </div>
            <div className="col-12">

        <input type="password" className="form-control mb-3 input" placeholder="password" aria-label="Username"></input>
            </div>
          

        </div>
        

        
    </div>
    <Link to="/"><button type="button" className="btn btn-primary sub">Submit</button></Link>

      
    </div>
    </div>
    )
}

export default login
