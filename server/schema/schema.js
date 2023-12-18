import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{type:String},
    language:{type:String},
    year:{type:Date},
    rating:{type:String},
    vote:{type:String},
    category:{type:String},
    Duration:{type:String},
    images:{type:Array},
})


export default mongoose.model.movies || mongoose.model("movie",schema)