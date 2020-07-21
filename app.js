const http = require('http');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const PORT = process.env.PORT || 3000
const server = http.createServer((req,res)=>{
    

    geocode('New Delhi',(error,{lattitude,longitude,location})=>{
        
        if(error){
            console.log(error);
        }
        else{
            forecast(lattitude,longitude, (error, forecastInfo) => {
                
                if(error){
                    console.log(error)
                }

                res.end(JSON.stringify(forecastInfo));
                console.log(location);
            })
        }
    })
    
});

server.listen(PORT,'localhost',()=>{
    console.log("listening os port "+PORT);
})