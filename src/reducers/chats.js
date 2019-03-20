import * as types from '../actions/actionTypes';

const chats = (state = [], action) => {
  switch (action.type) {
    case types.CHAT_DATA:
      return action.chats
    default:
      return state
  }
}

export default chats;