const express=require("express")
const ejs=require("ejs")
const mongoose=require("mongoose");
const Post=require("./models/Post")


const port=3000;
const  host="127.0.0.1"

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-db')
  .then(() => console.log('Connected!'));
 
const app=express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/",async (req,res)=>{
    await Post.find({}).then(post=>{
        res.render("index",{post:post})

    })


    
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

app.post("/newpost",async (req,res)=>{
   await Post.create(req.body)
    res.redirect("/")

})
app.get("/posts/:id",async (req,res)=>{
    await Post.findById(req.params.id).then(post=>{
        res.render("post",{post})
    })

})
app.listen(port,host,()=>{
    console.log(`Server Online ... http://${host}:${port}`)
})