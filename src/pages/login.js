// import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
// import './style.css'

// class login extends Component() {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          phoneNumber:"",
    //          password:""
    //     }
    // }
    // handleChange = event =>{
    //     const name = event.target.name;
    //     const value = event.target.value
    //     this.setState({
    //         [name]:value
    //     })
    // }
    
//     render(){
//         console.log(this.state)
//         return (
//             <div>hello</div>
//         )

  
   
//     }
// };


// export default login

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             phoneNumber:"",
             password:"",
             error:"",
             open:true,
             loading:false,
        }
    }
    handleChange = event =>{
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const {password,phoneNumber} = this.state
        if(password === "" || phoneNumber === ""){
            this.setState({
                error:"No field must be empty"
            })
            return

        }

        console.log(password, phoneNumber,"hello")
    }
    handleClose = () =>{
        this.setState({
            open:false
        })
        window.location.reload()
    }
    render() {
       
        const{error,open} = this.state
  
        return (
            <div className="container mt-5 ">
                {error!== "" ? ( open && <div className="alert alert-danger"><span> {error} </span> <Link to="/login"><span className="click"  onClick={this.handleClose}> x </span></Link></div>) : ""}
            <h1 className="lead text-center mb-3">Login</h1>
        <div className="card form ">
            <form onSubmit={this.handleSubmit}>

    
        <div className="input-group has-validation ">
            <div className="row">
                
               
                <div className="col-12">
    
            <input type="tel" name="phoneNumber" className="form-control mb-3 input" onChange={this.handleChange} placeholder="Phone Number" aria-label="Username"></input>
                </div>
                <div className="col-12">
    
            <input type="password"  name="password" className="form-control mb-3 input" onChange={this.handleChange}  placeholder="password" aria-label="Username"></input>
                </div>
              
    
            </div>
            
    
            
        </div>
       <button type="submit" className="btn btn-primary sub">Submit</button>
    
          
            </form>
        </div>
        </div>
        )
    }
}
