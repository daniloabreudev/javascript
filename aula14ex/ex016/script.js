function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")

    // 1. Corrigido .length em todos os campos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! Preencha todos os dados.'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        // 2. Garante que p seja pelo menos 1
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        // 3. Estrutura de contagem
        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } // Chave do else fechada corretamente aqui!

        res.innerHTML += `\u{1F3C1}` // Bandeirinha de chegada no final
    }
}