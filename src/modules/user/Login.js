import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, GridCell } from '../../ui/grid'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'
import { APP_URL } from '../../setup/config/env'
import H3 from '../../ui/typography/H3'
import Input from '../../ui/input/Input'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { white } from '../../ui/common/colors'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { register } from './api/actions'
import { messageShow, messageHide } from '../common/api/actions'
import { login } from './api/actions'
import userRoutes from '../../setup/routes/user'
import AuthCheck from '../auth/AuthCheck'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                email: '',
                password: '',
            }
        }
    }

    onChange = (evernt) => {
        let user = this.state.user
        user[event.target.name] = evernt.target.value

        this.setState({
            user
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.messageShow('Logging In, Pleae wait........')

        this.props.login(this.state.user)
            .then(response => {
                if (this.props.user.error && this.props.user.error.length > 0) {
                    this.props.messageShow(this.props.user.error)
                    window.setTimeout(() => {
                        this.props.messageHide()
                    }, 5000)
                } else {
                    this.props.messageHide()
                }
            })
            .catch(error => {
                this.props.messageShow(this.props.user.error)
                window.setTimeout(() => {
                    this.props.messageHide()
                }, 5000)
            })
    }

    render() {
        const { isLoading, error } = this.props.user
        return (
            <Grid gutter={true} alignCenter={true} style={{ padding: '2em' }}>
                <GridCell>
                    <Grid gutter={true} alignCenter={true}>
                        <GridCell justifyCenter={true}>
                            <ImageTile width={300} height={530} shadow={level1} image={`${APP_URL}/images/stock/team/1.jpg`} />
                        </GridCell>

                        <GridCell>
                            <Grid>
                                <GridCell justifyCenter={true}>
                                    <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/team/2.jpg`} />
                                </GridCell>
                            </Grid>
                            <Grid>
                                <GridCell justifyCenter={true}>
                                    <ImageTile width={170} height={250} shadow={level1} style={{ marginTop: '1.9em' }} image={`${APP_URL}/images/stock/team/3.jpg`} />
                                </GridCell>
                            </Grid>
                        </GridCell>
                    </Grid>
                </GridCell>

                <GridCell style={{ textAlign: 'center' }}>
                    <H3 font="secondary" style={{ marginBottom: '1em' }}>
                        Login to your account
                    </H3>

                    <form onSubmit={this.onSubmit}>
                        <div style={{ width: '25em', margin: '0 auto' }}>
                            <Input
                                type="email"
                                fullWidth={true}
                                placeholder="Email"
                                required="required"
                                name="email"
                                value={this.state.user.email}
                                style={{ marginTop: '1em' }}
                                onChange={this.onChange}
                            />
                            <Input
                                type="password"
                                fullWidth={true}
                                placeholder="Password"
                                required="required"
                                name="password"
                                value={this.state.user.password}
                                style={{ marginTop: '1em' }}
                                onChange={this.onChange}
                            />
                        </div>

                        <div style={{ marginTop: '2em' }}>
                            <Link to={userRoutes.signup.path}>
                                <Button type="button" style={{ marginTop: '0.5em' }}>
                                    Sign Up
                                <Icon size={1.2} style={{ color: white }}>navigate_next</Icon>
                                </Button>
                            </Link>
                            <Button type="submit" theme="secondary" disabled={isLoading}>
                                Login
                                <Icon size={1.2} style={{ color: white }}>navigate_next</Icon>
                            </Button>
                        </div>
                    </form>
                </GridCell>

                {/* Auth Check  */}
                <AuthCheck />
            </Grid>
        )
    }
}

Login.propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired,
}

function loginState(state) {
    return {
        user: state.user
    }
}

export default connect(loginState, { login, messageHide, messageShow })(withRouter(Login))