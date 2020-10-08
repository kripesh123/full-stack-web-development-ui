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
import userRoutes from '../../setup/routes/user'

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: '',
            isLoading: false,
            user: {
                name: '',
                email: '',
                password: ''
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
        this.setState({
            isLoading: true
        })

        this.props.messageShow('Signing you up, please wait......')

        this.props.register(this.state.user)
            .then(response => {
                this.setState({
                    isLoading: false
                })

                if (response.data.errors && response.data.errors.length > 0) {
                    this.props.messageShow(response.data.errors[0].message)
                } else {
                    this.props.messageShow('Signed up successfully.')
                    this.props.history.push(userRoutes.login.path)
                }
            })
            .catch(error => {
                this.props.messageShow('There was some error signing you up. Please try again.')

                this.setState({
                    isLoading: false,
                    error: 'Error Signing Up.'
                })
            }).
            then(() => {
                window.setTimeout(() => {
                    this.props.messageHide()
                }, 5000)
            })
    }

    render() {
        return (
            <Grid gutter={true} alignCenter={true} style={{ padding: '2em' }}>
                <GridCell>
                    <Grid gutter={true} alignCenter={true}>
                        <GridCell justifyCenter={true}>
                            <ImageTile width={300} height={530} shadow={level1} image={`${APP_URL}/images/stock/about-us/1.jpg`} />
                        </GridCell>

                        <GridCell>
                            <Grid>
                                <GridCell justifyCenter={true}>
                                    <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/about-us/2.jpg`} />
                                </GridCell>
                            </Grid>
                            <Grid>
                                <GridCell justifyCenter={true}>
                                    <ImageTile width={170} height={250} shadow={level1} style={{ marginTop: '1.9em' }} image={`${APP_URL}/images/stock/about-us/3.jpg`} />
                                </GridCell>
                            </Grid>
                        </GridCell>
                    </Grid>
                </GridCell>

                <GridCell style={{ textAlign: 'center' }}>
                    <H3 font="secondary" style={{ marginBottom: '1em' }}>
                        Create an account
                    </H3>

                    <form onSubmit={this.onSubmit}>
                        <div style={{ width: '25em', margin: '0 auto' }}>
                            <Input
                                type="text"
                                fullWidth={true}
                                placeholder="Name"
                                required="required"
                                name="name"
                                value={this.state.user.name}
                                onChange={this.onChange}
                            />
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
                            <Link to={userRoutes.login.path}>
                                <Button type="button" style={{ marginTop: '0.5em' }}>
                                   Login
                                <Icon size={1.2} style={{ color: white }}>navigate_next</Icon>
                                </Button>
                            </Link>
                            <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                                Signup
                                <Icon size={1.2} style={{ color: white }}>navigate_next</Icon>
                            </Button>
                        </div>
                    </form>
                </GridCell>
            </Grid>
        )
    }
}

Signup.propTypes = {
    register: PropTypes.func.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired,

}

export default connect(null, { register, messageHide, messageShow })(withRouter(Signup))