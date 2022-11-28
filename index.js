const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
const port=4444;
console.log(Register)

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://rajesh2169:Rajesh116@cluster0.2hv1wxs.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("Created mongodb database")
	})
	.catch((err)=>{
		console.log(err)
	})
app.get("/",(req,res)=>{

})
app.post("/register",(req,res)=>{
	//const {username,password}=req.body
	const username="jambalakadi jarumitaiah",password="codered"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})
app.listen(port,()=>console.log("server is started",port))
