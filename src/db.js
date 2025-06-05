const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const logger = require('./logger');

async function connectDB() {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("MongoDB conectado com sucesso!");
    } catch (error) {
        logger.error(`Erro de conexão: ${error}`);
        console.error("Erro ao conectar com MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;