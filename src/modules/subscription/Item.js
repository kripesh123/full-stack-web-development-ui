// Imports 
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Card from '../../ui/card'
import { white, black, grey2 } from '../../ui/common/colors'
import { H4 } from '../../ui/typography'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '../../ui/button'

//App Imports
import { messageHide, messageShow } from '../../modules/common/api/actions'
import { remove, getListByUser } from '../../modules/subscription/api/actions'
import Icon from '../../ui/icon'

// Component
class Item extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false
        }
    }
    onClickRemove = (id) => {
        let check = confirm('Are you sure you want to remove this topic?')

        if (check) {
            this.setState({
                isLoading: true
            })

            this.props.messageShow('Removing, please wait.....')
            this.props.remove({ id })
                .then(response => {
                    if(response.data.errors && response.data.errors.length > 0) {
                        this.props.messageShow(response.data.errors[0].message)
                    } else {
                        this.props.messageShow('Removed successfully')
                        this.props.getListByUser()
                    }
                })
                .catch(error => {
                    this.props.messageShow('There was some error removing to this topic. Please come later.')
                })
                .then(() => {
                    window.setTimeout(() => {
                        this.props.messageHide()
                    },5000)
                })
        }

    }

    render() {
        const { id, topic, createdAt } = this.props.subscription
        const { isLoading } = this.state
        return (
            <Card style={{ width: '18em', backgroundColor: white }}>
                <div style={{ padding: '1em 1.2em' }}>
                    <H4 font="secondary" style={{ color: black }}>{topic.name}</H4>
                    <p style={{ color: grey2, marginTop: '1em' }}>{topic.description}</p>
                    <p style={{ color: grey2, marginTop: '1em' }}>{topic.type}</p><span>{topic.featured}</span>

                    <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                        <Button
                            theme="secondary"
                            type="button"
                            disabled={isLoading}
                            onClick={this.onClickRemove.bind(this, id)}
                        >
                            <Icon size={1.2} style={{ color: white }}>remove_circle_outline</Icon> ADD
                        </Button>
                    </p>
                    <p style={{ color: grey2, marginTop: '1em', fontSize: '0.8em', textAlign: 'center' }}>
                        Subscribed on {new Date(parseInt(createdAt)).toString()}
                    </p>
                </div>
            </Card>
        )
    }
}

// Component properties
Item.propTypes = {
    subscription: PropTypes.object.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    getListByUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

function itemState(state) {
    return {
        user: state.user
    }
}

export default connect(itemState, { messageShow, messageHide, remove, getListByUser })(withRouter(Item))