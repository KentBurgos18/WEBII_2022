
const mongoose = require('mongoose'); 

const conexionMongo="";

const guardar = async()=> {
   try {
        
        const stateConnection = await mongoose.connect(conexionMongo);

      

        const Tutor = mongoose.model("tutor", {nombre:String,identificacion: String, experticia: String})

        const Tutorado = mongoose.model("tutorado", {nombre: String, identificacion: String})

        const Tutoria  = mongoose.model("tutoria",
        {
            
            
            idtutor: { type: mongoose.Types.ObjectId, ref: "tutor"},
            
            idtutorado: { type: mongoose.Types.ObjectId, ref: "tutorado"},

            
            asignatura: String,
            num_horas: Number,
            fecha:String,
            hora: String
                
        })

        const tutor1 = new Tutor({nombre:"ARTEAGA VERA", identificacion: "1314000001", experticia: "Investigación"});
        
        const saveTutor = await tutor1.save();

        const tutorado1 = new Tutorado({nombre:  "Juan Fernando",identificacion: "1314000011"});
   
        const saveTutorado = await tutorado1.save();


        const tutoria1 = new Tutoria({
            idtutor: saveTutor._id,
            idtutorado: saveTutorado._id,
            asignatura:"Metología de la investigación",
            num_horas:2,
            fecha:"01/09/2022",
            hora: "7:00 AM"
        });

        const tutoriaSave = await tutoria1.save();


        
        const todoslosTutores = await Tutor.find()
        const todoslosTutorado= await Tutorado.find()
        const todaslasTutorias = await Tutoria.find()

       
        for (const tutores of todoslosTutores) {
                console.log( `Tutores : ${tutores}`)
        }

        todoslosTutorado.forEach(tutorado=>{
                console.log(tutorado)
        })

        for (let index = 0; index < todaslasTutorias.length; index++) {
            const element = todaslasTutorias[index];
            
            console.log(element)
        }
        

   } catch (error) {
         console.log(error.message)
   }

}

guardar()



