const express=require('express')
let app = require('./app')
//configuracion


process.env.PORT = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
    console.table(["Servidor Listo", "Puerto:" + process.env.PORT]);
})