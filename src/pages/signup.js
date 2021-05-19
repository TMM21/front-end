import React, {Component} from 'react'
import './style.css'
import {Link} from 'react-router-dom' 
import PropTypes from 'prop-types'
//Redux

import  {connect} from 'react-redux'
import {createUser} from '../redux/action/userAction'

class Signup extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:"",
             email:"",
             phoneNumber:"",
             password:"",
             confirmPassword:"",
             error:"",
             open:true,
             loading:false
        }
    }

    handleChange = event => {
      
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
        console.log(`this is name ${name} this is value ${value}`);      
        
    }
    handleSubmit = (e) =>{
    e.preventDefault();
    console.log("hello");
const {fullName,email,phoneNumber,password,confirmPassword} = this.state
 console.log(fullName)
// console.log(this.state)

        if(fullName==="" || email==="" || phoneNumber===""|| password==="" || confirmPassword==="" ){
            this.setState({
                error:"No field must be empty"
            })
            return
          
        }
        if(password !== confirmPassword){
            this.setState({
                error:"password and confirm password does not match"
            })
            return
        }
        const userData = {
            name:fullName,
            email,
            phoneNumber,
            password,
            gender:"male",
            role:"customer"
        
        }
        this.props.createUser(userData, this.props.history)
     
    }
    handleClose = () =>{
        this.setState({
           open:false
        })
      window.location.reload();
    }
    render(){
        const {error, open} = this.state
     const {UI: {loading}} = this.props
 
        return (
            <div className="container mt-5 ">

             {error!== "" ? ( open && <div className="alert alert-danger"><span> {error} </span> <Link to="/signup"><span className="click"  onClick={this.handleClose}> x </span></Link></div>) : ""}
              

            <h1 className="lead text-center mb-3">Signup</h1>

            <form onSubmit={this.handleSubmit}>

        <div className="card form ">

           


        <div className="input-group has-validation " >
            <div className="row">
                <div className="col-12">

            <input type="text" onChange={this.handleChange} className="form-control mb-3 input" name="fullName" placeholder="FullName" aria-label="Username"></input>
                </div>
                <div className="col-12">

            <input type="email" onChange={this.handleChange} className="form-control mb-3 input" name="email" placeholder="Email" aria-label="Email"></input>
                </div>
                <div className="col-12">

            <input type="tel" onChange={this.handleChange} className="form-control mb-3 input" name="phoneNumber" placeholder="Phone Number" aria-label="PhoneNumber"></input>
                </div>
                <div className="col-12">

            <input type="password" onChange={this.handleChange} className="form-control mb-3 input" name="password" placeholder="password" aria-label="Password"></input>
                </div>
                <div className="col-12">

            <input type="password" onChange={this.handleChange}className="form-control mb-3 input" name="confirmPassword" placeholder="Confirm Password" aria-label="Confirm password"></input>
                </div>

            </div>
        <button type="submit"  className="btn btn-primary sub" > SignUp</button>
        </div>

      
          
        </div>
            </form>
        </div>
        )
            

        
    }
}
Signup.propTypes ={
    createUser:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    UI:PropTypes.object.isRequired

}


const mapStateToProps = state =>({
    user:state.user,
    UI:state.UI
})
const mapActionToProps = {
    createUser
}
export default connect(mapStateToProps,mapActionToProps)(Signup)
