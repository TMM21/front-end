import React, { Component } from 'react'
import car from '../../../asset/images/car.jpg'
import Bus from '../../../asset/bus.svg'
import './style.css'
import DatePicker from 'react-datepicker'
import { format, parseISO } from 'date-fns'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Seats from '../../../asset/images/seat.png'
import {
  getTerminal,
  getRoutes,
  getTrip,
  bookingDetails,
} from '../../../redux/action/dataAction'

class OnewayResult extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departureTerminal: '',
      startDate: new Date(),
      min: new Date().setDate(new Date().getDate() + 1),
      max: new Date().setDate(new Date().getDate() + 7),
      error: '',
      seat: [],
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

  componentDidMount() {
    if (this.props.data.length === 0) {
      this.props.history.push('/')
    } else {
      console.log('hello')
    }
    this.props.getTerminal()
  }
  //get list of terminal
  handleTerminal = ({ target }) => {
    const { terminal } = this.props.data
    const term = terminal.find((item) => {
      return item.id === target.value
    })

    this.setState({
      departureTerminal: term.name,
    })

    this.props.getRoutes(term)
  }
  //selecting of seat
  handleSeat = ({ id, seatNumber }) => {
    const { passenger } = this.props.info
    const { seat } = this.state
    const newSeat = seat.length + 1
    if (seat.length < passenger) {
      const isAvailable = seat.includes(id)
      if (isAvailable === true) {
        this.setState({
          seat: [...seat.filter((item) => item !== id)],
        })
      } else {
        this.setState({
          seat: [...seat, id],
        })
      }
      console.log(seat.length + 1, parseInt(passenger), newSeat)
    } else if (seat.length + 1 >= parseInt(passenger)) {
      console.log('true')
      const isAvailable = seat.includes(id)
      if (isAvailable === true) {
        this.setState({
          seat: [...seat.filter((item) => item !== id)],
        })
      }
    }
  }
  handleSubmit = async (id) => {
    const { travelDate, passenger } = this.props.info
    console.log(id)
    const { seat } = this.state
    if (seat.length <= 0) {
      this.setState({
        error: 'please pick a seat',
      })
    }

    const bookingInfo = {
      tripId: id,
      travelDate: travelDate,
      numberOfPassenger: passenger,
      seat: seat,
      profile: {},
      passenger: [],
      type: 'one_way',
      service: 'book_a_seat',
    }
    bookingDetails(bookingInfo, this.props.history)

    console.log(bookingInfo)
  }

  render() {
    const { routes, terminals, data } = this.props
    console.log(this.state.seat)

    // const { route } = routes[0]

    const arrival = routes.map((route) => {
      return (
        <option key={route.id}>{route.name === route ? '' : route.name}</option>
      )
    })

    const departure = terminals.map((term) => {
      return <option key={term.id}>{term.name}</option>
    })

    const result = data.map((item) => {
      const { route, seat, TripStatus } = item

      const seatOne = seat.find((item) => {
        return item.seatNumber === 1 && item.seatStatus === 'available'
      })
      const seatTwo = seat.find((item) => {
        return item.seatNumber === 2 && item.seatStatus === 'available'
      })
      const seatThree = seat.find((item) => {
        return item.seatNumber === 3 && item.seatStatus === 'available'
      })
      const seatFour = seat.find((item) => {
        return item.seatNumber === 4 && item.seatStatus === 'available'
      })
      const seatFive = seat.find((item) => {
        return item.seatNumber === 5 && item.seatStatus === 'available'
      })
      const seatSix = seat.find((item) => {
        return item.seatNumber === 6 && item.seatStatus === 'available'
      })
      const seatSeven = seat.find((item) => {
        return item.seatNumber === 7 && item.seatStatus === 'available'
      })

      return (
        TripStatus === 'available' && (
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
                  <img src={Seats} className="seat mt-3 book" alt="seat" />
                  <span className="">{seat.length} seat(s) available</span>
                </div>
                <div className="col-6">
                  <p className="lead bold price">
                    {' '}
                    Price : &#x20a6; {item.price}
                  </p>
                  <div
                    class="modal fade "
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            <span>
                              {' '}
                              Available :{' '}
                              <img
                                src={Seats}
                                className="seat available"
                                alt="seat"
                              />
                            </span>
                            <span>
                              Selected :{' '}
                              <img
                                src={Seats}
                                className="seat selected"
                                alt="seat"
                              />
                            </span>
                            <span>
                              {' '}
                              Booked
                              <img
                                src={Seats}
                                className="seat booked"
                                alt="seat"
                              />
                            </span>
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img src={Bus} alt="bus" />
                          <div className="one">
                            {seatOne ? (
                              <img
                                src={Seats}
                                className={
                                  this.state.seat.includes(seatOne.id)
                                    ? 'seat selected'
                                    : 'seat available'
                                }
                                alt="seat"
                                onClick={() => this.handleSeat(seatOne)}
                              />
                            ) : (
                              <img
                                src={Seats}
                                className="seat booked"
                                alt="seat"
                              />
                            )}
                          </div>
                          <div className="two">
                            {seatTwo ? (
                              <img
                                src={Seats}
                                className={
                                  this.state.seat.includes(seatTwo.id)
                                    ? 'seat selected'
                                    : 'seat available'
                                }
                                alt="seat"
                                onClick={() => this.handleSeat(seatTwo)}
                              />
                            ) : (
                              <img
                                src={Seats}
                                className="seat booked"
                                alt="seat"
                              />
                            )}
                          </div>
                          <div className="three">
                            {seatThree ? (
                              <img
                                src={Seats}
                                className={
                                  this.state.seat.includes(seatThree.id)
                                    ? 'seat selected'
                                    : 'seat available'
                                }
                                alt="seat"
                                onClick={() => this.handleSeat(seatThree)}
                              />
                            ) : (
                              <img
                                src={Seats}
                                className="seat booked"
                                alt="seat"
                              />
                            )}
                          </div>
                          <div className="four">
                            {seatFour ? (
                              <img
                                src={Seats}
                                className={
                                  this.state.seat.includes(seatFour.id)
                                    ? 'seat selected'
                                    : 'seat available'
                                }
                                alt="seat"
                                onClick={() => this.handleSeat(seatFour)}
                              />
                            ) : (
                              <img
                                src={Seats}
                                className="seat booked"
                                alt="seat"
                              />
                            )}
                          </div>
                          <div className="five">
                            {seatFive ? (
                              <img
                                src={Seats}
                                className={
                                  this.state.seat.includes(seatFive.id)
                                    ? 'seat selected'
                                    : 'seat available'
                                }
                                alt="seat"
                                onClick={() => this.handleSeat(seatFive)}
                              />
                            ) : (
                              <img
                                src={Seats}
                                className="seat booked"
                                alt="Seat"
                              />
                            )}
                          </div>
                          <div className="six">
                            {seatSix ? (
                              <img
                                src={Seats}
                                className={
                                  this.state.seat.includes(seatSix.id)
                                    ? 'seat selected'
                                    : 'seat available'
                                }
                                alt="Seat"
                                onClick={() => this.handleSeat(seatSix)}
                              />
                            ) : (
                              <img
                                src={Seats}
                                className="seat booked"
                                alt="Seat"
                              />
                            )}
                          </div>
                          <div className="seven">
                            {seatSeven ? (
                              <img
                                src={Seats}
                                className={
                                  this.state.seat.includes(seatSeven.id)
                                    ? 'seat selected'
                                    : 'seat available'
                                }
                                alt="seat"
                                onClick={() => this.handleSeat(seatSeven)}
                              />
                            ) : (
                              <img
                                src={Seats}
                                className="Seat booked"
                                alt="Seat"
                              />
                            )}
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => this.handleSubmit(item.id)}
                          >
                            Next
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
      )
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 mt-4">
            <>{result}</>
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
              onChange={this.handleTerminal}
            >
              <option defaultValue>DepartureTerminal</option>
              {departure}
            </select>

            <label for="arrivalTerminal" className="form-labrl">
              arrival Terminal
            </label>
            <select
              className="form-select form-select-sm mb-4"
              id="arrivalTerminal"
              aria-label="Default select example"
              onChange={this.handleRoutes}
            >
              <option defaultValue>arrivalTerminal</option>
              {arrival}
            </select>
            <select
              className="form-select form-select-sm mb-4"
              aria-label="Default select example"
            >
              <option selected>Select Number of passenger</option>
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleProceed}
              >
                {' '}
                Modify Search
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
  routes: state.data.routes,
  terminals: state.data.terminal,
  info: state.data.info,
  bookings: state.data.booking,
})
const mapActionsToProps = {
  getTerminal,
  getRoutes,
  getTrip,
  bookingDetails,
}
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(withRouter(OnewayResult))
