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
        return res.send(membros.find((membro) => membro.id == id));
    }
    res.send(membros);
});

// UPDATE
app.put("/membros/:id", (req, res) => {
    const pos = membros.findIndex((membro) => membro.id == req.params.id);
    if (pos == -1) {
        return res.status(404).send();
    }
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
    if (pos != -1) {
        membros.splice(pos, 1);
        return res.send(membros);
    }
    res.status(404).send();
});

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
