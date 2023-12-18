import Nav from "./Nav";
import Carousel from "./Carousel";
import Body from "./Card";

export default function Home() {
    return(
        <>
        <Nav />
        <Carousel/>
        <div className="container">
            <div className="row">
                <Body/>
            </div>
        </div>
    </>
    );
}