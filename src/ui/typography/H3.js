import React from 'react'
import PropTypes from 'prop-types'

import { primary, secondary } from '../common/fonts'
const H3 = (props) => {
    const { children, font, ...others} = props

    return (
        <h3 {...others}>
            {children}

        <style jsx>{`
            h3 {
                font-family: ${font === 'primary' ? primary : secondary};
                font-size: 2em;
            }
        `}</style>
        </h3>
    )
}
H3.propTypes = {
    font: PropTypes.string
}

H3.defaultProps = {
    font: 'primary'
}
export default H3