import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { signup } from '../services/auth';

export default class Signup extends Component {

  state = {
    email: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    signup(username, password)
      .then(data => {
        if (data.message) {
          this.setState({
            message: data.message,
            username: '',
            password: ''
          })
        } else {
          // put the user in the state of App.js
          this.props.setUser(data);
          this.props.history.push('./slide1');
        }
      })
  }

  render() {
    return (
      <div className='sign-up'>
        <div className='sign-up-container'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='username'></Form.Label>
            <Form.Control
              className='btn-email' 
              type='text'
              name='username'
              id='username'
              placeholder='Email'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='password'></Form.Label>
            <Form.Control
              className='btn-email'
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.messate && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          <Button className='btn-submit' type='submit'>Signup</Button>
        </Form>
        </div>
      </div>
    )
  }
}

