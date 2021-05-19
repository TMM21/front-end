import React, { Component } from 'react'
import car from '../../../asset/images/car.jpg'
import './style.css'
import DatePicker from 'react-datepicker'
import { format, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Seats from '../../../asset/images/seat.png'

class OnewayResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departureTerminal: '',
      startDate: new Date(),
      min: new Date().setDate(new Date().getDate() + 1),
      max: new Date().setDate(new Date().getDate() + 7),
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
    }
  }

  handleSubmit = ({ target: { value } }) => {
    this.setState({
      departureTerminal: value,
    })
  }
  handleDate = (e) => {
    const date = parseISO(format(e, 'yyyy-MM-dd'))
    this.setState({
      startDate: date,
    })

    // console.log(format(e, 'yyyy-MM-dd'))
  }
  One = () => {
    this.setState({
      one: !this.state.one,
    })
  }
  two = () => {
    this.setState({
      two: !this.state.two,
    })
  }
  three = () => {
    this.setState({
      three: !this.state.three,
    })
  }
  four = () => {
    this.setState({
      four: !this.state.four,
    })
  }
  five = () => {
    this.setState({
      five: !this.state.five,
    })
  }
  six = () => {
    this.setState({
      six: !this.state.six,
    })
  }
  componentDidMount = () => {
    const trips = this.props.data
    if (trips.length <= 0) {
      this.props.history.push('/')
    }
  }

  render() {
    const { two, one, three, four, five, six } = this.state
    const result = this.props.data.map((item) => {
      const { route, seat } = item
      console.log(route)
      return (
        <div className="row mb-2" key={item.id}>
          <div className="col-md-2 col-sm-4 mb-3">
            {
              (item.type.seatNumber = 5 ? (
                <img className="car " alt="car" src={car} />
              ) : (
                'hello'
              ))
            }
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="row">
              <div className="col-7">
                <p className="lead bold type">SIENNA</p>
                <p className="lead route">
                  {route.Terminal} To {route.route}
                </p>
                <div>
                  <span className="badge bg-primary ac">A/C</span>
                  <span className="badge bg-success">Pick-up Location</span>
                </div>
              </div>
              <div className="col-5">
                <p className="lead bold type">Departing</p>
                <p className="lead route">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  {item.schedule}
                </p>
              </div>
              <div className="col-6">
                <img src={Seats} className="seat mt-3" alt="seat" />
                <span className="">{seat.length} seat(s) available</span>
              </div>
              <div className="col-6">
                <p className="lead bold price">
                  {' '}
                  Price : &#x20a6; {item.price}
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  View Seats{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 mt-4">
            <>
              {result}
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">gello</div>
                  <div className="modal-footer">hello</div>
                </div>
              </div>
            </>
          </div>
          <div className="col-md-4 col-sm-12">
            <button type="button" className="btn btn-primary mt-3" disabled>
              Search Details
            </button>
            <br />
            <label for="departureTerminal" className="form-label">
              Departure Terminal :
            </label>
            <select
              className="form-select form-select-sm mb-4 mt-2"
              id="departureTerminal"
              aria-label="Default select example"
            >
              <option selected>terminal</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label for="arrivalTerminal" className="form-labrl">
              arrival Terminal
            </label>
            <select
              className="form-select form-select-sm mb-4"
              id="arrivalTerminal"
              aria-label="Default select example"
            >
              <option selected>route</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              className="form-select form-select-sm mb-4"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <DatePicker
              className="date mb-4"
              placeholderText="Departure Date"
              selected={this.state.startDate}
              minDate={this.state.startDate}
              maxDate={this.state.max}
              onChange={this.handleDate}
            />
            <div>
              <button type="button" className="btn btn-primary">
                {' '}
                <Link to="/book_a_seat/one_way">Modify Search</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data.trips,
})
const mapActionsToProps = {}
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(withRouter(OnewayResult))

/* 

  {' '}
  <MdAirlineSeatReclineNormal /> {seat.length} Seats Available{' '}
  <span
    type="button"
    className="btn btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    View Seats{' '}
  </span>
</p>
<p className="lead mt-1  bold">
  Price: <strong className="lead"> {price}</strong>{' '}
</p>
</div>
<div
className="modal fade"
id="exampleModal"
tabIndex="-1"
aria-labelledby="exampleModalLabel"
aria-hidden="true"
>
<div className="modal-dialog modal-dialog-centered ">
  <div className="modal-content">
    <div className="modal-header">
    
      <div className="one">
        <MdAirlineSeatReclineNormal size="30" color="blue" />
      </div>
      <div className="two">
        <MdAirlineSeatReclineNormal
          color={two ? 'grey' : 'blue'}
          size="30"
          onClick={this.two}
        />
      </div>
      <div className="three">
        <MdAirlineSeatReclineNormal
          color={three ? 'grey' : 'blue'}
          size="30"
          onClick={this.three}
        />
      </div>
      <div className="four">
        <MdAirlineSeatReclineNormal size="30" color="blue" />
      </div>
      <div className="five">
        <MdAirlineSeatReclineNormal size="30" color="blue" />
      </div>
      <div className="six">
        <MdAirlineSeatReclineNormal size="30" color="blue" />
      </div>
    </div>

    <div className="modal-footer">
      <div className="icon">
        <MdAirlineSeatReclineNormal size="20" color="blue" /> :{' '}
        <span className="lead">Not Selected</span>
      </div>
      <div className="icon">
        <MdAirlineSeatReclineNormal size="20" color="grey" /> :{' '}
        <span className="lead">Selected</span>
      </div>
      <div className="icons">
        <MdAirlineSeatReclineNormal size="20" color="green" /> :{' '}
        <span className="lead">Booked</span>
      </div>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <a
        href="/book_a_seat/one_Way/passenger_details"
        type="button"
        className="btn btn-primary"
      >
        Next
      </a>
    </div>
  </div>
</div>
</div>
</div>*/
