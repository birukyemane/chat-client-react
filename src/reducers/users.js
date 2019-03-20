import * as types from '../actions/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case types.USERS_DATA:
      return action.users
    default:
      return state
  }
}

export default users