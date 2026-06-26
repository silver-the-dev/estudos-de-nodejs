import e from "express";
const app = e();
const PORT = 3000;
app.use(e.json());

app.get("/ping", (req, res) => {
    res.send({ message: "pong" });
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
