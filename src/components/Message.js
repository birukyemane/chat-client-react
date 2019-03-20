import React from "react"
import PropTypes from "prop-types"

const Message = ({ msg, from }) => (
  <p>
    <i>{from}</i>: {msg}
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message;