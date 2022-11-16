const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


class Server {
    constructor() {
        this.app = express();

        this.port = process.env.PORT;
        this.tutoria = '/tutoria'

        this.connectDB();
        this.routes();

    }
    async connectDB() {
        await dbConnection();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json())

    }
    routes() {
        this.app.use(this.tutoria, require('./routes/tutoria'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}


module.exports = Server;