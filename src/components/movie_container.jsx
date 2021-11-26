import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo'
import Search_banner from './search_banner'
import Movie_banner from './movie_banner'
import Movie_description from "./movie_description";
class Movie_container extends Component{

    render() {
        return <div className="App-movie-container">
            <Movie_banner/>
            <Movie_description/>
        </div>

    }
}
export default Movie_container;