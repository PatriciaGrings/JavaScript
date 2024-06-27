var num = document.getElementById('txtn')
var sai = document.getElementById('txts')
var res = document.getElementById('res')
var vet = []
var soma = 0
var maior= ''
var menor= 100
var media= 0
function adicionar (){   
    var n = Number(num.value)   
    if (n < 1 || n > 100) {
        alert ('ERRO! Digite um número entre 1 e 100!')
    } else { 
            vet.push(n)
            var item= document.createElement('option') 
            item.text= 'Você adicionou '+n
            sai.appendChild(item)
            res.innerHTML=''                                               
    }
    num.value= ''
    num.focus()
}

function finalizar () {
    for (var c in vet) {
        if (vet[c]>maior) {
            maior=vet[c]
    } 
        if (vet[c]<menor) {
            menor=vet[c]
    }
    soma= soma+vet[c]
}
media= soma/vet.length
res.innerHTML='Ao todo temos ' + vet.length + ' números cadastrados <br/>'
res.innerHTML += 'O maior valor informado foi ' + maior + '</br>'
res.innerHTML += 'O menor valor informado foi ' + menor + '</br>'
res.innerHTML += 'Somando todos os valores o total é: ' + soma + '</br>'
res.innerHTML += 'A média dos valores é: ' + media
}