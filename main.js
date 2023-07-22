function calcularVelocidade() {
  let velocidade = ""
  const kilometros = document.getElementById("velocidade").value
  let resultado = document.getElementById("resultado")
  // o limite de velocidade é de 60 Km/h
  if (kilometros >= 90) {
    velocidade = "Infração gravíssima" // 50% acima do limite de velocidade
  } else if (kilometros >= 72 && kilometros < 90) {
    velocidade = "Infração grave" // 20% até 50% acima do limite de velocidade
  } else if (kilometros >= 60 && kilometros < 72) {
    velocidade = "Infração média" // 20% acima do limite de velocidade
  } else {
    velocidade = "Sem infração" // abaixo do limite de velocidade
  }
  console.log("clicou")
  console.log(kilometros)
  console.log(velocidade)

  resultado.innerHTML = velocidade
}
