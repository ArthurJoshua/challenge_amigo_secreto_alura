var campo = document.querySelector("input");
var but = document.querySelector("button");
var participantes = [];
var teste = document.querySelector("#sortearbut")
nomes = 0
var resultado



function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}


function adicionarAmigo(){
    nomes++;
    participantes.push(campo.value);
    console.log(participantes);
    console.log(nomes);
    limparCampo()

}

function fimDoJogo(){
    let resultado = participantes[Math.floor(Math.random() * participantes.length)];
    let final = document.querySelector('.section-title');
    final.innerHTML = (`O sorteado foi ${resultado}`);

}
       
    function sortearAmigo(){
     let resultado = participantes[Math.floor(Math.random() * participantes.length)];
     let plural = nomes >= 1 ? 'nome foi registrado' : 'nomes foram registrados';
     fimDoJogo()
        


    }

  