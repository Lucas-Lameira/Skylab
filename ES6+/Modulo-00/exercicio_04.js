//REST
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y ] = arr;


function soma(...vetor) {
    return vetor.reduce((total, next) => total + next);
}

console.log(soma(y));
console.log(soma(x));


//SPREAD
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome:'Gabriel'}
const usuario3 = {...usuario, endereco: {cidade: 'lontras', uf:'SC', pais:'Braisl'} }

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
