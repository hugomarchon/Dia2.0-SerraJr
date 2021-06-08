function conferesenha() {
  var senha = confere.senha.value;
  var senha1 = confere.confirmasenha.value;
  var nome = confere.nome.value;

  if (senha == senha1 && senha != "" && senha1 != "") {
    alert("Seja bem-vindo(a) " + nome + "!");
    return false;
  }
  if (senha != senha1 && senha != "" && senha1 != "") {
    alert("Senhas diferentes!");
    return false;
  }
  if (senha == "") {
    alert("Por favor, digite sua senha!");
  }
  if (senha1 == "") {
    alert("Por favor, confirme sua senha!");
  }
  if (senha == "" && senha1 == "") {
    alert("Por favor, digite e confirme sua senha!");
  }
}
