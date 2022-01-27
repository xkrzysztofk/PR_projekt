import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie_banner from './movie_banner';
import Movie_description from './movie_description';
import Movie_container from "./movie_container";
import Banner from './interstallar.jpg';
import Axios from 'axios'
import {Link} from 'react-router-dom'

function Content() {
    const [data, setData] = useState([])
    useEffect(() => {
        Axios.get("https://pr-movies.herokuapp.com/api/movies")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const arr = data.map((data, index) => {
        return (
                <div className="App-movie-container">
                    <img src={data.image} className="App-movie-banner" />
                    <div className="App-movie-description">
                        <div className="Title">{data.title}</div> <br />
                        <div className="Rating">Ocena: 4.7 <br />
                            <link rel="stylesheet"
                                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div><br/>
                        <Link to={"/details/" + data.id }>Przejdź do filmu</Link> 
                        <div className="Text-description">
                            {data.content}
                        </div>

                    </div>
                </div>
        )
    })

    return (
        <div className="App-content">{arr}</div>
        // <div className="App-content">
        //     <div className="App-movie-container">
        //     <img src={Banner} className="App-movie-banner"/>
        //     <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        //     <img src={Banner} className="App-movie-banner"/>
        //     <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        //     <img src={Banner} className="App-movie-banner"/>
        //     <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        // <img src={Banner} className="App-movie-banner"/>
        // <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        // <img src={Banner} className="App-movie-banner"/>
        // <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        // <img src={Banner} className="App-movie-banner"/>
        // <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        // <img src={Banner} className="App-movie-banner"/>
        // <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        // <img src={Banner} className="App-movie-banner"/>
        // <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // <div className="App-movie-container">
        // <img src={Banner} className="App-movie-banner"/>
        // <div className="App-movie-description">
        //     <div className="Title">Interstellar</div> <br/>
        //     <div className="Rating">Ocena: 4.7 <br/>
        //         <link rel="stylesheet"
        //               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star checked"></span>
        //         <span className="fa fa-star"></span>
        //     </div><br/>

        //     <div className="Text-description">
        //         Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
        //         Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
        //     </div>

        // </div>
        // </div>
        // </div>
    )
}
export default Content;