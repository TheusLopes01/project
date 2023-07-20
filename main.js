function calcularVelocidade() {
  let velocidade = ""
  const kilometros = document.getElementById("velocidade").value;
  let resultado = document.getElementById("resultado");

  if (kilometros >= 100) {
    velocidade = "rápido";
  }
  else if (kilometros >= 50 && kilometros < 100) {
    velocidade = "moderada";
  }
  else if (kilometros >= 20 && kilometros < 50) {
    velocidade = "devagar";
  } else {
    velocidade = "parado";
  }
  console.log("clicou")
  console.log(kilometros)
  console.log(velocidade)
  
  resultado.innerHTML = velocidade
  
}





