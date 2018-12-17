import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

export default function withAuthentication(WrappedComponent) {
  const WithAuthentication = props => {
    if (!props.isAuthenticated) {
      return <Redirect to="/login" />
    }

    return (<WrappedComponent {...props} />)
  }


  const mapStateToProps = state => ({
    isAuthenticated: state.session.isAuthenticated,
  })

  return connect(mapStateToProps)(WithAuthentication)
}