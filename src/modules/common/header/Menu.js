import React from 'react'

const Menu = (props) => {

    const { children, ...others } = props

    return (
        <div {...others}>
            {children}
        </div>
    )
}

export default Menu