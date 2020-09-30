import React from 'react'
import PropTypes from 'prop-types'

const Icon = (props) => {
    const { children, size, ...others} = props

    return (
        <i className="material-icons" {...others}>
            {children}

    <style jsx>{`
        i {
            font-size: ${size}em;
            line-height: inherit;
            vertical-align: middle
        }
    `}</style>
        </i>
    )
}

Icon.propTypes ={
    size: PropTypes.number
}

Icon.defaultProps ={
    size: 1
}

export default Icon