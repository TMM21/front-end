import React, { Component } from 'react'
import '../style.css'
import DatePicker from 'react-datepicker'
import { format, parseISO } from 'date-fns'
import { connect } from 'react-redux'
import {
  getTerminal,
  getRoutes,
  getTrip,
} from '../../../redux/action/dataAction'
import dayjs from 'dayjs'
import 'react-datepicker/dist/react-datepicker.css'
import { withRouter } from 'react-router-dom'
import Loading from '../../Design/loading'

class oneWayForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      passenger: '',
      startDate: new Date(),
      min: new Date().setDate(new Date().getDate() + 1),
      max: new Date().setDate(new Date().getDate() + 7),
      routeId: '',
      departureTerminal: '',
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
    const { routeId, startDate, passenger, departureTerminal } = this.state
    const data = {
      routeId,
      travelDate: dayjs(startDate).format('YYYY-MM-DD'),
      passenger,
    }
    if (
      routeId === '' ||
      startDate === '' ||
      passenger === '' ||
      departureTerminal === ''
    ) {
      this.setState({
        error: 'please fill all fields appropriately',
      })
      return
    }

    this.props.getTrip(data, this.props.history)
  }
  handleClose = () => {
    this.setState({
      open: false,
    })
  }
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
  handleDate = (e) => {
    const date = parseISO(format(e, 'yyyy-MM-dd'))
    this.setState({
      startDate: date,
    })

    // console.log(format(e, 'yyyy-MM-dd'))
  }
  handleRoute = ({ target: { value } }) => {
    this.setState({
      routeId: value,
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
    const { departureTerminal, error, open } = this.state

    return (
      <>
        <div className="container-fluid">
          {error !== ''
            ? open && (
                <div className="alert alert-danger">
                  {error}{' '}
                  <span className="click" onClick={this.handleClose}>
                    x
                  </span>
                </div>
              )
            : ''}
          <div className="row">
            <div className="col-md-6 col-sm-11">
              <div className="column">
                <div className="col-10">
                  <p className="lead text"> Travelling From:</p>
                </div>
                <div className="col-10">
                  <select
                    className="form-select form-select-sm  select"
                    aria-label=".form-select-sm example"
                    onChange={this.handleTerminal}
                    disabled={loading}
                  >
                    <option defaultValue>
                      {departureTerminal === ''
                        ? 'DepartureTerminal'
                        : `${departureTerminal}`}
                    </option>
                    {terminals}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-11">
              <div className="column">
                <div className="col-6">
                  <p className="lead text">Travelling To :</p>
                </div>
                <div className="col-6">
                  <select
                    className="form-select form-select-sm depart"
                    aria-label=".form-select-sm example"
                    onChange={this.handleRoute}
                    disabled={loading}
                  >
                    <option defaultValue>Arrival Terminal</option>
                    {route}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="column">
                <div className="col-10">
                  <p className="lead text mb-1">Departure Date</p>
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
                  <p className="lead text mt-2 mb-2"> No Of Travellers</p>
                </div>
                <div className="col-10">
                  <select
                    className="form-select form-select-sm  passenger"
                    aria-label=".form-select-sm example"
                    onChange={this.handleSubmit}
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
              <div className="col-10 mb-3"></div>
              <div className="col-10">
                <button
                  type="button"
                  className=" pro btn btn-primary button mt-4"
                  onClick={this.handleProceed}
                  disabled={loading}
                >
                  {' '}
                  Proceed{' '}
                </button>
              </div>
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
const mapActionToProps = {
  getTerminal,
  getRoutes,
  getTrip,
}

export default connect(
  mapStateToProps,
  mapActionToProps,
)(withRouter(oneWayForm))
