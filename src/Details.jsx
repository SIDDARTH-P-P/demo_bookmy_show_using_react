import axios from "axios";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Details(){
    const [data,setdata] = useState(null);
    let id = location.href.split("/")[4]
    useEffect(()=>{
        axios.get(`/get_movie/${id}`)
        .then(res =>{
            setdata(res.data);
            console.log(res.data);
        })
    },[])
    return(
        <>
        <div id="back" style={{backgroundSize:"cover",backgroundImage:`url(http://localhost:3000/get_file/${data?.images[1].filename}`}}>
                <div className="container">
                <div className="row">
            <div className="col-lg-4">
                <img className=" back pt-5 pb-5 mb-5 mt-5 ms-5 ps-5" src={`http://localhost:3000/get_file/${data?.images[0].filename}`} alt=""/>
            </div>
            <div className="col-lg">
                <h1 className="pt-5 mt-5 text-light"><b>${data?.name}</b></h1>
                <h1 className="bi bi-star-fill text-danger fs-2 mt-5 "> <span className="fs-3 text-light">${data?.rating}</span> <span className="fs-4 text-light">${data?.vote} Votes</span> </h1>
                <button type="button" className="btn btn-light ps-5 pe-5 btn-sm mt-5 mb-5">${data?.language}</button>
                <h1 className="fs-1 text-light mb-5 mt-3"> <span className="fs-3 text-light" >${data?.Duration}</span> . <span className="fs-4 text-light" >${data?.category}</span> . <span className="fs-4 text-light" >${data?.year.split("T")[0]}</span>  </h1>
                <div className="row">
            <div className="col-lg-1 me-5"><button className="btn btn-warning ps-4 pe-4"  >Edit</button></div>
            <div className="col-lg-6 ms-5"><button className="btn btn-danger ps-4 pe-4" >Delet</button></div>
        </div>
            </div>
                </div>
            </div>
            <div className="ms-5"> <Link to="/"><button className="btn btn-primary mb-5">home</button></Link> </div>
            </div>
        </>
    )
}

export default Details;