import React, { Component } from 'react';
import { Link  } from 'react-router-dom'
import { Button} from 'react-bootstrap';
// import Signup from './Signup'
// import Login from "./Login"


export default class OnBoarding extends Component {
  render() {
    return (
      <div className="container-index">
        
        <div className='sign-in'>
        <div  >
      
        <Link  to='/signup'>
        <Button className='btn-started'>Get Sarted for Free</Button>
        </Link>

        <Link  to='/login'>
          <h2 className='btn-log-in'>Already Have An Account? Log In</h2>
        </Link>
      
        </div>
        </div>

      </div>
    )
  }
}
