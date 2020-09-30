import React from 'react'
import {Grid, GridCell} from '../../ui/grid'
import { H1 , H4 } from '../../ui/typography'
import { APP_URL } from '../../setup/config/env'
import { white } from '../../ui/common/colors'
import { textLevel1 } from '../../ui/common/shadows'

const Home = (props) => (
    <div>
        <Grid alignCenter={true} style={{
            backgroundImage: `url('${APP_URL}/images/cover.png')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            height: 'calc(100vh - 5em)',
            textAlign: 'center',
            color: white
        }}>
            <GridCell>
                <H1 font="secondary" style={{ textShadow: textLevel1}}>Kripesh Bista</H1>
                <H4 style={{ textShadow: textLevel1, marginTop: '0.5em'}}>
                    Not Your average Developer
                </H4>
            </GridCell>
        </Grid>
    </div>
)

export default Home