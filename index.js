const express = require("express")
const app= express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({ extended: false }));

app.get("/data",(req,res)=>{
    // console.log("hello World");
    res.header("Access-Control-Allow-Origin", "*");
    res.send({
        course: "Getting Started with React",
        duration: "4-weeks",
        startDate: "7th-Oct-2022",
        endDate:"6th-Nov-2022",
        certification:"after final project submission",
        status:'ended'
    })
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;

    if (!email){
        return "Enter your Email"
    }
    if(!password){
        return "Enter Your Password"
    }
    let emailValidator = "Admin@ncl.com";
    let passValidator = "Admin123";
    
    if(email == emailValidator && password == passValidator){
        res.send({
            success:true
        })
        return 
    }
    else{
        return res.send({
            success:false
        })
    }
    // res.send("Running")
})


app.post("/status",(req,res)=>{
    console.log("Completed",req.body);
    res.send("Good Work, Keep it up")
})


app.listen(8080, ()=>{
    console.log("Server is running on nodejs port 8080")
})