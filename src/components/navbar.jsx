import React, { Component } from 'react';
import { BrowserRouter, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar({token, setToken}){


        return( <div className='App-navbar-background'>


                    <div className='App-navbar-container'><Link to="/" className='App-navbar-link'>Home</Link></div>
               
        
                
                    <div className='App-navbar-container'><Link to="/add" className='App-navbar-link'>Add</Link></div>
              
                    {token ? <div><button onClick={setToken=""} className='App-navbar-logout'>Logout</button></div> :  <div className='App-navbar-container'><Link to="/signin" className='App-navbar-link'>Sign in</Link></div>}
                    
             
                
                    <div className='App-navbar-container'><Link to="/signup" className='App-navbar-link'>Sign up</Link></div>
                
           
        </div>
        
        )
    }

export default NavBar;