import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register_login() {
    const navigate = useNavigate()
    function add_register(event) {
        event.preventDefault();
        let username = event.target[0].value
        let email = event.target[1].value
        let phone = event.target[2].value
        let password = event.target[3].value
        axios.post(`/user`, { username, email, phone, password })
            .then(res => {
                alert(res.data);
                return window.location.reload(true)
            })
    }

    function login(event) {
        event.preventDefault();
        let username = event.target[0].value
        let password = event.target[1].value
        axios.post(`/login`, { username, password })
            .then(res => {
                if (res.data.msg == "Successfully login") {
                    console.log(res.data);
                    alert(res.data.msg)
                    return navigate("/")
                }
                alert(res.data)
            })
    }



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>

                    <div className="col-lg-4">
                        <h1 className="fs-4 mt-5">login or create account</h1>
                        <form onSubmit={add_register}>
                            <input className="form-control" type="text" name="username" placeholder="username" />
                            <input className="form-control" type="email" name="email" placeholder="email" />
                            <input className="form-control" type="text" name="phone" placeholder="phone" />
                            <input className="form-control" type="password" name="password" placeholder="password" />
                            <input className="form-control" type="submit" value="signin" />
                        </form>

                        <form onSubmit={login} className="pt-5 mt-5">
                            <input className="form-control" type="text" name="username" id="" placeholder="username" />
                            <input className="form-control" type="password" name="password" placeholder="password" />
                            <input className="form-control" type="submit" value="Login" />
                        </form>
                        <a href="/">back</a>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    );
}

export default Register_login;