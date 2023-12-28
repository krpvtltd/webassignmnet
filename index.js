// const { SSL_OP_TLS_BLOCK_PADDING_BUG} = require('constants')
const express = require('express');
const path = require('path');
const app = express();

app.get("/", function(req, res,){
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get("/Id's",function(req,res){
    res.sendFile(path.join(__dirname,'Id.html'))
});

app.get("/contactus",function(req,res){
    res.sendFile(path.join(__dirname,'contactus.html'))
});

// app.get('/blog',function(req,res){
//     res.render(path.join(__dirname,'../blog.js'))
// })



app.listen(3000);
