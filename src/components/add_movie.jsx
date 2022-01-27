import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
const axios = require("axios")

function Add_movie() {
    const [ image_link, setImage_Link ] = useState('');
    const [ movie_title, setMovie_title ] = useState('');
    const [ description, setDescription ] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: movie_title,
                image: image_link,
                content: description
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <form onSubmit={handleSubmit}>
        <div className='App-login-background'>
        <div className='App-login-container'>
            <div><h3>Dodawanie filmu</h3></div>
            
            <div> <input onChange={(e)=>{setMovie_title(e.target.value.toString())}} placeholder='Tytuł'></input></div>
            <div> <input onChange={(e)=>{setDescription(e.target.value.toString())}} placeholder='Opis'></input></div> 
            <div> <input onChange={(e)=>{setImage_Link(e.target.value.toString())}} placeholder='Link do zdjęcia'></input></div> 
            <div><button type="submit">Dodaj film</button></div>
            
            <div><Link to='/' className='App-login-register'><p>Chcesz zobaczyć dostępne już filmy?</p></Link></div>
            
        </div>
        </div>
        </form>
    )
};
export default Add_movie;