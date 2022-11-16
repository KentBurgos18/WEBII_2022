const { model, Schema } = require('mongoose');

const tutoriaEspejoSchema = Schema(
    {
        asignatura:{
            type: String,
            required: [ true, 'La asignatura de la tutoria es necesaria'],
        },
        numeroHoras:{
            type: String,
            required: [ true, 'El numero de la tutoria es necesaria'],
        },
        fecha:{
            type: String,
            required: [ true, 'La fecha de la tutoria es necesario'],
        },
        hora:{
            type: String,
            required: [ true, 'La hora de la tutoria es necesario'],
        },
        replicacion:{
            type: Boolean,
            required: [ true, 'La replicación de la tutoria es necesario'],
        }
       
    }
);


module.exports = model('TutoriaEspejo', tutoriaEspejoSchema );