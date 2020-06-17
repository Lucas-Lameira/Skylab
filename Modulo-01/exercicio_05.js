var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

function resultado ( usuarios) {
    for(let i= 0; i<usuarios.length; i++){
        console.log(`O ${usuarios[i].nome} possui as habilidades: ${usuarios[i].habilidades.join(', ')}`)
    }
}

resultado(usuarios);
   