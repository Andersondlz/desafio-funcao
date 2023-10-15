let quatVitoria = 150
let quatDerrota = 60
let saldoVitoria = somaJogo(quatVitoria,quatDerrota)
let resultNivel = verificarNivel(saldoVitoria)
console.log ("O Herói tem de saldo de " + saldoVitoria + ", está no nível de " + resultNivel)
console.log(saldoVitoria)
console.log (resultNivel)
function somaJogo (quatVitoria,quatDerrota){
  let saldoRankeado = quatVitoria - quatDerrota
  return saldoRankeado
}
function verificarNivel(saldoVitoria){
  let nivelExperiencia = ""
  if (saldoVitoria <= 10){
    nivelExperiencia = "Ferro"
    return nivelExperiencia
  } else if ((saldoVitoria >= 11) && (saldoVitoria <= 20)){
    nivelExperiencia = "Bronze"
    return nivelExperiencia
  } else if ((saldoVitoria >= 21) && (saldoVitoria <= 50)){
    nivelExperiencia = "Prata"
    return nivelExperiencia
  } else if ((saldoVitoria >= 51) && (saldoVitoria <= 80)){
    nivelExperiencia = "Ouro"
    return nivelExperiencia
  } else if ((saldoVitoria >= 81) && (saldoVitoria <= 90)){
    nivelExperiencia = "Diamante"
    return nivelExperiencia
  } else if ((saldoVitoria >= 91) && (saldoVitoria <= 100)){
    nivelExperiencia = "Lendário"
    return nivelExperiencia
  } else if (saldoVitoria >= 101){
    nivelExperiencia = "Imortal"
    return nivelExperiencia
  }
}