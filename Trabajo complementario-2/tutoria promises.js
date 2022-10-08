const {   tutor,
    tutorado,
    tutoría } = require('./datos tutoria');

const buscarTutor= (id)=>{

    return new Promise((resolve, reject)=>{

        const buscartutor =  tutor.find( tutor => tutor.id === id)?.nombre

        if (buscartutor){
            resolve(buscartutor)
        }
        else{
            reject(`no hayamos al tutor`);
        }
    }) 
}


const buscarTutorado= (id)=>{

    return new Promise((resolve, reject)=>{
        const buscandoTutorado =  tutorado.find( tutorado => tutorado.id === id)?.nombre

        if (buscandoTutorado){
            resolve(buscandoTutorado)
        }
        else{
            reject(`no hayamos al tutorado`);
        }
    
}) 
}

const buscarTutoría = (id) => {

    return new Promise((resolve, reject)=>{

    const buscandoTutoria = tutoría.find(tutoría => tutoría.id === id)?.id;

    if(buscandoTutoria){
        resolve(buscandoTutoria)
    }
    else{
        reject("no se haya esa tutoría")
    }
 }) 
}

const obtencionTutoria = async(id=1)=> {

        try {
           
            const tutoria = await buscarTutoría(id)
         
            const tutor = await buscarTutor(tutoria);
            const tutorado = await buscarTutorado(tutoria);

           return console.log(`El tutor ${tutor} tiene reunión con el tutorado  ${tutorado}`);

        } catch (error) {
             console.log(error) 
        }

}

obtencionTutoria(1)










