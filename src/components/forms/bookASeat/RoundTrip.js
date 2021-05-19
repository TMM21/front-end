import React, { Component } from 'react'
import '../style.css'
import DatePicker from 'react-datepicker'
import { format, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import dayjs from 'dayjs'
import {
  getTerminal,
  getRoutes,
  getTrip,
} from '../../../redux/action/dataAction'

class RoundTrip extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departureTerminal: '',
      startDate: new Date(),
      min: new Date().setDate(new Date().getDate() + 1),
      max: new Date().setDate(new Date().getDate() + 7),
      returnDate: new Date(),
      passengers: '',
      routeId: '',
      error: '',
      open: true,
    }
  }
  componentDidMount() {
    this.props.getTerminal()
  }
  handleSubmit = ({ target: { value } }) => {
    this.setState({
      passenger: value,
    })
  }

  handleProceed = () => {
    const {
      routeId,
      startDate,
      passenger,
      departureTerminal,
      returnDate,
    } = this.state
    const data = {
      routeId,
      TravelDate: dayjs(startDate).format('YYYY-MM-DD'),
      passenger,
      service: '',
      type: '',
    }
    if (
      routeId === '' ||
      passenger === '' ||
      departureTerminal === '' ||
      returnDate === '' ||
      startDate === ''
    ) {
      this.setState({
        error: 'please fill all field',
      })

      return
    }
    console.log(startDate, returnDate)
    if (startDate >= returnDate) {
      this.setState({
        error: 'invalid date selection',
      })
      return
    }

    this.props.getTrip(data, this.props.history)
  }
  handleDate = (e) => {
    const date = parseISO(format(e, 'yyyy-MM-dd'))
    this.setState({
      startDate: date,
    })

    // console.log(format(e, 'yyyy-MM-dd'))
  }
  handleReturn = (e) => {
    const date = parseISO(format(e, 'yyyy-MM-dd'))
    this.setState({
      returnDate: date,
    })
  }
  handleTerminal = async ({ target }) => {
    const { terminal } = this.props.data
    const term = terminal.find((item) => {
      return item.id === target.value
    })

    this.setState({
      departureTerminal: term.name,
    })

    this.props.getRoutes(term)
  }
  handleRoute = ({ target: { value } }) => {
    this.setState({
      routeId: value,
    })
  }
  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const {
      data: { terminal, routes },
      UI: { loading },
    } = this.props
    const terminals = terminal.map((term) => {
      return (
        <option key={term.id} id={term.name} value={term.id}>
          {term.name}
        </option>
      )
    })
    const route =
      routes &&
      routes.map((route) => {
        return (
          <option key={route.id} value={route.id}>
            {route.route}
          </option>
        )
      })
    const { error, open } = this.state
    console.log(error)
    return (
      <>
        <div className="container-fluid">
          {error && open ? (
            <div className="alert alert-danger">
              {error}{' '}
              <span className="click" onClick={this.handleClose}>
                x
              </span>
            </div>
          ) : (
            ''
          )}
          <div className="row mb-md-5">
            <div className="col-md-6 col-sm-10">
              <div className="column">
                <div className="col-10">
                  <p className="lead text">Travelling From: </p>
                </div>
                <div className="col-10">
                  <select
                    className="form-select form-select-sm  select"
                    aria-label=".form-select-sm example"
                    onChange={this.handleTerminal}
                    disabled={loading}
                  >
                    <option defaultValue>DepartureTerminal</option>
                    {terminals}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-10">
              <div className="column">
                <div className="col-10">
                  <p className="lead text">Travelling To: </p>
                </div>
                <div className="col-6">
                  <select
                    className="form-select form-select-sm depart"
                    aria-label=".form-select-sm example"
                    disabled={loading}
                    onChange={this.handleRoute}
                  >
                    <option defaultValue>Arrival Terminal</option>
                    {route}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="column">
                <div className="col-10">
                  <p className="lead text">Departure Date</p>
                </div>
                <div className="col-10">
                  <DatePicker
                    className="date-input"
                    placeholderText="Departure Date"
                    selected={this.state.startDate}
                    minDate={this.state.startDate}
                    maxDate={this.state.max}
                    onChange={this.handleDate}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="column">
                <div className="col-10">
                  <p className="lead text">No Of Travellers</p>
                </div>
                <div className="col-10">
                  <select
                    className="form-select form-select-sm  passenger"
                    aria-label=".form-select-sm example"
                  >
                    <option defaultValue>No Of Traveller(s)</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="column">
                <div className="col-10">
                  <p className="lead text">Return Date</p>
                </div>
                <div className="col-10">
                  <DatePicker
                    className="date-input"
                    placeholderText="Return Date"
                    selected={this.state.returnDate}
                    minDate={this.state.returnDate}
                    maxDate={this.state.max}
                    onChange={this.handleReturn}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <button
                className="btn btn-primary mt-4"
                onClick={this.handleProceed}
              >
                {' '}
                <Link to="">Proceed</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  UI: state.UI,
})
const mapActionsToProps = {
  getTerminal,
  getRoutes,
  getTrip,
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(withRouter(RoundTrip))
