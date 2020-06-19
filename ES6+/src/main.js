import './api';
import api from './api';

class App {
    constructor () {
        this.users = [];

        this.formElement = document.getElementById('user-profile');
        this.ulist = document.getElementById('user-list');
        this.inputElement = document.querySelector('input[name=user]');

        this.registerEvents();//registrar evventos
    }

    registerEvents() {
        this.formElement.onsubmit =  event => this.addUser(event)    
    }

    setLoading(loading = true){
        if(loading == true){
            let loadElement = document.createElement('span');
            loadElement.appendChild(document.createTextNode('Carregando...'));
            loadElement.setAttribute('id', 'loading');

            this.formElement.appendChild(loadElement);
        }else{
            document.getElementById('loading').remove();
        }
    }

    //Método responsável por adcionar usuario no this.users
    async addUser (event) {
        event.preventDefault();//evitar comportamento padrao do form de recarregar a página
        
        const valorInput = this.inputElement.value;//guardar o valor do input
        if(valorInput ===0 ){
            return;
        }

        this.setLoading();

        try {
            const response = await api.get(`/users/${valorInput}`);
    
            const {login, location, avatar_url, html_url } = response.data;
    
            console.log(response);
    
            this.users.push({
                //todo
                login,
                location,
                avatar_url,
                html_url
            })
    
           this.inputElement.value = null
           this.render()            
        } catch (error) {
            alert('ops! usuario nao encontrado')
            this.inputElement.value = null;
        }

        this.setLoading(false);

    }

    render() {
        this.ulist.innerHTML = null;

        this.users.forEach(user => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', user.avatar_url);

            let strongElement = document.createElement('strong');
            strongElement.appendChild(document.createTextNode(user.login));

            if(user.location === null){
                user.location = 'Not found';
            }
            let paragraphElement = document.createElement('p');
            paragraphElement.appendChild(document.createTextNode( 'Location: '+ user.location));

            let aLink = document.createElement('a');
            aLink.setAttribute('href', user.html_url);
            aLink.setAttribute('target', '_blank');
            aLink.appendChild(document.createTextNode('Ver Perfil'));

            let listElement = document.createElement('li');

            listElement.appendChild(imgElement);
            listElement.appendChild(strongElement);
            listElement.appendChild(paragraphElement);
            listElement.appendChild(aLink);

            this.ulist.appendChild(listElement);

        })
    }

}

new App();//executa a class