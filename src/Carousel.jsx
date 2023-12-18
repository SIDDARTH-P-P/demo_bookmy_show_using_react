import "./style.css";

function Carousel() {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide pt-2 bg-opacity-50 pb-2 bg-secondary bg-gradient"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="./cs1.webp" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="./cs2.webp" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="./cs3.webp" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="./cs3.webp" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;