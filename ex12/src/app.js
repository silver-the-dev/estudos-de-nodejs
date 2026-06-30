import express from "express";

class App {
    constructor() {
        this.app = express();

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.json());
    }

    routes() {
        this.app.get("/", (req, res) => {
            res.send("Requisição enviada");
        });
    }
}

export default App;
