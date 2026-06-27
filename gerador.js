const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

let contador = 1;
while (
    fs.existsSync(
        path.join(__dirname, `ex${String(contador).padStart(2, "0")}`),
    )
) {
    contador++;
}

const nomePasta = `ex${String(contador).padStart(2, "0")}`;
const caminhoPasta = path.join(__dirname, nomePasta);

console.log(`🚀 Criando ambiente para: ${nomePasta}...`);

fs.mkdirSync(caminhoPasta);

console.log("📦 Inicializando projeto Node...");
execSync(
    'npm init -y && npm pkg set type="module" && npm pkg set scripts.dev="nodemon index.js"',
    {
        cwd: caminhoPasta,
        stdio: "ignore",
    },
);

console.log("📥 Instalando dependências (isso pode levar alguns segundos)...");
execSync("npm install express nodemon", { cwd: caminhoPasta, stdio: "ignore" });

// 5. Criar o arquivo index.js com um código básico do Express
const codigoInicial = `import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso no ${nomePasta}!');
});

app.listen(PORT, () => {
    console.log(\`Servidor executando em http://localhost:\${PORT}\`);
});
`;

fs.writeFileSync(path.join(caminhoPasta, "index.js"), codigoInicial);

console.log(`✅ Sucesso! Pasta ${nomePasta} configurada e pronta para o uso.`);
