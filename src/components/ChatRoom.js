import React, { Component } from 'react';
import MessagesList from './MessagesList';
import Sidebar from './Sidebar';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';
import { Redirect} from "react-router-dom";

class ChatRoom extends Component {
    
    render() {
      if(this.props.nick===null) return <Redirect to="/"></Redirect>
      return (
        <div id="container">
            <Sidebar />
            <section id="main">
                <MessagesList />
                <AddMessage />
            </section>
      </div>
      );
    }
}

export default connect(state => ({
  nick: state.nick
}), {})(ChatRoom);