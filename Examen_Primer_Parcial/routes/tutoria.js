const { Router } = require('express');



const { 
    tutoriaMetodo,
    tutoriaEspejoMetodo
      } = require('../controllers/tutoria');


const router= Router();

router.post('/', tutoriaMetodo );


 router.get('/', tutoriaEspejoMetodo );




module.exports = router;