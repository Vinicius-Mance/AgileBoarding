const abrirLerMaisSobre = () => {
  document.querySelector("body").style.overflow = "scroll";
  document.getElementById('ancoraAbrirLerMaisSobre').click();
  document.querySelector("body").style.overflow = "hidden";
}

let lerMaisSobre = document.getElementById('lerMaisSobre');
lerMaisSobre.onclick = function(){abrirLerMaisSobre();}
