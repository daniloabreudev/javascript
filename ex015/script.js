function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    
    var nasc = window.document.getElementById('iano')      
    var msg = window.document.getElementById('mensagem')   
    
    if (nasc.value.length == 0 || Number(nasc.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var listaSexo = window.document.getElementsByName('sexo')
        
        var idade = anoAtual - Number(nasc.value)
        var genero = ''

        if (listaSexo[0].checked) {
            genero = 'Mulher'
        } else if (listaSexo[1].checked) {
            genero = 'Homem'
        }
        
     
        msg.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
    }
}