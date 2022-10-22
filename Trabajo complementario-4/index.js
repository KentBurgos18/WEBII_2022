
const express = require("express");
const cors =  require("cors");

const PUERTO = 5000;

 
const server =  express();


server.use('/public', express.static(__dirname+'/public') )
server.use(cors()).use(express.json())




server.get('/', (req,res)=>{
    res.status(200).sendFile(__dirname + '/public/tutor.html');
   
})
server.get('/tutorado', (req,res)=>{
    res.status(200).sendFile(__dirname + '/public/tutorado.html');
   
})
server.get('/tutoria', (req,res)=>{
    res.status(200).sendFile(__dirname + '/public/tutoria.html');
   
})


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})
