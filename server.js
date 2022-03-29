const app=require("./index");
const connect=require("./config/db");
app.listen(1212,async()=>{
    try{
        console.log("listing port 1212")
       return await  connect();

    }
    catch(err){
        console.log(err);
    }
})