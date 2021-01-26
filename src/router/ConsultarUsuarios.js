const express = require('express')
const pool = require('../database/conexion')

let app = express.Router()


app.post('/verify', async (req, res) => {
    const body = req.body
    console.table(body);
    try {
        let result = await pool.query(`SELECT * FROM dispositivos
        WHERE numeroTel = ?
        AND pin =?
        AND FeachaBaja IS NULL
        AND email = ?`, [body.numeroTel, body.pin, body.email])
        console.table(result);
        res.status(200).json({ data: result })    
    } catch (error) {
        pool.end()
        res.status(500).json({ data: error })    
    }
    

});





module.exports = app

