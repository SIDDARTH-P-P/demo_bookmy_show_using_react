import mongoose from "mongoose";

const user = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:Number},
    password:{type:String},
})

export default mongoose.model.users || mongoose.model("user",user)