import React, { Component } from 'react'
import axios from 'axios';
import DocumentList from './DocumentList';
import AddDocument from './AddDocument';

export default class Document extends Component {

  state = {
    documents: []
  }
  getData = () => {
    // get the current list of projects from the server
    axios.get('/api/documents')
      .then(response => {
        console.log(response);
        // put them into the state
        this.setState({
          documents: response.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className='projects-container'>
        <AddDocument getData={this.getData} />
        <DocumentList projects={this.state.documents} />
      </div>
    )
  }
}
