const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  5000;


app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )



let tutor = [];


app.get('/', (req,res)=>{
    res.status(200).send(
        tutor
    )
})
app.get('/:id', (req,res)=>{
    const {id} =  req.params;
    
    let result = tutor.filter(p => p.id === id);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;
  
    
    tutor.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})
app.put('/', (req,res)=>{
    const {id, nombre, identificacion, experticia} = req.body;

    
    let tutorencontrado =  tutor.filter(p=> p.id === id)[0] || {}
    
    tutorencontrado.nombre = nombre;
    tutorencontrado.identificacion = identificacion;
    tutorencontrado.experticia = experticia;

    res.status(200).send(
        {
            message:"datos de la tutor modificado correctamente",
            response: tutorencontrado
        }
    )

})
app.delete('/:id', (req,res)=>{
    const {id} =  req.params;
    tutor = tutor.filter(p => p.id !== id);
    res.status(200).send({
        response:"Se eliminó al tutor con éxito!"
    })
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})

