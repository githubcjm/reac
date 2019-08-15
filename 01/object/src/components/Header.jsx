import React, { Component } from 'react'
export default class Footer extends Component {
    constructor(props) {
        super(props)
        // Model
        this.state = {
            title: '今日头条',
            bool: 0,
            msg: '返回',
            height: "50px",
            style: {
                height: '50px',
                width: '100%',
                lineHeight: '50px',
                backgroundColor: 'red',
                textAlign: 'center',
                color: 'white',
                marginBottom: '3px'
            },
            backclass: {
                color: 'black',
                height: '100%',
                display: 'block',
                float: 'left',
            },
            search: {
                float: 'right',
                width: '80px',
                height: '30px',
                lineHeight: '30px',
                marginTop: '10px'
            }
        }
    }
    render() {
        return (<div>
            <header style={this.state.style}>
                {this.state.title}
                <div style={this.state.backclass}>
                    {this.state.msg}
                </div>
                <input type="button" value="搜索" style={this.state.search} />
            </header>
            <header style={this.state.style} >
                {this.state.title}
                {this.state.bool ? '返回' : ''}
                <input type="button" value="搜索" style={this.state.search} />
            </header>
            <header style={this.state.style}>
                {this.state.title}
            </header>

        </div>)
    }
}