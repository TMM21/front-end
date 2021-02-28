import React from 'react'
import FeedbackForm from '../forms/FeedbackForm'

export default function Feedback() {
    return (
        <div className="container-fluid feed">
            <div className="container">

            <div className="row">
                <div className="col-md-4 ">
                    <h3 className="lead mb-3 mt-5 bold ">Feedback</h3>
                    <FeedbackForm />

                </div>
                <div className="col-md-4 mr-2 text-center ">
                    <h3 className="lead mb-3 mt-5 bold">Terms</h3>
                   <p className="lead" href="#">Privacy policy</p>
                   <p href="#" className="lead">Terms & Condition </p>
                </div>
                <div className="col-md-4 col-sm-4 text-center">
                    <h3 className="lead mb-3 mt-5 bold">Connect with us</h3>
                    <div className="connect">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                        
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
