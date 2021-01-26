const express = require('express')
const pool = require('../database/conexion')
const moment=require('moment')
let app = express.Router()

app.post('/InsertarMovimientos',async (req, res) => {
    const body = req.body
    console.table(body);
    try {          
        let result = await pool.query(`INSERT INTO movimientos (Description,IdDispositivo,Fecha)
                                       values (?,?,?) `, [body.description, body.IdDispositivo,moment().format('YYYY-MM-DD HH:mm:ss') ])      
                                         console.table(result);
        res.status(200).json({ data: result.affectedRows,succes:true })
    } catch (error) {
        pool.end()
        res.status(500).json({ data: error ,succes:false})
    }

});

module.exports=app


