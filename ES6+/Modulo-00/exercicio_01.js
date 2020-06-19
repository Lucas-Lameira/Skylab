const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function(vetor) {
    return vetor.idade;
})
console.log(idades);


//retorno de filter é true or false
const filter = usuarios.filter(function(vetor) {
    return vetor.idade >=18 && vetor.empresa === 'Rocketseat';
})

console.log(filter);


//retorno de find() é true or false
const find = usuarios.find(function(vetor) {
    return vetor.empresa === 'Google';
})
console.log(find);


const newUsers = usuarios.map(function(vetor) {
    vetor.idade *= 2;
    return vetor;
}).filter(function(vetor){
    return vetor.idade <50;
})
console.log(newUsers);

