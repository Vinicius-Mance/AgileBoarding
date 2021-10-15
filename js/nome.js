let campoNome = document.getElementById('campoNome');
let erroNome = document.getElementById('erroNome');

campoNome.onkeyup = function () {
campoNome.value =  campoNome.value.replace(/\d+/g, '').replace(/[^\w\s]/gi, '');
  erroNome.innerHTML = "";
}

document.getElementById('botaoNome').onclick = function(e){

  if (campoNome.value.length == 0) {
    e.preventDefault();
    erroNome.innerHTML = "Insira um Nome";
  }

}
