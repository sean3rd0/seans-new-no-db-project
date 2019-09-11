require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env


const quoteCtrl = require('./controllers/quoteController')

// TOP LEVEL MIDDLEWARE
app.use(express.json()) 

// ENDPOINTS
app.post('/api/quote/add', quoteCtrl.createQuote)
app.put('/api/quote/:id', quoteCtrl.updateQuote)
app.delete('/api/quote/:id', quoteCtrl.deleteQuote)
app.get('/api/quotes', quoteCtrl.readQuotes)









app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is running`))