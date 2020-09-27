import React, { PureComponent } from "react";
import Header from "./header/Header";

class Layout extends PureComponent {

    render() {
        const { children } = this.props

        return (
            <div>
                <Header/>

                <section style={{ marginTop: '5em' }}>
                    { children }
                </section>

            </div>
        )
    }
}

export default Layout