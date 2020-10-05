import React from 'react'
import { level1 } from '../common/shadows'

const Card = (props) => {
    const { children, ...others} = props

    return(
        <div {...others}>
            {children}

    <style jsx>{`
        div {
            border-radius: 0.2em;
            font-family: 'Roboto', sans-serif;
            box-shadow: ${ level1 }
        }
    `}</style>
        </div>
    )
}

export default Card