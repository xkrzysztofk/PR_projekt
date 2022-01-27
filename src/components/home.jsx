import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import NavBar from "./navbar.jsx";

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
};
export default Home;