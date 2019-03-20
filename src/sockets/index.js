import * as types from '../actions/actionTypes';
// import { addUser, messageReceived, populateUsersList } from '../actions'

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8888');
    socket.onerror = function(event) {
      console.error("WebSocket error observed:", event);       
    }

  socket.onopen = () => {
    
  }
  socket.onmessage = (event) => {
   // const data = JSON.parse(event.data);
    console.log(event.data);
  }

  return socket
}

export default setupSocket