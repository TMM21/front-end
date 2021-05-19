import React from 'react'

function FeedbackForm() {
    return (
        <form>
        <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control input" placeholder="Enter Name" aria-label="Enter Name" aria-describedby="basic-addon1" />
            <input type="email" className="form-control" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon1" />
       </div>
       <div className="input-group input-group-sm mt-2">
           <input type="text" className="form-control" placeholder="title" />
       </div>
       <div className="input-group input-group-sm mt-2">
           <textarea className="form-control" rows="3" />
       </div>

       <button type="button" className="btn btn-primary mt-2 but">Submit</button>
       </form>

    )
}

export default FeedbackForm
