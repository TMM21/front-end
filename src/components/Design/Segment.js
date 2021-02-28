import React, {useRef} from 'react'
import gsap from 'gsap'
import {useIntersection} from 'react-use'



function Segment() {

    let logo = useRef(null)
   
    const intersection = useIntersection(logo, {
        root:null,
        rootMargin:"0px",
        threshold:.1
    })
  
    const fadeOUT = (element) =>{
        gsap.to(element,2 , {
            opacity:0,
            y:-20,
            ease:'power4.out'         
        

        })
            
    }
    const fadeIn = (element) => {
       
        gsap.to(element, 2, {
            opacity:1,
            y:-60,
            ease:'power4.out',
            stagger:{
                amount:0.3
            }
        })
    }

    intersection && intersection.intersectionRatio < 0.1
     ?      fadeOUT(".fadeIn")    :    fadeIn(".fadeIn");
   
 
  
    return (     <>
       <h1 className="display-5 text-center mt-3 mb-5 lead">Popular Terminals</h1>
        <div className="fadeIn" ref={logo}>

           <div className="container-fluid" >
               <div className="row ">
                   <div className="col-md-3 col-sm-6  col-xs-10">
                    <div className="card mt-5" style={{width:"18rem"}}>
                        <img src="..." className="card-img-top " alt="" />
                        <div className="card-body ">
                            <h5 className="card-title  " > Lorem djhwbwwdcdcjkwdcwnkwcwwdcnwdkcjdncckdcdkcc
                            cjwkncwwdkjscdsncdsckjdncdckvdcnckdcdckdc
                            cksdcsjdcnkdcnsdcsdcsdcs
                            sdjcnsdcsdcdklcsdckdc
                            sdjcksdvnsdvcksdcsndvsdvskdvdvksvv</h5>
                        </div>
                    </div>
                   </div>
                   <div className="col-md-3 col-sm-6 col-xs-10 ">
                       <div className="  card mt-5" style={{width:"18rem"}}   >
                        <img src="..." className="card-img-top " alt="" />
                        <div className="card-body ">
                            <h5 className="card-title  " > Lorem djhwbwwdcdcjkwdcwnkwcwwdcnwdkcjdncckdcdkcc
                            cjwkncwwdkjscdsncdsckjdncdckvdcnckdcdckdc
                            cksdcsjdcnkdcnsdcsdcsdcs
                            sdjcnsdcsdcdklcsdckdc
                            sdjcksdvnsdvcksdcsndvsdvskdvdvksvv</h5>
                        </div>
                    </div>
                   </div>
                   <div className="col-md-3 col-sm-6 col-xs-10">
                   <div className="  card mt-5" style={{width:"18rem"}}   >
                        <img src="..." className="card-img-top " alt="" />
                        <div className="card-body ">
                            <h5 className="card-title  " > Lorem djhwbwwdcdcjkwdcwnkwcwwdcnwdkcjdncckdcdkcc
                            cjwkncwwdkjscdsncdsckjdncdckvdcnckdcdckdc
                            cksdcsjdcnkdcnsdcsdcsdcs
                            sdjcnsdcsdcdklcsdckdc
                            sdjcksdvnsdvcksdcsndvsdvskdvdvksvv</h5>
                        </div>
                    </div>
                   </div>
                   <div className="col-md-3 col-sm-6 col-xs-10">
                   <div className="  card mt-5" style={{width:"18rem"}}   >
                        <img src="..." className="card-img-top " alt="" />
                        <div className="card-body ">
                            <h5 className="card-title  " > Lorem djhwbwwdcdcjkwdcwnkwcwwdcnwdkcjdncckdcdkcc
                            cjwkncwwdkjscdsncdsckjdncdckvdcnckdcdckdc
                            cksdcsjdcnkdcnsdcsdcsdcs
                            sdjcnsdcsdcdklcsdckdc
                            sdjcksdvnsdvcksdcsndvsdvskdvdvksvv</h5>
                        </div>
                    </div>
                   </div>
            
           </div>
       </div>
                       </div>
       </>
    )
}

export default Segment
