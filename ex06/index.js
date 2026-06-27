import express from 'express'
const app = express();
const PORT = 3000;
app.use(express.json());

app.post('/echo', (req, res) => res.send(req.body));

app.listen(PORT, () => console.log("Listening port: " + PORT))