const { response } = require('express');
const  Tutoria  = require('../models/tutoria');
const TutoriaEspejo = require('../models/tutoriaEspejo')


const tutoriaMetodo = async (req, res = response) => {
    const tutoria = new Tutoria({ asignatura: 'aplicaciones web', numeroHoras: '5', fecha: '10/10/2022', hora: '22:05', replicacion: false })
    const tutoriaGuardada = await tutoria.save();
}

const tutoriaEspejoMetodo = async (req = request, res = response) => {
    const tutoriaBusqueda = await Tutoria.find()
    for (let i = 0; i < tutoriaBusqueda.length; i++) {
        if (tutoriaBusqueda[i].replicacion === false) {
            const datosTutoria = new TutoriaEspejo({
                asignatura: tutoriaBusqueda[i].asignatura, numeroHoras: tutoriaBusqueda[i].numeroHoras, fecha: tutoriaBusqueda[i].fecha, hora: tutoriaBusqueda[i].hora, replicacion: tutoriaBusqueda[i].replicacion
            })
            await datosTutoria.save();
        }
    }
}

module.exports = {
    tutoriaMetodo,
    tutoriaEspejoMetodo
}