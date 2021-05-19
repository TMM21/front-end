import React from 'react'
import './style.css'
import spinner from '../../asset/images/spinner.gif'
export default function loading(props) {
  return (
    <div className="loading">
      <img src={spinner} alt="spinner" className="img" />
    </div>
  )
}
