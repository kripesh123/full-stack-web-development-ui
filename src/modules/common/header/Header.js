import React from 'react'
import { primary as primaryGradient } from "../../../ui/common/gradients"
import { level1 } from "../../../ui/common/shadows"
import { Grid, GridCell } from '../../../ui/grid'
import Logo from './Logo'
import Menu from './Menu'
import MenuItem from './MenuItem'
import home from '../../../setup/routes/home'

function Header(props) {
    return (
        <header style={{
            backgroundImage: primaryGradient,
            boxShadow: level1,
            padding: '0 2em',
            height: '5em',
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0
        }}>

            <Grid>
                <GridCell>
                    <Logo style={{ marginTop: '0.5em', float: 'left'}}/>
                    <Menu style={{ marginTop: '1em', marginLeft: '1em', float: 'left'}}>
                        <MenuItem to={home.about.path}> About</MenuItem>
                        <MenuItem to={home.team.path}> Team</MenuItem>
                        <MenuItem to={home.advertise.path}> Advertise</MenuItem>
                        <MenuItem to={home.product.path}> Product</MenuItem>
                        <MenuItem to={home.blog.path}> Blog</MenuItem>
                    </Menu>
                </GridCell>
            </Grid>
        </header>
    )
}

export default Header