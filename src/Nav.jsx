import "./style.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav(){
  const [login , setlogin] = useState(false)
    return(
        <>
          <nav className="navbar navbar-expand-lg bgclr pt-3 pb-3">
    <img className="logo ms-5 ps-5" src="./PngItem_5784441.png" alt=""/>
    <div className="container">
    <input oninput="search()" onchange="search_item()" list="list" id="search" className="search" type="search"
        placeholder=" for Movies, Events, Plays, Sports and Activities"/>
      <datalist id="list">
      </datalist>

      <div className="btns">
        <div id="nav_button">
          {
            login ?  <Link to="/login"><button className="btn btn-primary me-5">Login</button></Link> : <><Link to="/addmovie"><button class="btn btn-warning me-5">Add Movie</button></Link>  <button onclick="logout()" class="btn btn-danger me-5">Logout</button></>
          }
          </div>
        </div>
      </div>
  </nav>

  <h1 className="fs-6 bg-dark pt-2 pb-2 ps-5 text-light mb-0"><span className="ps-5">Movies</span><span
      className="ps-4">Stream</span><span className="ps-4">Event</span><span className="ps-4">Play</span><span
      className="ps-4">Sports</span><span className="ps-4">Activities</span>
    <span className="pl fs">ListYourShows</span><span className="ps-4 fs">Corportates</span><span
      className="ps-4 fs">Offers</span><span className="ps-4 fs">Gift Cardes</span>
  </h1>
        </>
    );
}

export default Nav;