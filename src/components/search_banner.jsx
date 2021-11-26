import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Search_banner extends Component{

    render() {
        return <div className="App-search-box">
                    <div className="input-group">
                        <input type="search" className="form-control rounded" placeholder="Szukaj" aria-label="Szukaj" aria-describedby="search-addon"/>
                        <button type="button" className="btn btn-outline-primary App-button-search" >Szukaj</button>
                    </div>
                </div>

    }
}
export default Search_banner;