var inputElement = document.querySelector('input');
var ulist = document.querySelector('ul');


function userName(){
    var aPromise = function() {
        return new Promise(function(resolve, reject) {

            var xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.github.com/users/${inputElement.value}/repos`);
            xhr.send(null);

            var list = document.createElement('li');  
            var text = document.createTextNode('carregando...');
            list.appendChild(text);
                                              
            xhr.onreadystatechange = function () {      
                ulist.appendChild(list)                                                                                                             
                console.log(ulist.appendChild(list))

                if(xhr.readyState === 4 ){                                    
                    if(xhr.status===200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject('Usuário não encontrado!');
                    }
                }
            }


        });
    }

    aPromise()
      .then(function(response){       
            ulist.innerHTML = null; 
            inputElement.value = null;

            var n = response.length;

            for(var i = 0; i<n; i++) {
                var list = document.createElement('li');
                var listText = document.createTextNode(response[i].name);

                ulist.appendChild(list);
                list.appendChild(listText);
            } 
            console.log(response);
           
      })
      .catch(function(error){  
            ulist.innerHTML = null;   
            var list = document.createElement('li');             
            var text = document.createTextNode(error);
            list.appendChild(text);       
            ulist.style.listStyle = 'none' 
            ulist.appendChild(list) 
            console.log(error);
      });
}



    




