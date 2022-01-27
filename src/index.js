import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './components/logo'
import Search_banner from "./components/search_banner";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import NavBar from "./components/navbar.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
