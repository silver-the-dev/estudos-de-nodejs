import express from "express";
const app = express();
const PORT = 3000;

app.get("/api/teste", (req, res) => {
    // É nesta linha (ou na debaixo) que colocaremos o Breakpoint
    const dados = { status: "sucesso", mensagem: "Depurador ativado!" };

    res.json(dados);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
