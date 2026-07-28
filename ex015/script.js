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
            if (idade <12){
                img.src = 'menina-criança.jpg'
                img.alt = 'foto de uma menina'
            }else if (idade < 18){
                img.src = 'menina-jovem.jpg'
                img.alt = 'foto de uma jovem'
            }else if (idade < 60){
                img.src = 'menina-adulta.jpg'
                img.alt = 'foto de uma mulher adulta'
            }else{
                img.src = 'menina-idosa.jpg'
                img.alt = 'foto de uma mulher idosa'
            }
            
        } else if (listaSexo[1].checked) {
            genero = 'Homem'
            if (idade <12){
                img.src = 'menino-crianca.jpg'
                img.alt = 'foto de uma menino'
            }else if (idade < 18){
                img.src = 'menino-jovem.jpg'
                img.alt = 'foto de um jovem'
            }else if (idade < 60){
                img.src = 'menino-adulto.jpg'
                img.alt = 'foto de um homem adulto'
            }else{
                img.src = 'menino-idoso.jpg'
                img.alt = 'foto de um homem idoso'
            }
        }

        var nomeDigitado = nomeInput.value.toUpperCase()
        txtNome.innerHTML =`${nomeDigitado}`
        
     
        msg.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
    }
}