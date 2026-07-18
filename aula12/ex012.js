var agora = new Date()
var hora = agora.getFullYear()
console.log(`Agora são ${hora} horas`)
if(hora >=0 && hora <12){
    console.log("Da Manhâ!")
}else if(hora <18){
    console.log("Da Tarde")
}else if(hora <24){
    console.log("Da noite!")
}else{
    console.log("Você digitou uma hora inexistente!")
}