const express = require("express")
const app = express()
app.get("/", (req,res) => {
    res.send(
        `
        <h1>Olá turma, esse é o nosso primeiro servidor Node.js kkkk</h1>
        <h2>Sejam bem vindos</h2>
        <p> teste</p>
        <p> teste</p>
        `
    )
});

app.get("/outrarotA", (req,res) => {
    res.send(
        `
        <h1>Olá turma, essa é uma nova rota "outrarota"</h1>
        <h2>Sejam bem vindos</h2>
        <p> teste</p>
        <p> teste</p>
        `
    )
    
});

const porta =3000;
app.listen(porta, () => {
    console.log(`O servidor está rodando no endereço http://localhost:${porta}`);
});

