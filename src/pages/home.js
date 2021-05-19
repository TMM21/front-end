import React, { Component } from 'react'
import './style.css'
// import OneWay from '../components/booking/BookASeat/oneWay'
// import RoundTrip from '../components/booking/BookASeat/RoundTrip'
import Book from '../components/booking/BookASeat/Home'
import Hire from '../components/booking/HireService/Home'
import BookingStatus from '../components/booking/BookingStatus'
import DesignHome from '../components/Design/Home'
import { connect } from 'react-redux'
import Loading from '../components/Design/loading'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      open: true,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        error: nextProps.UI.errors,
      })
    }
  }
  handleClose = () => {
    this.setState({
      open: false,
    })
  }
  render() {
    const { error, open } = this.state
    const {
      UI: { loading },
    } = this.props
    console.log(loading)

    return (
      <>
        <div className="background">
          <div className="card begin ">
            <div className="card-body ">
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
              <ul
                className="nav nav-pills mb-3 contain"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item  list" role="presentation">
                  <button
                    className="nav-link active link"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    BOOK A SEAT
                  </button>
                </li>
                <li className="nav-item list" role="presentation">
                  <button
                    className="nav-link link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    HIRE A BUS
                  </button>
                </li>
                <li className="nav-item list" role="presentation">
                  <button
                    className="nav-link link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    BOOKING STATUS
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div>{loading && <Loading />}</div>
                  <Book />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Hire />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <BookingStatus />
                </div>
              </div>
            </div>
          </div>
        </div>
        <DesignHome />
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI,
})

export default connect(mapStateToProps)(Home)
