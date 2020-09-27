import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../../setup/routes/home'
import { secondary } from '../../../ui/common/fonts'
import { grey4, primary } from '../../../ui/common/colors'
import { textLevel1, textLevel2 } from '../../../ui/common/shadows'

const Logo = (props) => {
    const { ...others } = props

    return (
        <Link to={home.home.path} {...others}>
            <span style={{ fontFamily: secondary, fontSize: '2em', color: grey4, textShadow: textLevel1}}>Kripesh</span>
            <p style={{ fontFamily: primary, fontSize: '0.6em', color: grey4, textShadow: textLevel2}}>Nepal's No. 1 Developer</p>
        </Link>
    )
 }

 export default Logo