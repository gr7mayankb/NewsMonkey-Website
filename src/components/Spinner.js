import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from './1496.gif'

export default class Spinner extends Component {

  render() {
    return (
      <div>
        <img src={Loader} alt="Loader" />
      </div>
    )
  }
}
