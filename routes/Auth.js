const express = require('express')
const router = express.Router()

//@route POST api/auth
//@desc  get logged in user
//@access private
router.get('/',(req,res) =>{
    res.send('Get Logged in user')
})

//@route POST api/auth
//@desc Auth user and get token
//@access Public
router.post('/',(req,res) =>{
    res.send('Auth user and get token to Login User')
})
module.exports = router