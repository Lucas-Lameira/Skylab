class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        
    }
    isAdmin () {
        if(this.admin){
            return true;
        }else{
            return false;
        }    
    }
}

class Admin extends Usuario {
    //nao sei se isso faz sentido
    constructor () {       
        super();     
        this.admin = true;//nao verifica, só afirma
    }
}

//codigo q eu nao fix ZD
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@tee.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

