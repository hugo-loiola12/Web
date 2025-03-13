import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = prompt("Qual o seu nome? ");

console.log(`Olá, ${nome}!`);

let a  = 10;
let b  = 20;

function soma(a: number, b: number): number {
    return a + b;
}

console.log(`A soma de ${a} e ${b} é ${soma(a, b)}`);
