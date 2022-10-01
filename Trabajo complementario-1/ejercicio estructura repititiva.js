

const {   tutor,
    tutorado,
    tutoría } = require('./datos tutoria');
    contador = 0


    while(contador < tutorado.length){
       console.log("Nombre: "+tutorado[contador].nombre)
       console.log("Identificacion: "+tutorado[contador].identificacion)
       console.log("")
    
        contador++
    }


        for (const object of tutor) {
            
        console.log("Nombre:", object.nombre)
        console.log("Identificacion:", object.identificacion)
        console.log("Experticia:", object.experticia)
        console.log("")
    }


    
    tutoría.forEach(tutoria=> 
        console.log(
            "Asignatura:" + tutoria.asignatura +
            "Número de horas:"+ tutoria.num_horas+
            "Fecha:" +tutoria.fecha +
            "Hora:" +tutoria.hora +
            " "
            ) )
    

    




    