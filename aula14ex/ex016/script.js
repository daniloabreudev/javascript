function contar() {
    // 1. CAPTURA DOS ELEMENTOS DO DOM
    // Pegamos os elementos HTML pelos IDs para conseguir ler/escrever neles
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    // 2. VALIDAÇÃO DE CAMPOS VAZIOS
    // .value pega o texto do input | .length == 0 verifica se o campo está sem nada
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados! ')
    } else {
        res.innerHTML = 'Contando: <br>' // Limpa o texto anterior e insere quebra de linha

        // 3. CONVERSÃO DE TIPOS (STRING -> NUMBER)
        // O valor do input sempre vem como texto (String). Precisamos converter para número
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        // 4. TRATAMENTO DE SEGURANÇA (PREVINE LOOP INFINITO)
        // Se o passo for 0 ou negativo, a contagem trava o navegador. Forçamos p = 1
        if (p <= 0) {
            window.alert('Passo inválido! Considerado PASSO 1')
            p = 1
        }

        // 5. DECISÃO DO FLUXO (CRESCENTE OU DECRESCENTE)
        if (i < f) {
            // CONTAGEM CRESCENTE: Se o início for menor que o fim
            // Começa em 'i', roda enquanto for menor/igual a 'f', e soma o passo 'p'
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` // Acumula (+=) o número e a mãozinha
            }
        } else {
            // CONTAGEM DECRESCENTE: Se o início for maior/igual ao fim
            // Começa em 'i', roda enquanto for maior/igual a 'f', e subtrai o passo 'p'
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }

        // 6. FINALIZAÇÃO VISUAL
        res.innerHTML += `FIM \u{1F3C1}` // Adiciona a bandeirada no final da contagem
    }
}