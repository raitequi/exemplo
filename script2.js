const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Qual curso você está fazendo? ', function qualCurso(resposta) {
    console.log('A resposta é: ', resposta);
    r1.close();
});