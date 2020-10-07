import React from 'react'
import PropTypes from 'prop-types'
import { white, black, primary, secondary, grey2 } from '../common/colors'
import { level1, level2, level3, level4 } from '../common/shadows'
import { primary as primaryGradient, secondary as secondaryGradient} from '../common/gradients'

const Button = (props) => {
    const { children, type, disabled, theme, ...other } = props

    return (
        <button type={type} disabled={disabled} {...other}>
            {children}
            <style jsx>{`
                button {
                    padding: 0.7em 1.7em;
                    border: none;
                    border-radius: 1.4em;
                    text-transform: uppercase;
                    font-family: 'Roboto', san serif;
                    cursor: pointer;
                    outline: none;
                    font-size: 1em;
                    color: ${ theme !== 'none' ? white : black}
                    box-shadow: ${theme !== 'none' ? level2 : 'none'}
                    background-color: ${theme === 'primary' ?  primary : theme === 'seconday' ? secondary: 'transparent'};
                    background-image: ${theme === 'primary' ?  primaryGradient : theme === 'seconday' ? secondaryGradient: 'none'};
                }
                button:hover {
                    box-shadow: ${ level3 }
                }
                button:active {
                    box-shadow: ${ level4 }
                }
                button:disabled {
                    color: ${ white }
                    box-shadow: ${ level1 }
                    background-color: ${ grey2 }
                    background-image: none;
                }
            `}</style>
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
}

Button.defaultProps = {
    type: 'button',
    disabled: false,
    theme: 'none',
}
export default Button