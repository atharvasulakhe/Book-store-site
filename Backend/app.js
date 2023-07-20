const express= require('express');
const mongoose= require('mongoose');
const router= require("./routes/book-routes");
const cors=require('cors');
const app=express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) //localhost:3001/books
mongoose.connect("mongodb+srv://admin:KLi5GgJFjDVe03vS@cluster0.vw6xd1i.mongodb.net/bookStore?retryWrites=true&w=majority").then(() => console.log("connected to database")).then(() => {
    app.listen(3000);
}).catch((err) =>console.log(err));

//password for mongodb- KLi5GgJFjDVe03vS
