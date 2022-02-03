import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{ width: "20.1rem"}}>
            <img src={imageUrl} style={{ width: "20rem", height: "13rem"}} className="card-img-top" alt="Not Found..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>    
                <p className="card-text">{description}</p>
                <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
