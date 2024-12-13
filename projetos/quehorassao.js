let esseInstate = new Date();
let diaDeHoje = esseInstate.getDay();//0 = domingo, 1 = segunda, 2 = terça, ...
let dataDeHoje = esseInstate.getDate();// so vai passa o dia 
let horasSaoAgora = esseInstate.getHours()// vai passa as horas 
let minutos = esseInstate.getMinutes()//vai passa os minutos

if(horasSaoAgora > 5 && horasSaoAgora < 12){
    console.log(`bom dia! as horas de agora são ${horasSaoAgora}:${minutos}`)
}else if(horasSaoAgora>= 12 && horasSaoAgora < 18){
    console.log(`boa tarde! as horas agora são ${horasSaoAgora}:${minutos}`)
} else{
    console.log(`boa noite! as horas agora são ${horasSaoAgora}:${minutos}`)
}

if(diaDeHoje > 0 && diaDeHoje < 6){
    console.log('tenha uma otima semana')
}else{
    console.log('tenha um bom final de semana ')
    if(diaDeHoje == 0){
        console.log('hoje é domingo, não va dormir tarde')
    }
}


