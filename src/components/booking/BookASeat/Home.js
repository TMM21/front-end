import React, { Component } from 'react'
import OneWay from './oneWay'
import RoundTrip from './RoundTrip'
import '../style.css'

export default class Home extends Component {
    render() {
        return (
            <>        
            <ul className="nav nav-pills mb-3 link" id="pills-tab" role="tablist">
            
                        <li className="nav-item list" role="presentation">
                  <button className="nav-link active button" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-homes" type="button" role="tab" aria-controls="pills-homes" aria-selected="true">One_way</button>
              </li>

                      
                      
                        <li className="nav-item list" role="presentation">
                 <button className="nav-link button" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profiles" type="button" role="tab" aria-controls="pills-profiles" aria-selected="false">Round_trip</button>
              </li> 

                     


              
             
               
            </ul>
            <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-homes" role="tabpanel" aria-labelledby="pills-home-tab"><OneWay /></div>
      <div className="tab-pane fade" id="pills-profiles" role="tabpanel" aria-labelledby="pills-profile-tab"><RoundTrip /></div>
     
    </div>
            
            </>
        )
    }
}
