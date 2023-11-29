import express from "express";

app.get("/", (req:any,res:any) => {
    res.send(
        `
        <h1>Olá turma, esse é o nosso primeiro servidor Node.js kkkk</h1>
        <h2>Sejam bem vindos</h2>
        <p> teste</p>
        <p> teste</p>
        `
    )
});

app.get("/outrarotA", (req:any,res:any) => {
    res.send(
        `
        <h1>Olá turma, essa é uma nova rota "outrarota"</h1>
        <h2>Sejam bem vindos</h2>
        <p> teste</p>
        <p> teste</p>
        `
    )
    
});

const porta: number =3000;
app.listen(porta, () => {
    console.log(`O servidor está rodando no endereço http://localhost:${porta}`);
});
