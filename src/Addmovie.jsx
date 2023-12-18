import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Addmovie(){
    const navigate = useNavigate();
    function add(event){
        event.preventDefault();
        let formdata = new FormData(event.target);
        axios.post(`/api`,formdata,{
            
    }).then(res=> {
        if(res.status == 200){
             alert(res.data)
           return navigate("/")
        }
    })
    }

    return(
        <>
            <div className="container">
    <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
            <h1 className="mt-5 pt-5">Add Movies</h1>
            <form onSubmit={add} className="form-control p-5" action="">
                <input className="form-control" type="text" name="name" placeholder="Name of movie"/>
                <input className="form-control" type="text" name="language" id="" placeholder="language"/>
                <input className="form-control" type="date" name="year" id="" placeholder="Year"/>
                <input className="form-control" type="text" name="rating" placeholder="Rating"/>
                <input className="form-control" type="text" name="vote" id="" placeholder="Vole"/>
                <input className="form-control" type="text" name="category" placeholder="Category"/>
                <input className="form-control" type="text" name="Duration" id="" placeholder="Time duration"/>
                <label className="form-control"  htmlFor="banner_image"> Select poster image</label>
                <label className="form-control" htmlFor="poster_image">Select banner image</label>
                <input id="banner_image" className="form-control" type="file" name="banner_image" />
                <input id="poster_image" type="file" name="poster_image" />
                <input className="form-control" type="submit" value="Upload"/>
            </form>
            <span className="ps-5 fs-5 ps"><Link to="/">back</Link></span>
        </div>
        <div className="col-lg-4"></div>
    </div>
</div>
        </>
    );
}

export default Addmovie;