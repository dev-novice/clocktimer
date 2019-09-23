import React,{Component} from 'react';
import Clock from './Clock'

class App extends Component{
    constructor(){
        super()
        this.state = {
            time : 0
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleStart() {
        this.timer = setInterval(()=>
        this.setState({
            time: this.state.time+1
        }),1000)
    }
    handleStop() {
        clearInterval(this.timer)  
    }
    handleReset() {
        this.setState({
            time : 0
        })  
    }
    render() {
        return (
            <div className="DottedBox">
                <Clock time={this.state.time} 
                 handleClickStart = {this.handleStart}
                 handleClickStop = {this.handleStop}
                 handleClickReset = {this.handleReset} />
            </div>
        )
    }
}

export default App
