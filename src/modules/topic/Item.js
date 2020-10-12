// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Card from '../../ui/card'
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

    render() {
        const { id, name, description, type, featured } = this.props.topic
        const { isLoading } = this.state
        return (
            <Card style={{ width: '25em', backgroundColor: white }}>
                <div style={{ padding: '1em 1.2em', textAlign: 'center' }}>
                    <H4 font="secondary">{name}</H4>
                    <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>
                    <p style={{ color: grey2, marginTop: '1em' }}>{type}</p><span>{featured}</span>

                </div>

            </Card>
        )
    }
}

// Component Properties
Item.propTypes ={
    topic: PropTypes.object.isRequired,
}

// Component state
function itemState(state) {
    return {

    }
}

export default connect(itemState, {})(withRouter(Item))