import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo'
import Search_banner from './search_banner'
import Login from './login'
import Banner from './interstallar.jpg'
const axios = require("axios")

function Movie_banner(){
        return( 
        <img src={Banner} className="App-movie-banner"/>
        )
}
export default Movie_banner;