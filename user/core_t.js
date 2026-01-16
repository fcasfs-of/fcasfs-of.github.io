 
  // Funções auxiliares
  function formatarTamanho(tamanhoGB) {
    if (tamanhoGB >= 1024) {
      return (tamanhoGB/1024).toFixed(2) + ' TB';
    } else if (tamanhoGB >= 1) {
      return tamanhoGB.toFixed(2) + ' GB';
    } else {
      return (tamanhoGB*1024).toFixed(2) + ' MB';
    }
  }

  function calcularIdade(dataNasc) {
    const hoje = new Date();
    const nasc = new Date(dataNasc);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    const m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
      idade--;
    }
    return idade;
  }

  function calcularDiasRestantes(dataValidade) {
    const hoje = new Date();
    const validade = new Date(dataValidade);
    const diffTime = validade - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  function formatarData(dataStr) {
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-BR');
  }



 
 const recursosUl = document.getElementById('recursosDisponiveis');
  const btnVincular = document.getElementById('vincularCelular');
  const btnDesvincular = document.getElementById('desvincularCelular');
  const expiradoElem = document.getElementById('validadePlano');
  const statusConta = document.getElementById('statusConta');
  const motivo = document.getElementById('motivoBloqueio');
  const tipo = document.getElementById('tipoBloqueio');
  
       btnVincular.classList.add("none");
       btnDesvincular.classList.add("none");


function loade_user(usuario){ 

  const recursosUl = document.getElementById('recursosDisponiveis');
  const btnVincular = document.getElementById('vincularCelular');
  const btnDesvincular = document.getElementById('desvincularCelular');
  const expiradoElem = document.getElementById('validadePlano');
  const statusConta = document.getElementById('statusConta');
  const motivo = document.getElementById('motivoBloqueio');
  const tipo = document.getElementById('tipoBloqueio');
  
       btnVincular.classList.add("none");
       btnDesvincular.classList.add("none");


if (usuario){
  // Preencher informações
if (usuario.nomeCompleto){  document.getElementById('usuario').textContent = usuario.nomeCompleto;   
 document.getElementById('nomeCompleto').textContent = usuario.nomeCompleto;
}
  
  const calida=""; 
  if (usuario.dataNascimento){  
   document.getElementById('nascimento').textContent = formatarData(usuario.dataNascimento);
 
 calida = calcularIdade(usuario.dataNascimento) + ' anos';
  if(calida=="NaN anos"){   calida="";   }
  }
  document.getElementById('idade').textContent = calida;

  
    if (usuario.ultimoAcesso){  document.getElementById('ultimoAcesso').textContent = usuario.ultimoAcesso;   }
    if (usuario.statusSeguranca){  document.getElementById('statusSeguranca').textContent = usuario.statusSeguranca;   }
    if (usuario.autenticacao){  document.getElementById('autenticacao').textContent = usuario.autenticacao;  }


  // Armazenamento
     if (usuario.usoRecursos){  const uso = usuario.usoRecursos;
   if (usuario.armazenamentoTotal){    document.getElementById('usoArmazenamento').textContent = formatarTamanho((uso/100) * usuario.armazenamentoTotal);
 document.getElementById('totalArmazenamento').textContent = formatarTamanho(usuario.armazenamentoTotal);   }
  document.getElementById('percentualUso').textContent = uso + '%';

  // Progress bar
  document.getElementById('progressArmazenamento').style.width = uso + '%';
  if (uso+'%'=="100%"){  
    document.getElementById('progressArmazenamento').style.background = 'red';
  }

}

  // Status de bloqueio

  if (usuario.bloqueado) {
    statusConta.textContent = "Conta Bloqueada";
    statusConta.classList.add('blocked');
   if (usuario.motivoBloqueio) { motivo.textContent = "Motivo: " + usuario.motivoBloqueio;  } 
    if (usuario.tipoBloqueio) {  tipo.textContent = "Tipo: " + usuario.tipoBloqueio;   }
  } else {
    statusConta.textContent = "Conta Não Ativa";
    if (usuario.active) {
        statusConta.textContent = "Conta Ativa";
    }
  }

  // Recursos disponíveis
 if (usuario.recursosDisponiveis) {  usuario.recursosDisponiveis.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    recursosUl.appendChild(li);
  });    }

  // Uso de recursos
 if (uso) {  document.getElementById('usoRecursos').textContent = uso + '%';   }

  // Vincular/desvincular celular
      
      //if (usuario.active && usuario.dispositivo_celularVinculado) {      if (usuario.dispositivo_celularVinculado!="") {       }    }
       
       
  function atualizarBotaoCelular() {
 
     if (usuario.active && usuario.dispositivo_celularVinculado) {
     if (usuario.dispositivo_celularVinculado!="") {
   
   if (usuario.vinculadoCelular) {
      btnVincular.style.display = 'none';
      btnDesvincular.style.display = 'inline-block';
    } else {
      btnVincular.style.display = 'inline-block';
      btnDesvincular.style.display = 'none';
    }  }
    }
  }

  btnVincular.addEventListener('click', () => {
    usuario.vinculadoCelular = true;
    atualizarBotaoCelular();
  });

  btnDesvincular.addEventListener('click', () => {
    usuario.vinculadoCelular = false;
    atualizarBotaoCelular();
  });

  atualizarBotaoCelular();

if (usuario.plano) {
  // Plano
  document.getElementById('nomePlano').textContent = usuario.plano.nome;
  const validade = new Date(usuario.plano.validade);
  const hoje = new Date();
  const diffTime = validade - hoje;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById('validadePlano').textContent = formatarData(usuario.plano.validade);
  document.getElementById('diasRestantes').textContent = diffDays + ' dias';

}

if (usuario.arquivos) {
  // Lista de Arquivos
  const totalArquivos = usuario.arquivos.length;
  document.getElementById('totalArquivos').textContent = totalArquivos;
  const tbody = document.getElementById('listaArquivos');
  usuario.arquivos.forEach(file => {
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.textContent = file.nome;
    const tdTipo = document.createElement('td');
    tdTipo.textContent = file.tipo;
    const tdTamanho = document.createElement('td');
    tdTamanho.textContent = formatarTamanho(file.tamanho);
    tr.appendChild(tdNome);
    tr.appendChild(tdTipo);
    tr.appendChild(tdTamanho);
    tbody.appendChild(tr);
  });

}

  // Último acesso com autenticação
if (usuario.ultimoAcesso) {  document.getElementById('ultimoAcessoSeguranca').textContent = usuario.ultimoAcesso;    }

if(diffDays){
// Destacar se expirado ou bloqueado
  const diasRestantesPlano = diffDays;
  if (diasRestantesPlano < 0) {
    expiradoElem.classList.add('expired');
    expiradoElem.textContent += ' (Expirado)';
  }
  
 }

  if (usuario.bloqueado) {
    document.getElementById('statusConta').classList.add('blocked');
  }
  }

}

