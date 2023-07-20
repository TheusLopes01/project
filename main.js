function calcularVelocidade() {
  let velocidade = ""
  const kilometros = document.getElementById("velocidade").value;
  let resultado = document.getElementById("resultado");

  if (kilometros >= 100) {
    velocidade = "Infração gravíssima";
  }
  else if (kilometros >= 50 && kilometros < 100) {
    velocidade = "Infração grave";
  }
  else if (kilometros >= 20 && kilometros < 50) {
    velocidade = "Infração média";
  } else {
    velocidade = "Parado";
  }
  console.log("clicou")
  console.log(kilometros)
  console.log(velocidade)
  
  resultado.innerHTML = velocidade
  
}





