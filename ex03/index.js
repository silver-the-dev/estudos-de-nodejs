import e from "express";
const app = e();
const PORT = 3000;

app.listen(3000, () => {
    console.log(`Port ${PORT}`);
});
