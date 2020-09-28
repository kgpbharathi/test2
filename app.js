console.log("Reading data from File");
const fs = require('fs');

/*fs.readFile('db.json',(err,result)=>{

    if(err)
    {
throw err;
    }
    else{
console.log(JSON.parse(result));
    }
})*/
const express = require('express');
const app = express();
//const request = require('request');
const port = 3000;

app.get('/',(req,res) => {
    res.send('<h1> Welcome to express seervver</h1>')
})

// Create server to listen on port
app.listen(port,(err) => {
    console.log('server is running on port '+port);
})

app.get('/getColorCodes',(request,response)=>{

    fs.readFile('db.json',(err,result)=>{

        if(err)
        {
    throw err;
        }
        else{
   response.send(JSON.parse(result));
        }
    })
       

})
