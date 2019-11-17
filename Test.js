const express = require('express')
const app = express()

const PORT = process.env.PORT||4433 

app.get('/',(req,res)=>{
    res.send('Hello! This is an awesome app')
})

app.get('/app',(req,res)=>{
    res.send('Hello you are in the app')
})

app.listen(PORT,()=>{
    console.log('http://localhost:4433 '+PORT)
})