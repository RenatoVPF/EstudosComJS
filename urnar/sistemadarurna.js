let osCandidatos = [ 0, 0, 0]
let osVotos = document.querySelector('input#numcad')

function votar(){
    let numDoVoto = Number(osVotos.value)
    if (numDoVoto == 0){
        osCandidatos[0] += 1
        window.alert('O seu voto foi contabilizado ')
    } else if(numDoVoto == 1){
        osCandidatos[1] += 1
        window.alert('O seu voto foi contabilizado ')
    }else if (numDoVoto == 2){
        osCandidatos[2] += 1
        window.alert('O seu voto foi contabilizado ')
    }else{
        window.alert('voto invalido')
    }
        

}
function finalizarvotacao(){
    if (osCandidatos[1] > osCandidatos[2]){
        window.alert(`o candidato 1 ganhou a eleição, o candidato tem ${osCandidatos[1]} votos `)
    } else{
        window.alert(`O candidato 2 ganhou a eleição, o candidato tem ${osCandidatos[2]} votos`)
    }
}
