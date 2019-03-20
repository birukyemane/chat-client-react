import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import { connect } from 'react-redux';

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
    {messages.map(message => (
      <Message
      key={message.timestamp}
      {...message}
      />
    ))}
    </ul>
  </section>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.number.isRequired,
      msg: PropTypes.string.isRequired,
      from: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default connect(state => ({
  messages: state.chats
}), {})(MessagesList);