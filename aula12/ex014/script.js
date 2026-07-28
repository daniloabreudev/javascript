function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos, Horário de Brasília.`
    if (hora >= 0 && hora <12){
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#E2CD9F'
    }else if (hora >=12 && hora <18){
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#B9846F'
    }else{
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#15243C'
    }
}