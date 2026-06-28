import express from "express";
const membros = [];
const app = express();
const PORT = 3000;
app.use(express.json());

// CREATE
app.post("/membros", (req, res) => {
    const id = membros.length > 0 ? membros.at(-1).id + 1 : membros.length + 1;
    const user = {
        id: id,
        nome: req.body.nome,
        curso: req.body.curso,
    };
    membros.push(user);
    res.status(201).send(user);
});

// READ
app.get("/membros", (req, res) => {
    const id = req.query.id;
    if (id) {
        res.send(membros.find((membro) => membro.id == id));
        return;
    }
    res.send(membros);
});

// UPDATE
app.put("/membros/:id", (req, res) => {
    const pos = membros.findIndex((membro) => membro.id == req.params.id);
    const novoNome = req.body.nome;
    const novoCurso = req.body.curso;
    membros[pos].nome = novoNome;
    membros[pos].curso = novoCurso;
    res.send(membros[pos]);
});

// DELETE
app.delete("/membros/:id", (req, res) => {
    const id = req.params.id;
    const pos = membros.findIndex((membro) => membro.id == id);
    membros.splice(pos, 1);
    res.send(membros);
});

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
