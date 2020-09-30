import React from 'react'
import PropTypes from 'prop-types'

import { primary, secondary } from '../common/fonts'
const H6 = (props) => {
    const { children, font, ...others} = props

    return (
        <h6 {...others}>
            {children}

        <style jsx>{`
            h6 {
                font-family: ${font === 'primary' ? primary : secondary};
                font-size: 1.25em;
            }
        `}</style>
        </h6>
    )
}
H6.propTypes = {
    font: PropTypes.string
}

H6.defaultProps = {
    font: 'primary'
}
export default H6