import React from 'react'
import PropTypes from 'prop-types'

import { primary, secondary } from '../common/fonts'
const H5 = (props) => {
    const { children, font, ...others} = props

    return (
        <h5 {...others}>
            {children}

        <style jsx>{`
            h5 {
                font-family: ${font === 'primary' ? primary : secondary};
                font-size: 1.5em;
            }
        `}</style>
        </h5>
    )
}
H5.propTypes = {
    font: PropTypes.string
}

H5.defaultProps = {
    font: 'primary'
}
export default H5