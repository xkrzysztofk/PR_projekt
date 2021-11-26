import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo'
import Search_banner from './search_banner'
import Login from './login'
class Header extends Component{

    render() {
        return <div className="App-header">
            <Logo></Logo>
            <Search_banner></Search_banner>
            <Login></Login>
        </div>

    }
}
export default Header;