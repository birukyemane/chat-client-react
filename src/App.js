import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Join from './components/Join';
import ChatRoom from './components/ChatRoom';
import { connect } from 'react-redux';
import {populateUsersList,populateChats} from './actions/index';

class App extends Component {
  
  componentDidMount(){
    axios.get('http://localhost:8888/users')
      .then(res => {
        const data = res.data;
        const users = data.data;
        this.props.dispatch(populateUsersList(users));
      }).catch(function (error) {
        console.log('error in network',error);
      })

      axios.get('http://localhost:8888/history')
        .then(res => {
          const data = res.data;
          const chats = data.data;
          this.props.dispatch(populateChats(chats));
        }).catch(function (error) {
          console.log('error in network',error);
        })
  }

  render() {
    return (
      <div className="App">

      <Router>
         <Route path="/" exact render={()=><Join socket={this.props.socket}/>} />
         <Route path="/chat" exact render={()=><ChatRoom socket={this.props.socket}/>} />
      </Router>
      
      </div>
    );
  }
}

export default connect()(App);
