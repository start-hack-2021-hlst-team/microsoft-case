import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Slide1 extends Component {
  render() {
    return (
      <div className='slide'>
        <div className='slide3'>
        <Link to=''>
        <h3 className='skip'>
          SKIP
          </h3>
          </Link>        
        </div>
        <div>
        <Link to='my-records'>
        <h4 className='next-btn'>Let's Go</h4>
        </Link>
        </div>
      </div>
    )
  }
}
