
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("Bruna")

function rolarparadireita() {
    leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:103px"

}
function rolarparaesquerda() {
    leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setaDireita.style ="display:flex; margin-top:103px" 
    setaEsquerda.style ="display:none"

}

  function formatarTelefone(input) {
  // Remove todos os caracteres não numéricos
  var telefone = input.value.replace(/\D/g, '');

  // Insere os parênteses, espaço e traço nos lugares corretos
  telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');

  // Atualiza o valor do campo de entrada com o telefone formatado
  input.value = telefone;
}
  