const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const RfidRouter = require('./routes/rfid')
const ItemRouter = require('./routes/item')

app.use(express.json())
app.use(cors())
app.use('/rfid', RfidRouter)
app.use('/item', ItemRouter)

app.listen(8000, () => {
  console.log('server running on 5000 port')
})

mongoose.connect('mongodb+srv://amroos988:xkalf0218@amazon.2trud.mongodb.net/sample?authSource=admin&replicaSet=atlas-ylefzs-shard-0&readPreference=primary&ssl=true')