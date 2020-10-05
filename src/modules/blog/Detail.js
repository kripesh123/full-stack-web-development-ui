import React, { PureComponent } from "react"
import PropTypes from 'prop-types'
import { get } from "./api/actions"
import { renderIf } from "../../setup/helper"
import { grey, grey2 } from "../../ui/common/colors"
import { GridCell, Grid } from "../../ui/grid"
import Card from "../../ui/card"
import { routeImage, routes } from "../../setup/routes"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"
import { H3, H2, H4 } from "../../ui/typography"

class Detail extends PureComponent {

    static fetch({ store, params }) {
        return store.dispatch(get(params.slug))
    }

    componentDidMount() {
        this.refresh(this.props.match.params.slug)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.slug !== this.props.match.params.slug) {
            this.refresh(this.props.match.params.slug)
        }
    }

    refresh = (slug) => {
        this.props.get(slug)
    }

    render() {
        const { error, isLoading, item } = this.props.blog

        return (
            <div>
                {
                    !error
                        ? isLoading
                            ? null
                            :renderIf(item && item.id, () => (
                        <div>
                            <Grid style={{ backgroundColor: grey }}>
                                <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                                    <H3 font="secondary"> Blog </H3>
                                </GridCell>
                            </Grid>

                            <Grid gutter={true} alignCenter={true} style={{ padding: '2em'}}> 
                                <GridCell style={{ maxWidth: '35em'}}>
                                    <Card>
                                        <img src={routeImage + item.image} alt={item.title} style={{width: '100%'}}/>
                                    </Card>
                                </GridCell>

                                <GridCell style={{ textAlign: 'center'}}>
                                    <H2 font="secondary">
                                        {item.title}
                                    </H2>
                                    <H4 style={{ marginTop: '1em'}}>
                                        {item.description}
                                    </H4>
                                    <p style={{ marginTop:'0.5em', color: grey2}}>
                                        Launch on {new Date(parseInt(item.createdAt)).toDateString()}
                                    </p>
                                </GridCell>
                            </Grid>
                        </div>
                    ))
                : <Redirect to={routes.home.path} />
                }
            </div>
        )
    }
}

Detail.propTypes = {
    blog: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired
}

function detailState(state) {
    return {
        blog: state.blog
    }
}

export default withRouter(connect(detailState, { get })(Detail))