import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Movie_container from "./movie_container";
class Content extends Component{

    render() {
        return <div className="App-content">
            <Movie_container/>
            <Movie_container/>
            <Movie_container/>
            <Movie_container/>
            <Movie_container/>
            <Movie_container/>
            <Movie_container/>
            <Movie_container/>
            <Movie_container/>
        </div>

    }
}
export default Content;