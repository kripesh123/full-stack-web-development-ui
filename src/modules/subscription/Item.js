// Imports 
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Card from '../../ui/card'
import { white, black, grey2 } from '../../ui/common/colors'
import { H4 } from '../../ui/typography'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Component
class Item extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false
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

                    <p style={{color: grey2, marginTop: '1em', fontSize: '0.8em', textAlign: 'center'}}>
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
}

function itemState(state){
    return {

    }
}

export default connect(itemState, {})(withRouter(Item))