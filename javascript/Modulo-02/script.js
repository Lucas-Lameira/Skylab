var ulist = document.querySelector('div#app ul');
var inputElement = document.querySelector('div#app input');
var btn = document.querySelector('div#app button');


//convertendo os arquivos salvos no storage para
var items = JSON.parse(localStorage.getItem('Lista-de-items')) || [];
console.log(items)


//Show Items in the screen
function renderItems(){
    ulist.innerHTML = null;

    for(item of items){
        //console.log(item); console.log(items)
        var list = document.createElement('li');
        var LiText = document.createTextNode(item);

        var Alink = document.createElement('a');
        Alink.setAttribute('href', '#');
        var linkText = document.createTextNode('Delete');

        var position = items.indexOf(item)
        Alink.setAttribute('onclick', 'deleteItem(' + position + ')');


        ulist.appendChild(list);
        list.appendChild(LiText); 
        list.appendChild(Alink);
        Alink.appendChild(linkText)       
    }
}
renderItems();

//Insert item
function addItems(){
    items.push(inputElement.value)
    inputElement.value = null;
    renderItems();
    saveItems();
    console.log(items)
}
btn.onclick = addItems;

//Delete Item
function deleteItem (position) {
    items.splice(position, 1);
    renderItems();
    saveItems();
}

//Save Items
function saveItems(){
    localStorage.setItem('Lista-de-items', JSON.stringify(items));
}

