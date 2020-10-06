import React from 'react'
import PropTypes from 'prop-types'
import { grey2 } from '../../ui/common/colors'

const Loading = (props) => (
    <p style={{color: grey2, textAlign: 'center', padding:'2em'}}>{props.message ? props.message : 'loading..........'}</p>
)

Loading.propTypes = {
    message: PropTypes.string
}

export default Loading