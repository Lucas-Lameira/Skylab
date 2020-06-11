//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não
var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade (skills) {
    for(let i = 0; i< skills.length; i++ ){
        if(skills[i] === "Javascript")
            return true;
    }    
    return false;
} 
console.log(temHabilidade(skills));// true ou false


//-------------COM METODO INDEX OF---------------------
function temHabilidadeIndexOf(skills) {
    return skills.indexOf("Javascript")
}

console.log(temHabilidadeIndexOf(skills));

