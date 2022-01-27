import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
const axios = require("axios");

function Login({setToken}) {
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: name,
                password: password
            }
        }).then((response) => {
            console.log(response.data.token)
            setToken(response.data.token)
            alert("Zostałeś zalogowany");
        }).catch((error) => {
            console.log(error);
            alert("Nie udało się zalogować")
        });
    };
    return (
        <form onSubmit={handleSubmit}>
        <div className='App-login-background'>
        <div className='App-login-container'>
            <div><h3>Logowanie</h3></div>
            
            <div> <input  onChange={(e)=>{setName(e.target.value.toString())}} placeholder='Login'></input></div>
            <div> <input type="password" onChange={(e)=>{setPassword(e.target.value.toString())}} placeholder='Haslo'></input></div> 
            <div><button type="submit">Zaloguj się </button></div>
            
            <div><Link to='/signup' className='App-login-register'><p>Nie masz jeszcze konta? Koniecznie je załóż już teraz!</p></Link></div>
            
        </div>
        </div>
        </form>
    )
};
export default Login;