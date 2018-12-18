import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/ducks/session/operations'

const Header = ({ isAuthenticated, logout }) => {
  if (isAuthenticated) {
    return (
      <header>
        <Link to='/'>Main page </Link>

        <button onClick={() => logout()}>Logout</button>
      </header>
    )
  }

  return (
    <header>
      <Link to='/'>Main page </Link>
    </header>

  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Header)