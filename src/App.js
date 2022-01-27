import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/login';
import Home from './components/home';
import Register from './components/register';
import Add_movie from './components/add_movie';
import Details from './components/details';
import {useState} from "react"
function App() {
  const [token,setToken] = useState();
  console.log(token)
  return (
    <div>
      <NavBar token={token} setToken={setToken}></NavBar>
      <Routes>
        <Route path="/signin" element = {<Login setToken={setToken}/>}></Route>
        <Route path="/signup" element = {<Register/>}></Route>
        <Route exact path="/" element = {<Home />}></Route>
        <Route path ="/add" element = {<Add_movie/>}></Route>
        <Route path ="/details/:movieid" element = {<Details/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
