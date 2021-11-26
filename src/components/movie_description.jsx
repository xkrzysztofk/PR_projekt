import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo'
import Search_banner from './search_banner'
import Login from './login'
class Movie_description extends Component{

    render() {
        return <div className="App-movie-description">
            <div className="Title">Interstellar</div> <br/>
            <div className="Rating">Ocena: 4.7 <br/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
            </div><br/>

            <div className="Text-description">
                Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych.
                Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.
            </div>

        </div>

    }
}
export default Movie_description;