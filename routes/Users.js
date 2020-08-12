const express = require('express')
const router = express.Router()

//@Route post api/users
//@desc Register user
//@access Public
router.post('/',(req,res) =>{
   res.send('Register a user');
})

module.exports = router