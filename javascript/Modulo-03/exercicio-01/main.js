var inputElement = document.querySelector('input');
var ulist = document.querySelector('ul');


function userName() {        
    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then(function(response) {                      
            var n = response.data.length;                                        

            for(var i = 0; i<n; i++) {
                var list = document.createElement('li');
                var listText = document.createTextNode(response.data[i].name);

                ulist.appendChild(list);
                list.appendChild(listText);
            }            

        })
        .catch(function(error) {
            inputElement.value = null;
            console.log(error);
        });
 
}

/*
lucas-lameira
 var aPromise = function() {
        return new Promise (function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', ` https://api.github.com/users/${user}/repos`);
            xhr.send(null);
    
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject('Erro na requisição');
                    }
                }
            }
        });  
    }
     
  
  
*/





    




