import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'
export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: {
                height: '600px',
                color: 'white',
                background: 'black',
                width: '1-30%',
                fontSize: '26px',
            }

        }
    }
    render() {
        return (
            <div>
                <div >
                    <Left />
                    <Right />
                </div>

            </div>
        )
    }
}