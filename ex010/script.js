function carregar() {
    var msg= document.getElementById("msg")
    var img= document.getElementById("imagem")
    var data= new Date()
    //var hora= data.getHours()
    var hora= 18 
    msg.innerHTML= 'Agora são '+hora+' horas'
    if (hora >0 && hora <=12) {
        img.src= 'manha.png'
        document.body.style.background = '#e9e2cf'
    }
    else if (hora >12 && hora <=16) {
        img.src= 'meiodia.png'
        document.body.style.background = '#5c7fa5'
    }
    else if (hora >16 && hora <=18) {
        img.src= 'tarde.png'
        document.body.style.background = '#913a5a'
    }
    else {
        img.src= 'noite.png'
        document.body.style.background = '#2d5a9b'
    }
}
