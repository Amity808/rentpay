
const express = require('express')
const http = require('http')
const cors = require('cors')
const config = require('dotenv')
config.config()
const logger = require('logger')


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(logger('dev'))

const port = 3000
app.set("port", port)
app.set('view engine', 'ejs')
// app.set('views')

const server = http.createServer(app)

app.get("/", (req, res) => {
    res.send("Hello world")
})


server.listen(port, '0.0.0.0')
server.on('listening', () => {
    console.log('Server is running on port', port)
})
