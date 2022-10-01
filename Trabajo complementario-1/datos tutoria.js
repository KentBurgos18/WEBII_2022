
const tutor = [
    {
      id: 1,
      nombre: "ARTEAGA VERA",
      identificacion:"1314000001",
      experticia:"Investigación"
    },
    {
      id: 2,
      nombre: "HERRERA TAPIA",
      identificacion:"1314000002",
      experticia:"Redes"
    },
    {
      id: 3,
      nombre: "QUIROZ PALMA	",
      identificacion:"1314000003",
      experticia:"Programacion web"
    },
    {
      id: 4,
      nombre: "SANTAMARIA PHILCO",
      identificacion:"1314000004",
      experticia:"Diseño de software"
    },
    {
      id: 5,
      nombre: "BAZURTO ROLDAN",
      identificacion:"1314000005",
      experticia:"Guía de PBMBOK"
    },
   
  ];
  const tutorado = [
    {
      id: 1,
      nombre: "Juan Fernando",
      identificacion:"1314000011",
    },
    {
      id: 2,
      nombre: "Sara Teresa  ",
      identificacion:"1314000012",
      
    },
    {
      id: 3,
      nombre: " Julieta Ponce ",
      identificacion:"1314000013",
    },
    {
      id: 4,
      nombre: "Martín Elías  ",
      identificacion:"1314000014",
      
    },
    {
      id: 5,
      nombre: "Mercedes Maria ",
      identificacion:"1314000016",
      
    },
  ];
  
  const tutoría = [
    {
      id: 1,
      idtutor: 1,
      idtutorado: 1,
      asignatura:"Metología de la investigación",
      num_horas:2,
      fecha: "01/09/2022",
      hora: "7:00 AM"
    },
    {
      id:2,
      idtutor:2,
      idtutorado:2,
      asignatura:"Redes y computación",
      num_horas:2,
      fecha: "07/09/2022",
      hora: "3:00 PM"
    },
    {
      id:3,
      idtutor:3,
      idtutorado:3,
      asignatura:"Aplicación web I",
      num_horas:3,
      fecha: "09/09/2022",
      hora: "12:50 PM"
    },
    {
      id:4,
      idtutor:4,
      idtutorado:4,
      asignatura:"Ingeniría de Software",
      num_horas:1,
      fecha: "12/09/2022",
      hora: "11:00 AM"
    },
    {
      id:5,
      idtutor:5,
      idtutorado:5,
      asignatura:"Lectura y texto acádemico",
      num_horas:3,
      fecha: "24/09/2022",
      hora: "9:00 AM"
    },
    
    
  ];


module.exports = {
  tutor,
  tutorado,
  tutoría
}