import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerNick} from '../actions/index';
import { Redirect} from "react-router-dom";

class Join extends Component {
    state = {
      nick:null,
      redirect: false
    }

    handleChange = (e)=>{
      this.setState({nick:e.target.value});
    }

    handleClick = (e)=>{
      // send message to server to register
      // validate allowed names and check if nick is not in use already
      this.props.socket.send(`/nick ${this.state.nick}`);
      this.props.dispatch(registerNick(this.state.nick));
      this.setState({redirect:true});
    }

    render() {
      if(this.state.redirect===true) return <Redirect to="/chat" />
      return (
        <div>
          <h1>please join!</h1>
          <input type="text" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Join</button>                  
        </div>
      );
    }
}

export default connect()(Join);