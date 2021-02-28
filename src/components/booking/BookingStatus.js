import React, { Component } from 'react'

export default class BookingStatus extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-8">
                        <p className="lead text mb-md-2">Check Booking status</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-10">
                    <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Ref Code" aria-label="Username" aria-describedby="addon-wrapping" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-10 check">
                        <button className="btn btn-primary ml-md-2 lead mt-sm-2 status">Check Status</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
