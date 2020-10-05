import React, { PureComponent } from 'react'

import { getList as getBlogList } from '../blog/api/actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { grey, grey2 } from '../../ui/common/colors'
import { GridCell, Grid } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import BlogItem from '../../modules/blog/Item'

class Blogs extends PureComponent {

    static fetchData({ store }) {
        return store.dispatch(getBlogList())
    }

    componentDidMount() {
        this.props.getBlogList()
    }

    render() {
        const { isLoading, list } = this.props.blogs

        return (
            <div>
                <Grid style={{ backgroundColor: grey }}>
                    <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                        <H3 font="secondary"> All Blogs </H3>
                        <p style={{ marginTop: '1em', color: grey2 }}>
                            A highly experienced and self-motivated Full Stack Software Developer with a demonstrated history of working in the computer software industry.
                        </p>
                    </GridCell>
                </Grid>

                <Grid>
                    {
                        isLoading ? null : list.map(blog => (
                            <GridCell key={blog.id} style={{textAlign: 'center' }}>
                                <BlogItem blog={blog}/>
                            </GridCell>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}

Blogs.prototypes = {
    blogs: PropTypes.object.isRequired,
    getBlogList: PropTypes.func.isRequired
}

function allBlogsState(state) {
    return {
        blogs: state.blogs
    }
}

export default connect(allBlogsState, { getBlogList })(Blogs)