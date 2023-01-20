const express=require("express")
const ejs=require("ejs")


const port=3000;
const  host="127.0.0.1"



const app=express();
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")

})
app.get("/addpost",(req,res)=>{
    res.render("add_post")

})
app.get("/post",(req,res)=>{
    res.render("post")
})

app.listen(port,host,()=>{
    console.log(`Server Online ... http://${host}:${port}`)
})