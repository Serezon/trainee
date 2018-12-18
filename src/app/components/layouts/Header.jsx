import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '../button/Button'
import { logout } from '../../redux/ducks/session/operations'

const Header = ({ isAuthenticated }) => (
  <header>
    <Link to="/">Main page </Link>
    {isAuthenticated ? <Button logout={logout} /> : null}
  </header>
)

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
})

export default connect(mapStateToProps, { logout })(Header)
