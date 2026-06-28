import express from "express";
const users = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
];
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    if (users.find((num) => num.id == id)) {
        res.status(200).send({ message: "true" });
    } else {
        res.status(404).send({ message: "false" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
});
