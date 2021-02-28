import React from 'react'
import card from '../../asset/images/card.jpg'
import stop from '../../asset/images/stop.jpg'
import ussd from '../../asset/images/ussd.png'

export default function Article() {
    return (
       <div className="card Card">
           <h3 className="text-center display-6">Payment Options</h3>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4 col-sm-12 sect">
                   <img src={card} className="card-img-top card-img" alt="card" />
                   <div className="text">
                       <p className="lead mb-1 bold">Card Payment</p>
                       <p className="lead text">We accept instant payment using master card, visa card, verve card</p>
                   </div>
                  </div>
                  <div className="col-md-4 col-sm-12 sect">
                  <img src={ussd} className="card-img-top card-img" alt="ussd" />
                  <div className="text">
                      <p className="lead mb-1 bold">USSD</p>
                      <p className="lead text">For quick and easy payments we also accept ussd mode of payment</p>
                  </div>
                  </div>
                  <div className="col-md-4 col-sm-12 sect ">
                    <img src={stop} className="card-img-top card-img" alt="warning" />
                    <div className="text">
                        <p className="lead mb-1 bold">WARNING</p>
                        <p className="lead text card-title">Do not make payment to individuals only book at our website or terminal</p>
                    </div>
                  </div>
              </div>
          </div>
       </div>
            )
        }
        
        // <div className="container-fluid">
        // <div className="card sec ">
        //     <div className="card-body">
        //         <h1 className="card-title text-center">Payment Options</h1>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-4 col-sm-12">
        //             <div className="row">
        //                 <div className="col-md-6 col-sm-4">
        //                 <img className="card-img-top card-img" src={card} alt="card" />
        //                 </div>
        //                 <div className="col-md-6 col-sm-4">
        //                     <div className="column">
        //                         <div className="col-md-12 col-sm-12">
        //                             <p className="card-title text mb-1">Card Payments</p>
        //                         </div>
        //                         <div className="col-md-12 col-sm-12">
        //                             <p className="card-title small">We accept instant payment using master card, visa card, verve card</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-4 col-sm-12">
        //             <div className="row">
        //                 <div className="col-md-6 col-sm-5">
        //                     <img className="card-img-top card-img" src={ussd} alt="ussd" />
        //                 </div>
        //                 <div className="col-md-6 col-sm-4">
        //                     <div className="column">
        //                         <div className="col-md-12">
        //                             <p className="lead text mb-1">USSD</p>

        //                         </div>
        //                         <div className="col-md-12">
        //                             <p className="lead"> For quick and easy payments we also accept USSD mode of payment</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-4 col-sm-12">
        //             <div className="row">
        //                 <div className="col-md-5 col-sm-5">
        //                     <img className="card-img-top card-img" src={stop} alt="stop" />
        //                 </div>
        //                 <div className="col-md-1 col-sm-2"></div>
        //                 <div className="col-md-5 col-sm-4">
        //                     <div className="column">
        //                         <div className="col-12">
        //                             <p className="lead text">WARNING</p>
        //                         </div>
        //                         <div className="col-12">

        //                         <p className="lead">Do not make payment to personnel, only book at our website or terminal </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
            {/* <div className="card-body">
                <h1 className="card-title text-center">Payment Options</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-10">
                        <div className="row">
                            <div className="col-md-5">
                               <img src={card} className="card-img-top mt-4 card-img" alt="card" />
                            </div>
                            <div className="col-md-5">
                             <div className="column">
                                 <div className="col-md-12">
                                     <div className="card-body">
                                         <p className="lead card-title">Card Payment</p>
                                     </div>
                                 </div>
                                 <div className="col-md-12">
                                     <p className="lead mt-0">We accept instant payment using master card, visa card, verve card</p>
                                 </div>
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-10"></div>
                    <div className="col-md-4 col-sm-10"></div>
                </div>
            </div>
          */}

        //     </div>
            
        // </div>

