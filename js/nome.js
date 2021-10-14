let campoNome = document.getElementById('campoNome');
let erroNome = document.getElementById('erroNome');

campoNome.onkeyup = function(e){
  erroNome.innerHTML = "";
}

document.getElementById('botaoNome').onclick = function(e){

  if (campoNome.value.length == 0) {
    e.preventDefault();
    erroNome.innerHTML = "Insira um Nome";
  }

}
