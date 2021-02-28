import React, { Component } from 'react'
import '../style.css'
import DatePicker from "react-datepicker";
import {  format, parseISO } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css";

export default class RoundTrip extends Component {
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
        console.log(new Date(this.state.startDate));
        return (
            <>
            <div className="container-fluid">
                <div className="row mb-md-5">
                    <div className="col-md-6 col-sm-10">
                        <div className="column">
                            <div className="col-10">
                                <p className="lead text">Travelling From: </p>
                            </div>
                            <div className="col-10">
                            <select className="form-select form-select-sm  select" aria-label=".form-select-sm example" onChange={this.handleSubmit}>
                                       <option defaultValue>Departure Terminal</option>
                                           <option value="1">One</option>
                                                 <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                      <option value="3">Three</option>
                                                        <option value="3">Three</option>
                                                            <option value="3">Three</option>
                                                                <option value="3">Three</option>
                                                                   <option value="3">Three</option>
                                                                          <option value="3">Three</option>
                                                                   </select>
                                                                 </div>
                                                              </div>
                                                         </div>
                      <div className="col-md-6 col-sm-10">
                          <div className="column">
                              <div className="col-10">
                                  <p className="lead text">Travelling To: </p>
                              </div>
                              <div className="col-6">
                              <select className="form-select form-select-sm depart" aria-label=".form-select-sm example">
                             <option defaultValue>Arrival Terminal</option>
                                  <option value="1">One</option>
                                     <option value="2">Two</option>
                                        <option value="3">Three</option>
                            </select>
                              </div>
                          </div>
                      </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="column">
                            <div className="col-10">
                                <p className="lead text">Departure Date</p>
                            </div>
                            <div className="col-10">
                            <DatePicker
                              className="date-input"
                               placeholderText="Departure Date" 
                               selected={this.state.startDate} 
                               minDate={this.state.startDate}
                               maxDate={this.state.max}
                                onChange={this.handleDate}/>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-md-3 col-sm-6">
                        <div className="column">
                            <div className="col-10">
                                <p className="lead text">Return Date</p>
                            </div>
                            <div className="col-10">
                            <DatePicker
                              className="date-input"
                               placeholderText="Departure Date" 
                               selected={this.state.startDate} 
                               minDate={this.state.startDate}
                               maxDate={this.state.max}
                                onChange={this.handleDate}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <button className="btn btn-primary mt-4">Proceed</button>
                    </div>
                </div>
            </div>
          
            </>
        )
    }
}
