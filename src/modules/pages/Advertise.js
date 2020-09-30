import React from 'react'
import { Grid, GridCell } from '../../ui/grid'
import { grey, grey2, grey3 } from '../../ui/common/colors'
import { H3, H4 } from '../../ui/typography'
import { APP_URL } from '../../setup/config/env'
import Icon from '../../ui/icon'
import { textLevel1 } from '../../ui/common/shadows'

const Advertise = (props) => (
    <div>
        {/* Top Bar  */}
        <Grid style={{ backgroundColor: grey }}>
            <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                <H3 font="secondary">Advertise</H3>

                <p style={{ marginTop: '1em', color: grey2 }}>
                    A highly experienced and self-motivated Full Stack Software Developer.
                </p>
            </GridCell>
        </Grid>

        {/* Content  */}
        <Grid>
            <GridCell justifyCenter={true} style={{ textAlign: 'center', padding: '8em 0em' }}>
                <Icon size={4} style={{color: grey3, textShadow: textLevel1}}>looks_one</Icon>
                <H4>
                    Welcome to my kingdom
                </H4>
                <p>Welcome to the jungle Guns and Roses</p>
            </GridCell>
            <GridCell style={{ background: `url('${APP_URL}/images/stock/business/1.jpg') center center no-repeat` }} />
        </Grid>

        <Grid>
            <GridCell style={{ background: `url('${APP_URL}/images/stock/business/2.jpg') center center no-repeat` }} />
            <GridCell justifyCenter={true} style={{ textAlign: 'center', padding: '8em 0em' }}>
            <Icon size={4} style={{color: grey3, textShadow: textLevel1}}>looks_two</Icon>
                <H4>
                    Welcome to my kingdom
                </H4>
                <p>Welcome to the jungle Guns and Roses</p>
            </GridCell>
        </Grid>

        <Grid>
            <GridCell justifyCenter={true} style={{ textAlign: 'center', padding: '8em 0em' }}>
            <Icon size={4} style={{color: grey3, textShadow: textLevel1}}>looks_3</Icon>

                <H4>
                    Welcome to my kingdom
                </H4>
                <p>Welcome to the jungle Guns and Roses</p>
            </GridCell>
            <GridCell style={{ background: `url('${APP_URL}/images/stock/business/3.jpg') center center no-repeat` }} />
        </Grid>
    </div>
)

export default Advertise