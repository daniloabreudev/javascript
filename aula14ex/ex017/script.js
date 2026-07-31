function gerarTabuada(){
    let num = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')

    if(num.value.length == 0){
        window.alert("Tente novamente. Digite um número válido")
    }else{
        let cont = 1
        let numero_formatado = Number(num.value)

        res.innerHTML = ''
        while(cont <= 10){
            res.innerHTML += `${cont} X ${numero_formatado} = ${cont * numero_formatado}<br>`
            cont += 1
        }
    }
}