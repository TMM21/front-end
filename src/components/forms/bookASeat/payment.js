import React from 'react'
import { usePaystackPayment } from 'react-paystack'

export default function Payment({config}) {

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };
    
      // you can call this function anything
      const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }

    const initializePayment = usePaystackPayment(config)
    const handleSubmit = (e) => {
        e.preventDefault()
        initializePayment()
    }
  
    return (
       <button  className="btn btn-primary m-2" onClick={handleSubmit}>Pay Now</button>
    )
}
