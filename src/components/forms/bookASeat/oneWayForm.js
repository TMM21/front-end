import React, { Component } from 'react'
import '../style.css'
import DatePicker from "react-datepicker";
import {  format, parseISO } from 'date-fns'
import {Link} from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";

export default class oneWayForm extends Component {
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
                <div className="row">
                    <div className="col-md-6 col-sm-11">
                       <div className="column">
                           <div className="col-10">
                             <p className="lead text"> Travelling From:</p>
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
                                                     <div className="col-md-6 col-sm-11">
                                                 <div className="column">
                                             <div className="col-6">
                                        <p className="lead text">Travvelling To :</p>
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
            </div>
              <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="column">
                            <div className="col-10">
                                 <p className="lead text mb-1">Departure Date</p>

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
                                <p className="lead text mt-2 mb-2"> No Of Travellers</p>
                            </div>
                               <div className="col-10">
                                   <select className="form-select form-select-sm  passenger" aria-label=".form-select-sm example">
                                    <option defaultValue>No Of Traveller(s)</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>
              </select>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="col-10 mb-3"></div>
                           <div className="col-10">

                            <button type="button" className=" pro btn btn-primary button mt-4"> <Link to="book_a_seat/one_way">Proceed</Link> </button>
                            </div>
                           </div>
                </div>
            </div>
            {/* <div className="contain">
                <div>
                    <p className="text">Travelling from:</p>
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
              <p>Travelling </p>

            </div> */}
            {/* <div className="contain">

                
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
              
            
              <select className="form-select form-select-sm select" aria-label=".form-select-sm example">
                <option defaultValue>Arrival Terminal</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
      
            <div className="contain">
                <span>Departure Date</span>
                <DatePicker  className="date-input" placeholderText="Departure Date" selected={this.state.startDate} minDate={this.state.startDate} maxDate={this.state.max} onChange={this.handleDate}/>
                <select className="form-select form-select-sm passenger" aria-label=".form-select-sm example">
                <option defaultValue>No Of Traveller(s)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </select>
              

      </div> */}
            </>
        )
    }
}
