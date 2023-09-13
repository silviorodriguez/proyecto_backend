import dotenv from 'dotenv'
if(process.env.NODE_ENV !== 'production') {
        dotenv.config()
}

// la linea numero 3 del codiso es igual a const express = require('express')
import express from "express";   
import router from "./routes/index.js";
import cors from 'cors';

const PORT = process.env.PORT || process.env.DEV_PORT
 


const app = express();
app.use(express.json());

app.use(cors()) 
app.use(router)  // se conecta a las rutas de index de la carpeta routes

 app.listen(PORT, () => console.log('server listening on port ' + PORT))