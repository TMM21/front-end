import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import {  format, parseISO } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css";

export default class OneWayForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             DepartureTerminal:'',
             ArrivalTerminal:'',
             startDate:"",
             numberOfPassenger:''

        }
    }
    handleChange = ({target:{value}}) =>{
        this.setState({
            DepartureTerminal:value
        })

    }
    handleDate = (e) =>{
        const date = parseISO(format(e, 'yyyy-MM-dd'))
        this.setState({
            startDate:date
        })
    }
    
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-10">
                            <div className="column">
                                <div className="col-10">
                                    <p className="lead text">Travelling From :</p>
                                </div>
                                <div className="col-10">
                                <select className="form-select form-select-sm  select" aria-label=".form-select-sm example" onChange={this.handleChange}>
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
                                    <p className="lead text">Travelling To :</p>
                                </div>
                                <div className="col-10">
                                <select className="form-select form-select-sm  select" aria-label=".form-select-sm example" onChange={this.handleSubmit}>
                                       <option defaultValue>Arrival Terminal</option>
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
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-10">
                            <div className="column">
                                <div className="col-10">
                                    <p className="lead text">Departure Date</p>
                                </div>
                                <div className="col-10">
                                    <DatePicker 
                                     className="date-input"
                                     placeholderText="Departure Date" 
                                     selected={this.state.startDate} 
                                     
                                      onChange={this.handleDate}/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-sm-10 mt-md-4 proceed">

                        <button className="btn btn-primary mt-sm-2">Proceed</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
