import e from "express";
const app = e();
const PORT = 3000;
app.use(e.json());

app.get('/calculator', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const sum = num1 + num2;

    res.send({ 
        message: `${sum}`
    });
})

app.listen(3000, () => console.log(`Port ${PORT}`));
