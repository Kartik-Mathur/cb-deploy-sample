const express = require('express')
const app = express()

const PORT = process.env.PORT||4433 

app.get('/',(req,res)=>{
    res.send('Hello! This is a sample app')
})

app.get('/hi',(req,res)=>{
    res.send('Hello! '+req.query.name)
})

app.get('/bye',(req,res)=>{
    res.send('Goodbye! '+req.query.name)
})

app.get('/app',(req,res)=>{
    res.send('Hello you are in our main app')
})

app.listen(PORT,()=>{
    console.log('http://localhost:4433 '+PORT)
})