const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>res.render('Welcome to dascy'));

module.exports = router;