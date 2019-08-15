import React, { Component } from 'react'
export default class Left extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: {
                height: '600px',
                color: 'white',
                background: 'black',
                width: '30%',
                fontSize: '26px',
            }

        }
    }
    render() {
        return (
            <div>
                <div style={this.state.left}>

                </div>
            </div>
        )
    }
}