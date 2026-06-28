import express from "express";
const dados = [];
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/tasks", (req, res) => {
    res.send(dados);
});

app.post("/tasks", (req, res) => {
    const dado = req.body;
    dados.push(dado);
    res.send(dado);
});

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
