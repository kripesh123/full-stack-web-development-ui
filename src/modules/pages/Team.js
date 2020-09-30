import React from 'react'
import { Grid, GridCell } from '../../ui/grid'
import ImageTile from '../../ui/image/Tile'
import { H5, H2 } from '../../ui/typography'
import { level1 } from '../../ui/common/shadows'
import { APP_URL } from '../../setup/config/env'

const Team = (props) => (
    <Grid alignCenter={true} style={{ padding: '2em'}}>
        {/* Left Content */}
        <GridCell>
            <Grid gutter={true} alignCenter={true}>
                <GridCell justifyCenter={true}>
                    <ImageTile width={300} height={530} shadow={level1} image={`${APP_URL}/images/stock/team/1.jpg`}/>
                </GridCell>

                <GridCell>
                    <Grid>
                        <GridCell>
                        <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/team/2.jpg`}/>
                        </GridCell>
                    </Grid>
                    <Grid>
                        <GridCell>
                    <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/team/3.jpg`} style={{marginTop: '1.9em'}}/>                        
                        </GridCell>
                    </Grid>
                </GridCell>
            </Grid>
        </GridCell>
        {/* Right Content */}
        <GridCell style={{ textAlign: 'center'}}>
            <H2 font="secondary">About Team - Kripesh Bista</H2>

            <H5 style={{ marginTop: '0.5em'}}>
                A highly experienced and self-motivated Full Stack Software Developer with a demonstrated history of working in the computer software industry.
            </H5>
        </GridCell>
    </Grid>
)

export default Team