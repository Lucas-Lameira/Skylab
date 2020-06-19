//Desestruturação simples
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};
const {nome, endereco: {cidade, estado} } = empresa;

console.log(`
    Nome: ${nome} 
    Cidade: ${cidade}
    Estado: ${estado} 
`);


//4.2 Desestruturação em parâmetros
/*function mostraInfo(usuario) {    
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })*/
const mostraInfo= ({nome, idade}) => `${nome} tem ${idade} anos.`;
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));


