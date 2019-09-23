import React from 'react';
// import Button from './Button'

const Clock = (props) => {
    return (
        <div>
            <p>Timer</p>
            <h1>{props.time}</h1>
            <button onClick = {() => props.handleClickStart()}> Start </button>
            <button onClick = {() => props.handleClickStop()}> Stop </button>
            <button onClick = {() => props.handleClickReset()}> Reset </button>
        </div>
    )
}

export default Clock
