// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// App Imports
import { getList as getTopicList } from './api/actions'
import { Grid, GridCell } from '../../ui/grid'
import { grey, grey2 } from '../../ui/common/colors'
import { H3 } from '../../ui/typography'
import Loading from '../common/Loading'
import EmptyMessage from '../common/EmptyMessage'
import { connect } from 'react-redux'
import TopicItem from './Item'

//Component
class List extends PureComponent {

    static fetchData({ store }) {
        return store.dispatch(getTopicList('ASC'))
    }

    componentDidMount() {
        this.props.getTopicList('ASC')
    }

    render() {
        return (
            <div>
                {/* Top title bar */}
                <Grid style={{ backgroundColor: grey }}>
                    <GridCell style={{ padding: '2em', textAlign: 'center'}}>
                        <H3 font="secondary">
                            Topics for everyone!
                        </H3>
                        <p style={{ marginTop: '1em', color: grey2 }}>
                            A highly experienced and self-motivated Full Stack Software Developer with a demonstrated history of working in the computer software industry.
                        </p>
                    </GridCell>
                </Grid>

                {/* Topics list  */}
                <Grid>
                    <GridCell>
                        {
                            this.props.topics.isLoading
                                ? <Loading/>
                                : this.props.topics.list.length > 0
                                    ? this.props.topics.list.map(topic => (
                                        <div key={topic.id} style={{ margin: '2em', float: 'left'}}>
                                            <TopicItem topic={topic} />
                                        </div>
                                    ))
                                    : <EmptyMessage message="No Topics to show"/>
                        }
                    </GridCell>
                </Grid>
            </div>
        )
    }
}

// Component Properties 
List.propTypes = {
    topics: PropTypes.object.isRequired,
    getTopicList: PropTypes.func.isRequired
}

// Component state
function listState(state) {
    return {
        topics : state.topics
    }
}

export default connect(listState, { getTopicList })(List)