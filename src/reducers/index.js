import { combineReducers } from "redux"
import users from './users';
import chats from './chats';
import nick from './nick'


const chat = combineReducers({
  users,
  chats,
  nick
});

export default chat;