
const express = require ('express')
const app = express();


const userRoutes = require('./routes/user-routes')

app.use(express.json())
//middlewares

app.use('/api/v1/user',userRoutes)

module.exports = app;