// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

//App Imports

import { messageShow, messageHide } from '../../modules/common/api/actions'
import { create } from '../../modules/subscription/api/actions'
import userRoutes from '../../setup/routes/user'

// UI Imports
import Card from '../../ui/card'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { white, grey2 } from '../../ui/common/colors'
import { H4 } from '../../ui/typography'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//Component
class Item extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false
        }
    }

    onClickAdd = (topicId) => {
        this.props.messageShow('Adding Topic, Please wait......')

        this.props.create({ topicId })
            .then(response => {
                if(response.data.errors && response.data.errors.length > 0) {
                    this.props.messageShow(response.data.errors[0].message)
                } else {
                    this.props.messageShow('Added successfully')
                    this.props.history.push(userRoutes.subscriptions.path)
                }
            })
            .catch(error => {
                this.props.messageShow('There was error adding to this topic. Please come later.')
            })
            .then(() => {
                window.setTimeout(() => {
                    this.props.messageHide()
                }, 5000)
            })
    }

    render() {
        const { id, name, description, type, featured } = this.props.topic
        const { isLoading } = this.state
        return (
            <Card style={{ width: '25em', backgroundColor: white }}>
                <div style={{ padding: '1em 1.2em', textAlign: 'center' }}>
                    <H4 font="secondary">{name}</H4>
                    <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>
                    <p style={{ color: grey2, marginTop: '1em' }}>{type}</p><span>{featured}</span>

                    <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
                        <Button
                            theme="secondary"
                            type="button"
                            disabled={isLoading}
                            onClick={this.onClickAdd.bind(this, id)}
                        >
                            <Icon size={1.2} style={{ color: white }}>add_circle</Icon> ADD
                        </Button>
                    </p>
                </div>

            </Card>
        )
    }
}

// Component Properties
Item.propTypes = {
    topic: PropTypes.object.isRequired,
    messageShow: PropTypes.func.isRequired,
    messageHide: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
}

// Component state
function itemState(state) {
    return {

    }
}

export default connect(itemState, { messageShow, messageHide, create })(withRouter(Item))