import * as types from './actionTypes';

export const populateUsersList = users => ({
    type: types.USERS_DATA,
    users
})

export const populateChats = chats => ({
    type: types.CHAT_DATA,
    chats
})

export const registerNick = nick => ({
    type: types.REGISTER_NICK,
    nick : nick
})


