/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/Lucas-Lameira');
xhr.send(null);

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}
*/


/*
//with promisse
var somePromise = function () {
    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/Lucas-Lameira')
        xhr.send(null);
        
        xhr.onreadystatechange = function () {            
            if(xhr.readyState === 4 ){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }                
            }
        }
    });
}

somePromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });   
*/

axios.get('https://api.github.com/users/Lucas-Lameira')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })