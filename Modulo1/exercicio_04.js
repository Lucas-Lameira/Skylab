//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

var anosEstudo = 3;

 function medidorExperiencia (anos) {     
        if (anos >= 0 && anos <= 1)
            return console.log('Iniciante');
        else if(anos > 1 && anos <=3 ){
            return console.log('Intermediário');
        }else if(anos > 3 && anos <= 6){
            return console.log('Avançado');
        }else if (anos >= 7){
            return console.log('Jedi Master');
        }else{                  
            return console.log('Sem experiencia');
        }
}

medidorExperiencia(anosEstudo);