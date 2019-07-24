let dado = document.getElementById('dado');
let avatarteste = document.getElementById('avatarteste');

let guarda=0;

const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const topp = [80,76,58,41,26,9,9,27,43,60,75,80,80,62,46,30,13,6,6,10,29,29,49,80];
const leftt = [7,16,13,9,3,8,19,21,26,30,37,46,56,56.5,51,46,41,50,59.5,69,71.5,82,83,83];

dado.addEventListener("click",function(e){
    e.preventDefault();
    let num = Math.floor(Math.random()*7);
    guarda += num;
    console.log(guarda);
    
    for (let i = 0; i < vetor.length; i++) {
            if(guarda == vetor[i]){
                console.log(topp[i]);
                console.log(leftt[i]); 
                    avatarteste.style.top = topp[i] + '%';
                    avatarteste.style.left = leftt[i] + '%';
        } 
    }
});





const vet = ['1','2','3','4','5','6'];


for(let i = 0; i <= vet.length; i ++){
    document.getElementById('selecionar'+vet[i]).addEventListener("click",function(e){
        e.preventDefault();
        let img = document.getElementById('avatarteste'+vet[i]);
        img.style.display = "block";
    });
};

let dado = document.getElementById('dado');
let avatarteste = document.getElementById('avatarteste1');

let guarda=0;

const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const topp = [80,76,58,41,26,9,9,27,43,60,75,80,80,62,46,30,13,6,6,10,29,29,49,80];
const leftt = [7,16,13,9,3,8,19,21,26,30,37,46,56,56.5,51,46,41,50,59.5,69,71.5,82,83,83];

dado.addEventListener("click",function(e){
    e.preventDefault();
    let num = Math.floor(Math.random()*7);
    guarda += num;
    console.log(guarda);
    
    for (let i = 0; i < vetor.length; i++) {
            if(guarda == vetor[i]){
                console.log(topp[i]);
                console.log(leftt[i]); 
                avatarteste.style.top = topp[i] + '%';
                avatarteste.style.left = leftt[i] + '%';
        } 
    }
});


