function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function (resolve, reject) {
        if(idade>=18){
            resolve();
        }else{
            reject();
        }
    })
   }




   checaIdade(18)
    .then(function() {
    console.log("Maior de Idade");
    })
    .catch(function() {
    console.log("Menor de Idade");
    });
   