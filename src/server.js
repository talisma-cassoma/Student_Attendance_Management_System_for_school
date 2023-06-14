const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

const cors = require('cors')

server.use(cors())
// usando template engine
//server.set('view engine',  'ejs')

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

//allowing json
server.use(express.json());
// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))