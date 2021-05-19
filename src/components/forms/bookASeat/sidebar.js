import React, { Component } from 'react'
import '../style.css'

export default class sidebar extends Component {
    render() {
        return (
            <div className="card  mt-3 side">

              <h1 className="lead bold text-center m-2">Trip Summary</h1>
              <p className="lead loc bold text-center"> Lagos  (Sangotedo) To Abuja (Mararaba) </p>
              <p className="lead text-center bold"> May 12, 2021 by 06:30Am</p>
              <p className="lead text-center bold ">Sienna Seat [5]</p>
              <p className="lead pass bold text-center"> Passenger(s) 1  <span> #12500</span></p>
              <p className="bold text-center bold lead"> Total  #12500 </p>

            </div>
        )
    }
}
