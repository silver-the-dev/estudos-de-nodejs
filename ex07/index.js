import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

app.post("/auth", (req, res) => {
    const { email, senha } = req.body;
    console.log(JSON.stringify({ email, senha }, null, 2));
    res.send({ email, senha });
});

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
