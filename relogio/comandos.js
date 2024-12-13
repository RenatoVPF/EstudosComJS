function carregar (){
    let mensagem = window.document.getElementById('msg');
    let mensagemDaHora = window.document.getElementById('msg2')
    let img = window.document.getElementById('arte');
    let tempo = new Date();
    let horas = tempo.getHours();
    let minuto = tempo.getMinutes();
    mensagem.innerHTML = `agora são ${horas} horas e ${minuto} minutos`
    if (horas >= 5 && horas < 12){
        img.src = 'manha.png'
        mensagemDaHora.innerHTML = 'Bom Dia humano!'
        document.body.style.background = '#075cacf3'
    } else if (horas >= 12 && horas < 18 ){
        img.src = 'finaldetarde.png'
        mensagemDaHora.innerHTML = 'Boa Tarde humano!'
         document.body.style.background = '#1d89c7'
    } else if( horas >= 18 && horas < 24){
        img.src = 'noite.png'
        mensagemDaHora.innerHTML = 'Boa Noite humano!'
        document.body.style.background = '#1b107c'
    }else{
         mensagemDaHora.innerHTML = 'Você ainda não foi dormir'
         img.src = 'noite.png'
         document.body.style.background = '#0b0825'
    }

}