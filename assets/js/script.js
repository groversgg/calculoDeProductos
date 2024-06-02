let precio = 400000
let precioSpan = document.querySelector(".precio-inicial");
let ValorTotalSpan = document.querySelector(".valor-total");
let contadoSpan = document.querySelector(".cantidad");
let contador = parseInt(contadoSpan.innerHTML)
let ValorTotal = 0;
precioSpan.innerHTML = precio

function aumentar(){
    contador ++;
    ValorTotal += precio;
    ValorTotalSpan.innerHTML = ValorTotal;
    contadoSpan.innerHTML = contador;
}

function disminuir(){
    if(contador > 0){
        contador --;
        ValorTotal -= precio;
        ValorTotalSpan.innerHTML = ValorTotal;
        contadoSpan.innerHTML = contador;
    }
}
