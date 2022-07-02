const inputNasc = document.getElementById("txtdata_nasc");

document.querySelector("form").addEventListener("submit", function(){
  //obter array com [ano,mes,dia] através de split("-") e convertendo em numero com Map
  let nasc = inputNasc.value.split("-").map(Number);
  //construir data 18 anos a seguir a data dada pelo usuario
  let depois18Anos = new Date(nasc[0] + 18, nasc[1] - 1, nasc[2]);
  let agora = new Date();
  
  if (depois18Anos <= agora){
    console.log("Maior de 18");
  }
  else {
    console.log("Menor de 18");
  }
  event.preventDefault(); //só para não mudar de pagina na submissão do formulario
});

