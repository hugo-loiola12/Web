import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = prompt("Qual o seu nome? ");

console.log(`Olá, ${nome}!`);
