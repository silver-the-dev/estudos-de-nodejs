import express from "express";
import router from "./routes.js";

class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.app.use("/", router);
    }

    middleware() {
        this.app.use(express.json());
    }
}

export default App;
