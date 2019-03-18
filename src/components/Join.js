import React, { Component } from 'react';
import {Redirect} from "react-router-dom";


class Join extends Component {
    render() {
    if(this.props.error===true) {
        console.log('redirecting')
        return <Redirect to="/error" />
    
    }

    return (
        <div>
          <h1>please joing!</h1>
          { 
              <ul>
              { this.props.users.map(user => <li>{user.nick}</li>)}
            </ul>  
          }
        
        </div>
      );
    }
}

export default Join;