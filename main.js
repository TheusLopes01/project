function calcularVelocidade() {
  let velocidade = ""
  const kilometros = document.getElementById("velocidade").value;
  let resultado = document.getElementById("resultado");

  if (kilometros >= 100) {
    velocidade = "Alta velocidade";
  }
  else if (kilometros >= 50 && kilometros < 100) {
    velocidade = "Velocidade moderada";
  }
  else if (kilometros >= 20 && kilometros < 50) {
    velocidade = "Velocidade normal";
  } else {
    velocidade = "Parado";
  }
  console.log("clicou")
  console.log(kilometros)
  console.log(velocidade)
  
  resultado.innerHTML = velocidade
  
}





