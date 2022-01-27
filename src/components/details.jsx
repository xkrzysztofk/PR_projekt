import React, { Component,useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import Banner from './interstallar.jpg'
import Axios from "axios"
import {useParams} from "react-router-dom"

function Details(){
    const {movieid} = useParams()
    console.log(movieid)
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get("https://pr-movies.herokuapp.com/api/movies/" + movieid)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='App-details-background'>
        <div className='App-details-container'>
        <img className='App-details-image' src={data.image} alt="W3Schools.com"/>
            <div className='App-details-form'>
            <div><h3>{data.title}</h3></div>
            <div><p>{data.content}</p></div>
            </div>
        </div>
        </div>
    )
};
export default Details;