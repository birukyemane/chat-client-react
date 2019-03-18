import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Join from './components/Join';
import Error from './components/Error';

class App extends Component {

  state = {
    users: [],
    connectionFailed:false
  }

  componentDidMount(){
    axios.get('http://localhost:8888/users')
      .then(res => {
        const data = res.data;
        const users = data.data;
        this.setState({ users });
      }).catch(function (error) {
        // handle error
        console.log('error in network',error);
      })
      
      const socket = new WebSocket('ws://localhost:8888');
      socket.onerror = function(event) {
        console.error("WebSocket error observed:", event);
        this.setState({connectionFailed : true});
      }.bind(this);

  }
  render() {
   
    return (
      <div className="App">

      <Router>
         <Route path="/" exact render={() => <Join error={this.state.connectionFailed} users={this.state.users}/>}/>
         <Route path="/error" exact component={Error} />
      </Router>
      
      </div>
    );
  }
}

export default App;
