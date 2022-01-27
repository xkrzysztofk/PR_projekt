import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
const axios = require('axios');

function Register(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: name,
                password: password,
                email: email
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };

    
    return (
        <form onSubmit={handleSubmit}>
        <div className='App-register-background'>
        <div className='App-register-container'>
            <div><h3>Rejestracja</h3></div>
            
            <div> <input onChange={(e)=>{setName(e.target.value.toString())}} placeholder='Login'></input></div>
            <div> <input type="password" onChange={(e)=>{setPassword(e.target.value.toString())}} placeholder='Haslo'></input></div> 
            <div> <input onChange={(e)=>{setEmail(e.target.value.toString())}} placeholder='Email'></input></div> 
            <div><button type="submit">Zarejestruj się</button></div>
            
            <div><Link to='/signin'  className='App-register-login'><p>Masz już konto? Zaloguj się już teraz!</p></Link></div>
            
        </div>
        </div>
        </form>
    )
};
export default Register;