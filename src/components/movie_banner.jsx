import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo'
import Search_banner from './search_banner'
import Login from './login'
import Banner from './interstallar.jpg'
class Movie_banner extends Component{

    render() {
        return <img src={Banner} className="App-movie-banner"/>

    }
}
export default Movie_banner;