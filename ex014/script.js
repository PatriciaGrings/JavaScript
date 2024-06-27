function tabuada() {
    var num= document.getElementById('txtn')
    var n= Number(num.value)
    var tab= document.getElementById('txttab')
    if (n == '') {
        res.innerHTML= 'Insira um número!'
    } else {
        tab.innerHTML= ''
        for (var c=1; c<=10; c++) {
        var item= document.createElement('option')
        var oper = n*c
        //res.innerHTML+= n + 'x' + c + '=' + oper + '<br/>'
        item.text= n + 'x' + c + '=' + oper
        tab.appendChild(item)
    }
    }   
}