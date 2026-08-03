let lista = [5,8,55,1,345]
lista.sort((a,b) => a - b)

// for(let pos =0;pos < num.length;pos ++){
//     console.log(`a POsição ${pos} tem o valor ${num[pos]}`)
// }

for (let pos in lista) {
    console.log(`o item ${lista[pos]} está na posição ${pos}`)
}
let valor = 55
let posvalor = lista.indexOf(valor)
if(posvalor == -1){
    console.log(`O valor ${valor} não está na lista`)
}else{
    console.log(`O valor ${valor} está na posição ${posvalor}`)
}
