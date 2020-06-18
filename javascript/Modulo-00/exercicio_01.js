var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function localidade () {
    return 'O usuário mora em ' + endereco.cidade + ' / ' + endereco.uf
    + ', no bairro ' + endereco.bairro + ', na rua ' + endereco.rua    
}

console.log(localidade());