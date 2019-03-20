import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map((user,index) => (
        <li key={index+1}>{user.nick}{(user.online?'online':'')}</li>
      ))}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      online: PropTypes.bool.isRequired,
      nick: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default connect(state => ({
  users: state.users
}), {})(Sidebar);