import React from 'react'
import PropTypes from 'prop-types'
import { black, grey2, grey4 } from '../common/colors'

const Input = (props) => {
    const { type, fullWidth, ...other } = props

    return (
        <div>
            <input type={type} {...other} />
            <style jsx>{`
                input {
                    outline: none;
                    padding-top: 0.8em;
                    padding-bottom: 0.4em;
                    font-size: 1em;
                    border: none;
                    background-color: transparent;
                    color: ${ black };
                    border-bottom: 1px solid ${grey2}
                    width: ${fullWidth ? '100%' : 'auto'}
                }
                input:hover {
                    border-bottom: 1px solid ${grey4}
                }
                input:active {
                    border-bottom: 1px solid ${grey4}
                }
            `}</style>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    fullWidth: PropTypes.bool
}

Input.defaultProps = {
    type: 'button',
    fullWidth: false
}

export default Input