let img = document.getElementById('avatar');
let img2 = document.getElementById('avatar');
let img3 = document.getElementById('avatar');
let img4 = document.getElementById('avatar');
let img5 = document.getElementById('avatar');
let img6 = document.getElementById('avatar');
let div = document.getElementById('guarda');

let img_tabu = document.getElementById('tabuleiro');

let button = document.getElementById('selecionar');
let button2 = document.getElementById('selecionar2');
let button3 = document.getElementById('selecionar3');
let button4 = document.getElementById('selecionar4');
let button5 = document.getElementById('selecionar5');
let button6 = document.getElementById('selecionar6');



button.addEventListener("click",function(e){
    e.preventDefault();
    img_tabu.style.display = "none";
    document.getElementById('guarda').innerHTML = img;
});

