import React, { Component } from 'react'

export default class Timer extends Component {
    componentDidMount(){
        setInterval(this.ticker, 1000)
    }
    constructor(props) {
        super(props)
    
        this.state = {
             clock: 0
        }
    }
    ticker=()=>{
        this.setState({clock: new Date()-this.props.start})
    }
    
    render() {
        var clock = Math.round(this.state.clock/1000)
        return (
            <div>
                <p>You visite this website since</p>
        <span>{clock}</span>
            </div>
        )
    }
}
