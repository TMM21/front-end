import React, { Component } from 'react'
import Background from '../components/Nav/Background'
import PassengerDetails from '../components/forms/bookASeat/PassengerDetails'
import Sidebar from '../components/forms/bookASeat/sidebar'

export default class booking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Background />
                <div className="container ">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 mt-3">
                            <div className="card bg-light">
                                <PassengerDetails />
                               

                            </div>
                        
                         
                        </div>
                        <div className="col-md-4 col-sm-12 ">
                           <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
