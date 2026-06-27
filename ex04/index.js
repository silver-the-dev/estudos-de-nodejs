import e from 'express'
const app = e();
const PORT = 3000;
app.use(e.json());

app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello ${username}`);
})

app.listen(3000, () => console.log(`Port ${PORT}`));
