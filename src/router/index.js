const express=require('express')
const app = express()
app.use(require('./ConsultarUsuarios'))
app.use(require('./MovimientosUsuarios'))
module.exports=app
