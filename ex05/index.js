import e from 'express'
const app = e();
const PORT = 3000;
app.use(e.json());

app.get('/status', (req, res) => {
    res.send("Everything ok")
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`));