// Dados simulados do usuário
  const udsuariodd = {
    active: false,
    nomeCompleto: "",
    dataNascimento: "",
    ultimoAcesso: "",
    statusSeguranca: "",
    autenticacao: "",
    bloqueado: false,
    motivoBloqueio: "",
    tipoBloqueio: "",
    recursosDisponiveis: [],
    dispositivo_celularVinculado: "",
    usoRecursos: 0, // em porcentagem
    vinculadoCelular: false,
    plano: {
      nome: "",
      validade: "", // data de validade
    },
    arquivos: [
      //{nome: "", tipo: "", tamanho: ""}
    ],
    armazenamentoTotal: 0, // GB
  };


loade_user(udsuariodd);

