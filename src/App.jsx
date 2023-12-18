import Home from "./Home";
import Addmovie from "./Addmovie";
import { Link } from "react-router-dom";
import Body from "./Card"
import Details from "./Details";
import Register_login from "./Register_login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import axios from "axios";

function App(){
    let mode = import.meta.env.MODE
    if(mode == "development"){
        axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_PORT}`
    }
    if(mode == "production"){
        axios.defaults.baseURL = location.origin;
    }
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addmovie" element={<Addmovie/>}/>
            <Route path="/login" element={<Register_login/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;