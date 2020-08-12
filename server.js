const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        msg:"Hello WORLD"
    })
});

app.use('/api/users',require('./routes/Users'))
app.use('/api/auth',require('./routes/Auth'))
app.use('/api/contacts',require('./routes/Contacts'))

const PORT = process.env.PORT||5000

app.listen(PORT,() =>{
    console.log(`Server started on port ${PORT}`)
})