import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Slide1 extends Component {
  render() {
    return (
      <div className='slide'>
        <div className='slide2'>
        <Link to=''>
        <h3 className='skip'>
          SKIP
          </h3>
          </Link>        
        </div>
        <div>
        <Link to='slide3'>
        <h4 className='next-btn'>Next</h4>
        </Link>
        </div>
      </div>
    )
  }
}
