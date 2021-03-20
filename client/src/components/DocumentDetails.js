import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import EditDocument from './EditDocument';

export default class DocumentDetails extends Component {

  state = {
    document: null,
    editForm: false,
    error: null,
    title: '',
    description: ''
  }

  getData = () => {
    const id = this.props.match.params.id;
    // get the project that was clicked from the server
    axios.get(`/api/documents/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description
        })
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          this.setState({
            error: 'Sorry - Document Not found 🤷‍♀️ 🤷‍♂️'
          })
        }
      })
  }

  componentDidMount = () => {
    this.getData();
  }
  deleteProject = () => {
    // delete this project from the database
    const id = this.props.match.params.id;
    axios.delete(`/api/documents/${id}`)
      .then(() => {
        // this is how you do a redirect with react router dom
        this.props.history.push('/documents');
      })
  }

  toggleEditForm = () => {
    this.setState((prevState) => ({
      editForm: !prevState.editForm
    }))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`/api/projects/${id}`, {
      title: this.state.title,
      description: this.state.description
    })
      .then(response => {
        this.setState({
          project: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.project) return <h1>Loading...</h1>
    let allowedToDelete = false;
    const user = this.props.user;
    const owner = this.state.project.owner;
    if (user  && user._id === owner) allowedToDelete = true;

    return (
      <div>
        <h1>{this.state.project.title}</h1>
        <p>{this.state.project.description}</p>

        {allowedToDelete && (
          <Button variant='danger' onClick={this.deleteProject}>Delete Project</Button>
        )}
        
        <Button onClick={this.toggleEditForm}>Show Edit Form</Button>
        {this.state.editForm && (
          <EditDocument
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    )
  }
}

