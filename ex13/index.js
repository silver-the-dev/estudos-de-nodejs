import App from "./src/app.js";
const PORT = 3000;

const servidor = new App();

servidor.app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
