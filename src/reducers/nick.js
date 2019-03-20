import * as types from '../actions/actionTypes';

const nick = (state = null, action) => {
  switch (action.type) {
    case types.REGISTER_NICK:
      return action.nick
    default:
      return state
  }
}

export default nick;