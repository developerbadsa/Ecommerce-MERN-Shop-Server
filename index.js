const express = require('express');
const app = express()
const morgan = require('morgan');
const port = 3000


//MiddleWares 
app.use(morgan('dev'))


//Routes
app.get('/', (req, res)=>{
      console.log('Running our Server')
      res.status(200).send('ruinning our server')
})



app.listen(port, ()=>{
      console.log('Running Server', port)
})