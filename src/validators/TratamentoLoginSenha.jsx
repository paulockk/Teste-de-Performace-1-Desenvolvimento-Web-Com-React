  export default function handleEnviar() {
    if (
      document.getElementById("nome").value === "" ||
      document.getElementById("senha").value === ""
    ) {
      alert("Por favor, preencha todos os campos!");
    } else if (document.getElementById("senha").value.length < 6) {
      alert("A senha deve conter pelo menos 6 caracteres!");
    } else if (!/\d/.test(document.getElementById("senha").value)) {
      alert("A senha deve conter pelo menos um número!");
    } else if (!/[A-Z]/.test(document.getElementById("senha").value)) {
      alert("A senha deve conter pelo menos uma letra maiúscula!");
    } else if (document.getElementById("nome").value.length < 3) {
      alert("O nome deve conter pelo menos 3 caracteres!");
    } else {
      alert("Formulário enviado!");
    }
  }