import React from 'react';
import './App.css';
import Document from './components/Document';
import DocumentDetails from './components/DocumentDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import MyRecords from './components/MyRecords';
// import Navbar from './components/Navbar';
// import { Route, Switch } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import OnBoarding from './components/OnBoarding'

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App" >
        {/* <Navbar user={this.state.user} setUser={this.setUser} /> */}
        
        <Switch>
        {/* <OnBoarding user={this.state.user} setUser={this.setUser}/> */}
        <Route
          exact
          path='/'
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <OnBoarding {...props} />
            }
            else {
              return <Redirect to='/'/>
          }}
          }
        />

        <Route
          exact
          path='/documents'
          // component={Projects}
          render={props => {
            if (this.state.user) {
              return <Document {...props} />
            }
            else {
              return <Redirect to='/'/>
          }}
          }
        />
        <Route
          exact
          path='/documents/:id'
          render={props => <DocumentDetails user={this.state.user} {...props} />}
        />
        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        /> 
        <Route
          exact
          path='/slide1'
          render={props => <Slide1 setUser={this.setUser} {...props} />}
        /> 
        <Route
          exact
          path='/slide2'
          render={props => <Slide2 setUser={this.setUser} {...props} />}
        /> 
        <Route
          exact
          path='/slide3'
          render={props => <Slide3 setUser={this.setUser} {...props} />}
        /> 
        <Route
          exact
          path='/my-records'
          render={props => <MyRecords setUser={this.setUser} {...props} />}
        /> 
        </Switch>
      </div>
      
    );
  }
}

export default App;
