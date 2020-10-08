import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import Header from "./header/Header";
import { renderIf } from "../../setup/helper";
import { level2 } from "../../ui/common/shadows";
import { black, white } from "../../ui/common/colors";
import Icon from "../../ui/icon";
import { connect } from "react-redux";
import { messageHide } from './api/actions'

class Layout extends PureComponent {

    render() {
        const { children } = this.props

        return (
            <div>
                <Header />

                <section style={{ marginTop: '5em' }}>
                    {children}
                </section>

                {/* Messages */}
                {
                    renderIf(this.props.common.message.open, () => (
                        <div style={{
                            boxShadow: level2,
                            position: 'fixed',
                            right: '2em',
                            bottom: '2em',
                            backgroundColor: black,
                            color: white,
                            borderRadius: '3em',
                            maxWidth: '30em'
                        }}>
                            <span style={{
                                float: 'left',
                                padding: '1em 0em 1em 2em',
                                marginRight: '4em'
                            }}>
                                {this.props.common.message.text}
                            </span>

                            <Icon style={{ position: 'absolute', padding: '1em', cursor: 'pointer', right: '0.5em', top: 0 }}
                                onClick={this.props.messageHide}
                            >
                                close
                            </Icon>
                        </div>
                    ))
                }

            </div>
        )
    }
}

// Component properties
Layout.propTypes = {
    common: PropTypes.object.isRequired,
    messageHide: PropTypes.func.isRequired
}

// component state
function commonState(state) {
    return {
        common: state.common
    }
}

export default connect(commonState, { messageHide })(Layout)