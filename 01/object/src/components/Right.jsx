import React, { Component } from 'react'
export default class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Right: {
                height: '600px',
                color: 'red',
                background: 'whredite',
                width: '70%',
                fontSize: '26px',
            }

        }
    }
    render() {
        return (
            <div>
                <div style={this.state.Right}>

                </div>
            </div>
        )
    }
}