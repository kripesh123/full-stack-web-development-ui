import React from 'react'
import PropTypes from 'prop-types'

import { primary, secondary } from '../common/fonts'
const H2 = (props) => {
    const { children, font, ...others} = props

    return (
        <h2 {...others}>
            {children}

        <style jsx>{`
            h2 {
                font-family: ${font === 'primary' ? primary : secondary};
                font-size: 3em;
            }
        `}</style>
        </h2>
    )
}
H2.propTypes = {
    font: PropTypes.string
}

H2.defaultProps = {
    font: 'primary'
}
export default H2