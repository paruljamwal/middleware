const mongoose=require("mongoose");

const bookschema=new mongoose.Schema({
    name:{type:String,required:true},

},
{
    timestamps:true,
    versionKey:false
 
});

const bookmodel=mongoose.model("book",bookschema);

module.exports=bookmodel;