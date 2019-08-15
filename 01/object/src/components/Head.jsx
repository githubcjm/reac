import React, { Component } from 'react'
export default class Head extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headers: {
                height: '50px',
                color: 'white',
                background: 'blue',
                width: '100%',
                fontSize: '26px',
            }

        }
    }
    render() {
        return (
            <div>
                <header style={this.state.headers}>
                    <h3 style={{ color: 'white', float: "left" }} >千峰教育</h3>
                </header>
            </div>
        )
    }
}