import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Slide1 extends Component {
  render() {
    return (
      <div className='slide'>
        <div className='slide1'>
        <Link to='my-records'>
        <h3 className='skip'>
          SKIP
          </h3>
          </Link>        
        </div>
        <div>
        <Link to='slide2'>
        <h4 className='next-btn'>Next</h4>
        </Link>
        </div>
      </div>
    )
  }
}
