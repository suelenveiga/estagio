addButton1 = document.getElementById('cadastrar');
addButton2 = document.getElementById('entrar');
const db = firebase.database();

addButton1.addEventListener('click', function(e) {  
    input1 = document.getElementById('nome');
    input2 = document.getElementById('idade');
    input3 = document.getElementById('cidade');
    input4 = document.getElementById('escola'); 
    input5 = document.getElementById('email'); 
    input6 = document.getElementById('senha');    
   
    var cadastro = {
        nome:input1.value,
        idade:input2.value,
        cidade:input3.value,
        escola:input4.value,
        email:input5.value,
        senha:input6.value
    }
    db.ref('/cadastro').push(cadastro);
    e.preventDefault();
});

db.ref('/cadastro').on('child_added', function(item) {
    var childKey = item.val().email;
    var childKey2 = item.val().senha;
    
    login = document.getElementById('loginEmail');
    senha = document.getElementById('loginSenha');

    addButton2.addEventListener('click', function(e){
        e.preventDefault();
        if(login.value == childKey && senha.value == childKey2){
            document.getElementById('logado').style.display = 'none';
            document.getElementById('k').style.display = 'block';
            document.getElementById('btnSair').style.display = 'block';
        }  
    });
});



