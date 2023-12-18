import schema from "./schema/schema.js";
import user from "./schema/user.js";
import bcrypt from "bcrypt"
import path from "path"
import jws from "jsonwebtoken"

const {sign} = jws;

export async function userdata(req,res){
    try {
        let { username, email, phone, password } = req.body
        let check = await user.findOne({ username: username })
        if (check) {
            return res.json("Username Already Exists Use other name ! ")
        }
        let hashed = await bcrypt.hash(password, 10)
        let result = await user.create({
            username,
            email,
            phone,
            password: hashed
        })
        if (result) {
            return res.json("Account Successfully Created");
        }
        return res.json("Error to create account !")
    } catch (error) {
        console.log(error);
    }
}

export async function login(req, res) {
    try {
        let { username, password } = req.body
        let userdata = await user.findOne({ username: username })
        if (!userdata) {
            return res.json("User Not Found !")
        }
        if (userdata) {
            let result = await bcrypt.compare(password, userdata.password)
            if (result) {
                let token = await sign({ username: userdata.username, id: userdata._id }, process.env.SCRET_KEY, { expiresIn: "1h" })
                return res.json({ msg: "Successfully login", token })
            }
          return  res.json("Invalid username or password")
        }
        res.json("Error to login")
    } catch (error) {
        console.log(error);
    }
}


//add movie
export async function add(req, res) {
    try {
        let { name, language, year, rating, vote, category, Duration } = req.body
        let images = req.files
        let check = await schema.findOne({ name: name })
        if (check) {
            return res.status(200).json("Film Already Exists !")
        }
        let result = await schema.create({
            name,
            language,
            year,
            rating,
            vote,
            category,
            Duration,
            images,
        })
        if (result) {
            return res.status(200).json("Film Successfully addded")
        }
        return res.status(200).json("Error add movie !")
    } catch (error) {
        console.log(error);
    }
}

export function get_file(req, res) {
    let { file } = req.params
    return res.sendFile(path.resolve(`./server/images/${file}`))
}

export async function get_data(req, res) {
    let result = await schema.find()
    res.json(result)
}


export async function get_movie(req, res) {
    let { id } = req.params
    let result = await schema.findOne({ _id: id })
    res.json(result)

}