const mongoose=require("mongoose");

const connect=()=>{
    try{
        console.log("Smile smile I am connected!!")
        return mongoose.connect("mongodb+srv://parul:paru@cluster0.fb0so.mongodb.net/middleware?retryWrites=true&w=majority");
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connect;
