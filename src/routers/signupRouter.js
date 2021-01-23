const express = require('express');
const signupRouter = express.Router();
const detdata = require('../model/unamepass');
signupRouter.use(express.static('./public'));
signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}] 
    });
});
signupRouter.get('/done',function(req,res){
    var item={
        name: req.query.name,
        psw: req.query.psw
    }
    var data = detdata(item);
    data.save();
    detdata.find()
    .then(function(){
        res.render("signin",
        {
            nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}]
        }); 
    })
});

module.exports =signupRouter;