export default function TratamentoFormulario(arg1, arg2) {
  let dados;

  if (arg2) {
    arg1.preventDefault();
    dados = arg2;
  } else {
    dados = arg1;
  }

  if (dados.nome.trim() === "" || dados.email.trim() === "") {
    alert("Nome e email são obrigatórios!");
    return;
  }

  if (dados.telefone.trim() !== "" && isNaN(dados.telefone)) {
    alert("O telefone deve ser numérico!");
    return;
  }

  alert(JSON.stringify(dados, null, 2));
}