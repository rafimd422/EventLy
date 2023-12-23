import { Schema, model, models, Document } from "mongoose";

const userSchema = new Schema({
    clerkId:{
        type:String, requred:true, unique:true,
    },
    email:{type:String, required:true, unique:true},
    username:{type:String, required:true, unique:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    photo:{type:String, required:true},
})
const user = models.User || model('User', userSchema);

