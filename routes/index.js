const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');
const router = express.Router();

router.get('/home',(req,res)=>{
    if(!req.query.address){
        return res.render('home',{error:'',data:''});
    }
    console.log(req.query.address);
    geocode(req.query.address,(error,{lattitude,longitude,location}={})=>{
        if(error){
             req.flash('error_msg',error);
             res.send(JSON.stringify({error:error,data:''}));
        }
        else{
            forecast(lattitude,longitude, (error, forecastInfo) => {
                console.log("coordinates found")
                if(error){
                    req.flash('error_msg',error);
                    res.send(JSON.stringify({error:error,data:''}));
                }else{
                    console.log('weather report found');
                    res.send(JSON.stringify({error:'',data:forecastInfo}));
                }
            });
        }
    });
});

router.get('/about',(req,res)=>{
    res.render('about');
})

router.get('/features',(req,res)=>{
    res.render('features');
})
    
module.exports =router;