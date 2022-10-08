module.exports = {
    tutor,
    tutorado,
    tutoría
  }= require('./datos tutoria');


function buscarTutoradoPorId(id, callback  ){
    const tutoradoencontrado = tutorado.find((tutorado)=> tutorado.id===id );
    if (!tutoradoencontrado)
    {
        const error= new Error();
        error.message="Tutorado no encontrada";
        return callback(error);
    }
    return callback(null, tutoradoencontrado );
}

function buscarTutoriaPorId(id, callback){
    const tutoríaencontrada =  tutoría.find((tutoria)=>{
        return tutoria.id===id;
    });
    if (!tutoríaencontrada)
    {
        const error =  new Error();
        error.message= "Tutoría no encontrada";
        return callback(error)
    }
    return callback(null, tutoríaencontrada)
}

buscarTutoriaPorId(1, (err,tutoria)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }

    buscarTutoradoPorId( tutoria.idtutorado, ( err, tutorado )=>{
        if (err)
        {
            return console.log(err.message);
        }
        tutoria.tutorado= tutorado; 
    
        console.log("La tutorado " + tutorado.nombre + "tiene tutoría en la fecha " + tutoria.fecha)
    } )
})










