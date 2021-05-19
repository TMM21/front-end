import React, { Component } from 'react'
import card from '../../../asset/images/FlutterWaveLogo.png'
import Payment from './payment'


export default class PassengerDetails extends Component {
  
   
    render() {
        const config = {
            reference:Math.random(),
            email:"priceblings@gmail.com",
            amount:10000,
            publicKey:"pk_test_d8b15464638f89fcdfb8d554f6b9d68e075170ee"
        }
        return (
            <>
            <h1 className="lead text-center"> <span>  <i className="fa fa-users use"  aria-hidden="true"></i></span> Passenger Details</h1>
           
            <form className="detail">
                <input className="form-control form-control-sm m-4" type="text" placeholder="fullName" />
               
                <select class="form-select form-select-sm m-4" aria-label=".form-select-sm example">
  <option selected>Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
 
</select>
           

            <h1 className="lead text-center">Contact details and payment method</h1>

          
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <input className="form-control form-control-sm m-4" type="email" placeholder="Email Address" required />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <input className="form-control form-control-sm m-4" type="tel" placeholder="070 0000 0000" required/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <input type="text" className="form-control form-control-sm m-4" placeholder="Next of Kin Name" required />
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <input type="text" className="form-control form-control-sm m-4" placeholder="Next of Kin phone Number" required />

                    </div>
                </div>

                <Payment config={config} />
            </form>
                {/* <input type="button" className="btn btn-primary">Pay Now</input> */}

          

            </>
        )
    }
}
