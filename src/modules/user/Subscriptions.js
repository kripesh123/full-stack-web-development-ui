import React, { PureComponent } from "react";
import PropTypes from 'prop-types'
import { getListByUser } from "../subscription/api/actions";
import { Grid, GridCell } from "../../ui/grid";
import { grey, grey2 } from "../../ui/common/colors";
import Loading from "../common/Loading";
import EmptyMessage from "../common/EmptyMessage";
import { connect } from "react-redux";
import { H3 } from "../../ui/typography";
import SubscriptionItem from '../../modules/subscription/Item'

class Subscriptions extends PureComponent {

    static fetchData({ store }) {
        return store.dispatch(getListByUser())
    }

    componentDidMount() {
        this.props.getListByUser()
    }

    render() {
        return (
            <div>
                {/* Top title bar */}
                <Grid style={{ backgroundColor: grey }}>
                    <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                        <H3 font="secondary"> My Subscriptions </H3>
                        <p style={{ marginTop: '1em', color: grey2 }}>
                            A highly experienced and self-motivated Full Stack Software Developer with a demonstrated history of working in the computer software industry.
                        </p>
                    </GridCell>
                </Grid>

                {/* Subscription List */}
                <Grid>
                    <GridCell>
                        {
                            this.props.subscriptions.isLoading
                                ? <Loading />
                                : this.props.subscriptions.list && this.props.subscriptions.list.length > 0
                                    ? this.props.subscriptions.list.map(subscription => (
                                        <div key={subscription.id} style={{ margin: '2em', float: 'left' }}>
                                            <SubscriptionItem subscription={subscription} />
                                        </div>
                                    ))
                                    : <EmptyMessage message="You are not subscribed to any topics yet" />
                        }
                    </GridCell>
                </Grid>
            </div>
        )
    }
}

// Component properties
Subscriptions.propTypes = {
    subscriptions: PropTypes.object.isRequired,
    getListByUser: PropTypes.func.isRequired
}

//state
function subscriptionsState(state) {
    return {
        subscriptions: state.subscriptionsByUser
    }
}

export default connect(subscriptionsState, { getListByUser })(Subscriptions)