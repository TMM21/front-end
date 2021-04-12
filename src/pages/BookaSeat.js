import React, { Component } from 'react'
import Background from '../components/Nav/Background'
import Home from '../components/booking/BookASeat/Home'
import Feedback from '../components/Design/Feedback'
import Footer from '../components/Design/Footer'
import axios from 'axios'

export default class BookASeat extends Component {

    componentDidMount(){
        axios.get('/terminals')
        .then(res =>console.log(res))
        .catch(err =>console.log(err))

    }
    render() {
        return (
            <>
                <Background />
                <div className="container-fluid ">
                    <div className="main">
                      
                        

                    </div>

                </div>
                        <Home />
                        <div className="space"></div>
                        <Feedback />
                        <Footer />
            
            </>
          
        )
    }
}
