const ConnectToMongo = require('./db')
const express = require('express')
var cors = require('cors') 

ConnectToMongo()

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use('/api/mail',require('./routes/mail'))

app.get('/', (req, res) => {
    res.send('Hello This is Rishi')
  })

  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })