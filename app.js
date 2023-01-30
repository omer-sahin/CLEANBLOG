const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Post = require("./models/Post");
const methodOverride = require("method-override");
const controller = require("./controller/controller");

const port = 3000;
const host = "127.0.0.1";

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/cleanblog-db")
  .then(() => console.log("Connected!"));

const app = express();

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", controller.get);
app.get("/about", controller.about);
app.get("/addpost", controller.addPosts);
app.get("/post", controller.posts);

app.post("/newpost", controller.newposts);
app.get("/posts/:id", controller.OnePosts);

app.get("/edit", controller.editPosts);

app.get("/posts/update/:id", controller.getUpdatePosts);

app.put("/posts/:id", controller.UpdatePosts);

app.delete("/posts/:id", controller.deletePosts);
app.listen(port, host, () => {
  console.log(`Server Online ... http://${host}:${port}`);
});
