
/*Aqui e a transição do slider no Js*/
let contador = 1
document.querySelector("#bola1").checked = true

setInterval(function () {
    proxima();
}, 3000);

function proxima() {
    contador = contador + 1 
    
    if (contador > 3) {
        contador = 1
    }
    document.querySelector("#bola" + contador).checked = true

}
/*Aqui e o Fim da transição do slider no Js*/

