import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    desc:{
        type:String
    },
    status:{
        type:Boolean
    },
    queiry:{
        type:Number
    }
})

export default mongoose.model('Product',productSchema)