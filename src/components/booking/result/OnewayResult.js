import React, { Component } from 'react'
import car from '../../../asset/images/car.jpg'
import './style.css'
import DatePicker from "react-datepicker";
import {  format, parseISO } from 'date-fns'
import {Link} from 'react-router-dom'
import {MdAirlineSeatReclineNormal} from 'react-icons/md'



export default class OnewayResult extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             departureTerminal:"",
             startDate:new Date(),
             min:new Date().setDate(new Date().getDate() +1),
             max:new Date().setDate(new Date().getDate() +7)
        }
    }

    handleSubmit = ({target:{value}}) =>{
        this.setState({
            departureTerminal:value
           
        })
    }
    handleDate = (e) =>{
        const date = parseISO(format(e, 'yyyy-MM-dd'))
        this.setState({
            startDate:date
        })

        // console.log(format(e, 'yyyy-MM-dd'))
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 mt-4">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                            <img src={car} className="card-img-top" alt="car" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <p className="lead mt-1 bold text-center">  Sienna </p>
                                <p className="lead text-center">Lagos (Sangotedo) to Abuja (Mararba)</p>
                                <p className="lead mt-1 bold text-center"> Departing : <i className="fa fa-clock-o" aria-hidden="true"></i>  6:00 Am</p>
                                <p className="lead mt-1 text-center"> <MdAirlineSeatReclineNormal  /> 5 Seats Available <span type="button" className="btn btn-danger">View Seats</span></p>
                               <p className="lead mt-1  bold">Price: <strong className="lead"> #12500</strong> </p>
                      </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <button type="button" className="btn btn-primary mt-3" disabled>Search Details</button>
                      
                        <select className="form-select form-select-sm mb-4 mt-2" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                       </select>
                        <select className="form-select form-select-sm mb-4" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                       </select>
                        <select className="form-select form-select-sm mb-4" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                       </select>
                       <DatePicker
                              className="date mb-4"
                               placeholderText="Departure Date" 
                               selected={this.state.startDate} 
                               minDate={this.state.startDate}
                               maxDate={this.state.max}
                                onChange={this.handleDate}/>
                                <div>

                        <button type="button" className="btn btn-primary"> <Link to="/book_a_seat/one_way">Modify Search</Link></button>
                                </div>
                            
                       
                    </div>
                </div>
                
            </div>
        )
    }
}
