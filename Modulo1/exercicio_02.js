//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function exibePares(x, y) { 
    if(x==y && x%2 != 0){
        return console.log('Sem números Pares');
    }else if (x>y){
       const z = y;
       y = x;
       x = z;    
    }

    for (x; x<=y; x++ ){
        if (x%2 == 0 ) console.log(x);        
    }    
}

exibePares(0, 0)

