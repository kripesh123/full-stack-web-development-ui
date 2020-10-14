import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Dashboard = () => (
    <div>
        Dashboard
    </div>
)

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
}

function dashboardState(state) {
    return {
        user: state.user
    }
}

export default connect(dashboardState, {})(Dashboard)