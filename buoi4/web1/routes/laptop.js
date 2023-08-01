const express   = require('express');
const router = express.Router();

router.get('/', (req, res) =>{ 
    //render ra view index, hbs nam trong thu muc views/laptop
res.render('laptop/index')
})



module.exports = router;