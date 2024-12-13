let adNum = document.querySelector('input#adnum');
let adNaLista = document.querySelector('select#alista');
let olhaoResu = document.querySelector('div#resu');
let aListaDeNum = []

function esteNumero(nu){
    if(Number(nu) >= 1 && Number(nu) <= 100){
        return true;
    }else{
        return false;
    }

};

function estaNaLista(nu, list){
    if(list.indexOf(Number(nu))!= -1){
        return true
    }else{
        return false
    }



}

function botar(){
    if(esteNumero(adNum.value) && !estaNaLista(adNum.value, aListaDeNum)){
        aListaDeNum.push(Number(adNum.value))
        let intem = document.createElement('option')
        intem.text =`o numero ${adNum.value} foi adicinado`
        adNaLista.appendChild(intem)
        olhaoResu.innerHTML = ''

    }else{
        window.alert('o valor selecionado invalido ou ja se encontra na lista ')
    }
    adNum.value = ''
    adNum.focus();

}

function finalizar(){
    if(aListaDeNum.length == 0){
        window.alert('você não botou nenhum número, você é idiota porra?')
    }else{
        let elenentosDaLista = aListaDeNum.length
        let oMaior = aListaDeNum[0]
        let oMenor = aListaDeNum[0]
        let aSoma = 0
        let aMedia = 0
        for(let c in aListaDeNum){
            aSoma += aListaDeNum[c];
            if(aListaDeNum[c] > oMaior){
                oMaior = aListaDeNum[c]
            }
            if(aListaDeNum[c] < oMenor){
                oMenor = aListaDeNum[c]
            }

        }
        aMedia = aSoma / elenentosDaLista

        olhaoResu.innerHTML = ''
        olhaoResu.innerHTML += `<p> Tem ${elenentosDaLista} números na lista</p>`
        olhaoResu.innerHTML += `<p> O maior número da lista é ${oMaior} </p>`
        olhaoResu.innerHTML += `<p> O menor número da lista é ${oMenor} </p>`
        olhaoResu.innerHTML += `<p> Somando todos os valores dessa lista temos ${aSoma} </p>`
        olhaoResu.innerHTML += `<p> E a media das somar é ${aMedia} </p>`



    }
}


