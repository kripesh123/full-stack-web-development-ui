import React from 'react'
import PropTypes, { func } from 'prop-types'
import { primary as primaryGradient } from "../../../ui/common/gradients"
import { level1 } from "../../../ui/common/shadows"
import { Grid, GridCell } from '../../../ui/grid'
import Logo from './Logo'
import Menu from './Menu'
import MenuItem from './MenuItem'
import home from '../../../setup/routes/home'
import user from '../../../setup/routes/user'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import topic from '../../../setup/routes/topic'
import admin from '../../../setup/routes/admin'

function Header(props) {
    return (
        <header style={{
            backgroundImage: primaryGradient,
            boxShadow: level1,
            padding: '0 2em',
            height: '5em',
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0
        }}>

            <Grid>
                <GridCell>
                    <Logo style={{ marginTop: '0.5em', float: 'left' }} />
                    <Menu style={{ marginTop: '1em', marginLeft: '1em', float: 'left' }}>
                        <MenuItem to={home.about.path}> About</MenuItem>
                        <MenuItem to={home.team.path}> Team</MenuItem>
                        <MenuItem to={home.advertise.path}> Advertise</MenuItem>
                        <MenuItem to={home.product.path}> Product</MenuItem>
                        <MenuItem to={home.blogs.path}> Blog</MenuItem>
                    </Menu>
                </GridCell>
            </Grid>

            <Grid>
                <GridCell style={{ flexGrow: 3 }}>
                    {
                        props.user.isAuthenticated
                            ?
                            <Menu style={{float: 'right'}}>
                                {props.user.details.role === 'ADMIN' && <MenuItem to={admin.dashboard.path} section="admin">Admin</MenuItem>}
                                <MenuItem to={topic.list.path}> Topics</MenuItem>
                                <MenuItem to={user.subscriptions.path}> Subscriptions</MenuItem>
                                <MenuItem to={user.profile.path}> Profile</MenuItem>
                            </Menu>
                            :
                            <Menu style={{ float: 'right' }}>
                                <MenuItem to={user.login.path}> Login</MenuItem>
                                <MenuItem to={user.signup.path}> Signup</MenuItem>
                            </Menu>
                    }
                </GridCell>
            </Grid>
        </header>
    )
}

// Header Properties
Header.propTypes = {
    user: PropTypes.object.isRequired
}

// state
function headerState(state) {
    return {
        user: state.user
    }
}

export default withRouter(connect(headerState, {})(Header))