import "./style.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";





function Body() {
  const [datas, setcard] = useState(null);
  useEffect(() => {
    axios.get(`/api`)
      .then(res => {
        setcard(res.data)
      })
  }, [])
  return (
    <>
      {
        datas?.map((item, index) => (
          <Card key={index}>
              <Link to={`/details/${item._id}`}>
                <div className="card  wd rounded-3 mb-4">
                  <img src={`http://localhost:3000/get_file/${item.images[0].filename}`} className="card-img-top img" alt="..."/>
                    <h5 className=" rounded-top bi bi-star-fill text-danger ps-4 p  crd"> <span className="text-light ps-1">{item.rating}</span> <span className="text-light ps-3">{item.vote} Votes</span> </h5>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.category}</p>
                    </div>
                </div>
              </Link>
          </Card>
        ))
      }
    </>
  );
}


function Card({ children }) {
  return(
    <div className="col-lg-3 pt-5">
        {children}
      </div>
  );
}

export default Body;