const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const morgan = require('morgan');
const port = 3000


//MiddleWares 
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//Routes
app.get('/', (req, res)=>{
      console.log('Running our Server')
      res.status(200).send('ruinning our server')
})



app.listen(port, ()=>{
      console.log('Running Server', port)
})