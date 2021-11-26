import React, { Component } from 'react';
import my_logo from './Cinemaniac_logo.png';
    class Logo extends Component{
    state = {};

    render() {
        return <img src={my_logo} className="App-logo" alt="my_logo" />
    }
}
export default Logo;