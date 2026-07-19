function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    
    var nomeInput = window.document.getElementById('inome')
    var txtNome = window.document.getElementById('nome-resultado')

    var nasc = window.document.getElementById('iano')      
    var msg = window.document.getElementById('mensagem') 
    var img = window.document.getElementById('foto')  

   
    
    if (nasc.value.length == 0 || Number(nasc.value) > anoAtual || nomeInput.value == '') {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var listaSexo = window.document.getElementsByName('sexo')
        var idade = anoAtual - Number(nasc.value)
        var genero = ''

        if (listaSexo[0].checked) {
            genero = 'Mulher'
            img.src = 'foto-mulher.png'
            img.alt = 'foto de uma mulher'
        } else if (listaSexo[1].checked) {
            genero = 'Homem'
            img.src = 'foto-homem.png'
            img.alt = 'foto de um homem'
        }

        var nomeDigitado = nomeInput.value.toUpperCase()
        txtNome.innerHTML =`${nomeDigitado}`
        
     
        msg.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
    }
}