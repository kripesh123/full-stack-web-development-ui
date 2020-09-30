import React from 'react'
import { Grid, GridCell } from '../../ui/grid'
import ImageTile from '../../ui/image/Tile'
import { level1 } from '../../ui/common/shadows'
import { APP_URL } from '../../setup/config/env'
import { H2, H5 } from '../../ui/typography'


const About = (props) => (
    <Grid alignCenter={true} style={{ padding: '2em'}}>
        {/* Left Content */}
        <GridCell>
            <Grid gutter={true} alignCenter={true}>
                <GridCell justifyCenter={true}>
                    <ImageTile width={300} height={530} shadow={level1} image={`${APP_URL}/images/stock/about-us/1.jpg`}/>
                </GridCell>

                <GridCell>
                    <Grid>
                        <GridCell>
                        <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/about-us/2.jpg`}/>
                        </GridCell>
                    </Grid>
                    <Grid>
                        <GridCell>
                    <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/about-us/3.jpg`} style={{marginTop: '1.9em'}}/>                        
                        </GridCell>
                    </Grid>
                </GridCell>
            </Grid>
        </GridCell>
        {/* Right Content */}
        <GridCell style={{ textAlign: 'center'}}>
            <H2 font="secondary">About Us - Kripesh Bista</H2>

            <H5 style={{ marginTop: '0.5em'}}>
                A highly experienced and self-motivated Full Stack Software Developer with a demonstrated history of working in the computer software industry.
            </H5>
        </GridCell>
    </Grid>
)

export default About