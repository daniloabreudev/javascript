let numeros = []
let num = window.document.getElementById('fnum')
let flista = document.getElementById('flista')
let res = document.getElementById('res')
    
function adicionar(){
    let valorNum = Number(num.value)

    if (valorNum >=1 && valorNum<=100 && !numeros.includes(valorNum)){
        numeros.push(valorNum)

        let item = document.createElement('option')
        item.text = `Valor ${valorNum} adicionado`
        flista.appendChild(item)
    } else{
        window.alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}
function finalizar() {
    if(numeros.length == 0){
        window.document('Adicione valores antes de finalizar!')
    }else{
        let total = numeros.length

        let maior = Math.max(...numeros)
        let menor = Math.min(...numeros)

        let soma = 0
        for (let pos in numeros){
            soma += numeros[pos]
        }
        let media = soma /total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado é ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado é ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p> A média dos valores informados é ${media} </p>`
    }
}