const vet = ['1','2','3','4','5','6'];

document.getElementById('mavatar1').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('avatarteste1').style.display = "block";
    document.getElementById('dado').style.display = "block";
});
document.getElementById('mavatar2').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('avatarteste2').style.display = "block";
    document.getElementById('dado').style.display = "block";
});
document.getElementById('mavatar3').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('avatarteste3').style.display = "block";
    document.getElementById('dado').style.display = "block";
});


document.getElementById('selecionar1').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('fisc').style.display = "block";
});
document.getElementById('selecionar2').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('fisc2').style.display = "block";
});
document.getElementById('selecionar3').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('fisc3').style.display = "block";
});

document.getElementById('erro').addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('modalogin1').style.display = "none";
});
document.getElementById('erro2').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('perguntinha').style.display = 'none';
});
document.getElementById('erro3').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('perguntinha').style.display = 'none';
});
document.getElementById('erro4').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('perguntinha').style.display = 'none';
});
document.getElementById('erro5').addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('perguntinha').style.display = 'none';
});

let dado = document.getElementById('dado');
let guarda=0;
let pontos = 0;
const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const topp = [80,76,58,41,26,9,9,27,43,60,75,80,80,62,46,30,13,6,6,10,29,29,49,80];
const leftt = [7,16,13,9,3,8,19,21,26,30,37,46,56,56.5,51,46,41,50,59.5,69,71.5,82,83,83];
const vp = ['lorrana','suelen','oioioio','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
const dic = ['dica1','dica2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
const gabarito = ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'];
dado.addEventListener("click",function(e){
    e.preventDefault();
    let num = Math.floor(Math.random() * 6) + 1;
    guarda += num;
    
    
    for (let i = 0; i < vetor.length; i++) {
            if(guarda == vetor[i]){

                document.getElementById('avatarteste1').style.top = topp[i] + '%';
                document.getElementById('avatarteste1').style.left = leftt[i] + '%';

                document.getElementById('avatarteste2').style.top = topp[i] + '%';
                document.getElementById('avatarteste2').style.left = leftt[i] + '%';

                document.getElementById('avatarteste3').style.top = topp[i] + '%';
                document.getElementById('avatarteste3').style.left = leftt[i] + '%';

                let teste = topp[i];
                let teste2 = leftt[i];

                if (teste == topp[i] && leftt[i]){
                    document.getElementById('perguntinha').style.display = 'block';
                    p = document.getElementById('perg');
                    p.textContent = vp[i];
                    document.getElementById('dicaa').textContent = dic[i];
                    if(document.getElementById('erro2').textContent == gabarito[i]){
                        pontos += vetor[i];
                        document.getElementById('pontos').innerHTML = pontos;
                    }
                    if(document.getElementById('erro3').textContent == gabarito[i]){
                        pontos += vetor[i];
                        document.getElementById('pontos').innerHTML = pontos;
                    }
                    if(document.getElementById('erro4').textContent == gabarito[i]){
                        pontos += vetor[i];
                        document.getElementById('pontos').innerHTML = pontos;
                    }
                    if(document.getElementById('erro5').textContent == gabarito[i]){
                        pontos += vetor[i];
                        document.getElementById('pontos').innerHTML = pontos;
                    }                    
                }
        }
        if(guarda >= 24){
            document.getElementById('avatarteste1').style.top = 80 + '%';
            document.getElementById('avatarteste1').style.left = 83 + '%';

            document.getElementById('avatarteste2').style.top = 80 + '%';
            document.getElementById('avatarteste2').style.left = 83 + '%';

            document.getElementById('avatarteste3').style.top = 80 + '%';
            document.getElementById('avatarteste3').style.left = 83 + '%';
        } 
        if(guarda > 24){
            document.getElementById('nav2').style.display = "block";
            document.getElementById('some').style.display = "none";
            document.getElementById('ranking').style.display = "block";
            console.log('pontos' +pontos);
            db.ref('/cadastro').on('child_added', function(item) {
            db.ref('/cadastro/').item.push(pontos);
        });
        }
    }
});

let num = 1;
const db = firebase.database();
const tbody = document.getElementById('tbody');
let ve = [];
let i = 0;
let j = 0;
let clas = ["bg-info","oi","bg-danger","oi","bg-warning","oi","bg-success","oi","bg-primary"];
db.ref('/cadastro').on('child_added', function(item) {
    ve.push(item.val().escola);
    console.log(ve);

        var th = document.createElement('th');
        th.setAttribute("scope", "row");
        th.textContent = num++;
    
        var td = document.createElement('td');
        td.textContent = ve[i];
        i++;

        var tr = document.createElement('tr');
        tr.className = clas[j];
        j++;
    
        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);

});
