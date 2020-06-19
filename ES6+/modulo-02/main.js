//PARA ESSE EXERCICIO CONFIGURA-SE O WEBPACK


//Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
//e chame a funão info();
import classUsuario, {idade} from './function';
classUsuario.info();

//Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
console.log(idade);

//Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
//para IdadeUsuario.
import usuario, {idade as idadeUsuario} from './function'
console.log(idadeUsuario);
