function verificar() {
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if (fano.value.length == 0 || fano.value>ano) {
        window.alert('Erro! Digite novamente')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero= ''
        var img= document.createElement('img')
        //img.setAttribute('id', 'foto')
        

        if (fsex[0].checked) {
            genero= 'Masculino'
           if (idade >= 0 && idade <5) {
            img.setAttribute('src', 'meninobebe.png')
        } else if (idade >=5 && idade <12) {
            img.setAttribute('src', 'meninocrianca.png')
        } else if (idade >=12 && idade <18) {
            img.setAttribute('src', 'meninoadolescente.png')
        } else if (idade >=18 && idade <35) {
            img.setAttribute('src', 'homemjovem.png')
        } else if (idade >=35 && idade <70) {
            img.setAttribute('src', 'homemadulto.png')
        } else if (idade >=70) {
            img.setAttribute('src', 'homemidoso.png')
        } 
        } else {
            genero= 'Feminino'
            if (idade >= 0 && idade <5) {
                img.setAttribute('src', 'meninabebe.png')
            } else if (idade >=5 && idade <12) {
                img.setAttribute('src', 'meninacrianca.png')
            } else if (idade >=12 && idade <18) {
                img.setAttribute('src', 'meninaadolescente.png')
            } else if (idade >=18 && idade <35) {
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade >=35 && idade <70) {
                img.setAttribute('src', 'mulheradulta.png')
            } else if (idade >=70) {
                img.setAttribute('src', 'mulheridosa.png')
            } 
        }
        res.innerHTML= 'Detectamos ' + genero + ' com idade de ' + idade + ' anos'
        res.appendChild(img)
    }
}