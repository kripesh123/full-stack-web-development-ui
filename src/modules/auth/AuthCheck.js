// Import
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import topic from '../../setup/routes/topic'

const AuthCheck = (props) => (
    props.user.isAuthenticated ? <Redirect to={topic.list.path}/> : ''
)

// properties
AuthCheck.propTypes = {
    user: PropTypes.object.isRequired
}

// state

function authCheckState(state) {
    return {
        user: state.user
    }
}

export default connect(authCheckState, {})(AuthCheck)