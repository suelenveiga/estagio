const lista = document.getElementById('chat');
const razaoNome = document.getElementById('texto');
const addButton = document.getElementById('enviar');
const db = firebase.database();

addButton.addEventListener('click', function(e) {  
    msgn = document.getElementById("texto");
    var dados = {
        msgn:msgn.value
    }
    db.ref('/dados').push(dados);
    e.preventDefault();
});



  db.ref('/dados').on('child_added', function(item) {
    var childKey = item.key;
    var div = document.createElement('div');
    div.className = 'msj-rta macro';

    var p = document.createElement('p');
    p.style.width = 100 + '%';
    div.appendChild(p);

    var div2 = document.createElement('div');
    div2.className = 'text text-r';
    div2.textContent = item.val().msgn;
    p.appendChild(div2);

    var img = document.createElement('img');
    img.className = 'img-fluid rounded-circle';
    img.setAttribute("id", "foto");
    img.setAttribute("src", "img/avatar5.jpg");
    lista.appendChild(img);
    lista.appendChild(div);
    
  }); 

