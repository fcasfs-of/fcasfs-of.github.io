function inicializarGerenciadorDocumentos(config) {
  // Configurações Padrão e Customizadas
  const idContainer = config.id || null;
  const listaDocumentos = config.documentos || [];
  const call_favs = config.call_fav || function(){};
  const idioma = config.idioma === 'en' ? 'en' : 'pt';
  const itensPorPaginaCustom = parseInt(config.itensPorPagina) || 4;
  
  // Dicionário de Traduções Completas
  const textos = {
    pt: { buscar: 'Buscar...', categoria: 'Todas Categorias', favoritos: 'Ver Favoritos', voltar: 'Voltar', ver: 'Ver', baixar: 'Download', semDoc: 'Nenhum documento encontrado.', mostrando: 'Mostrando', de: 'de', itens: 'itens', limparFav: 'Limpar Tudo', expBackup: 'Exportar Backup', impBackup: 'Importar Backup', erroImport: 'Arquivo de backup inválido!', sucessoImport: 'Backup importado com sucesso!' },
    en: { buscar: 'Search...', categoria: 'All Categories', favoritos: 'View Favorites', voltar: 'Back', ver: 'View', baixar: 'Download', semDoc: 'No documents found.', mostrando: 'Showing', de: 'of', itens: 'items', limparFav: 'Clear All', expBackup: 'Export Backup', impBackup: 'Import Backup', erroImport: 'Invalid backup file!', sucessoImport: 'Backup imported successfully!' }
  };
  
  // Estado Global da Aplicação
  let estado = {
    documentos: listaDocumentos,
    categoriaAtual: 'todos',
    termoBusca: '',
    paginaAtual: 1,
    itensPorPagina: itensPorPaginaCustom,
    exibindoFavoritos: false
  };

  // Injeção de Variáveis CSS Suportando Temas (Light / Dark)
  if (!document.getElementById('doc-viewer-styles')) {
    const estilo = document.createElement('style');
    estilo.id = 'doc-viewer-styles';
    estilo.textContent = `
      .doc-container {
        --primary: #6366f1;
        --primary-hover: #4f46e5;
        --danger: #ef4444;
        --danger-hover: #dc2626;
        --radius: 12px;
        --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        font-family: system-ui, -apple-system, sans-serif; 
        background: var(--bg-primary); 
        padding: 24px; 
        border-radius: var(--radius); 
        color: var(--text-main); 
        max-width: 1200px; 
        margin: 0 auto;
        transition: background 0.3s, color 0.3s;
      }
      /* Configuração do Tema Claro (Padrão) */
      .doc-container.theme-light {
        --bg-primary: #f8fafc;
        --bg-card: #ffffff;
        --text-main: #0f172a;
        --text-muted: #64748b;
        --border: #e2e8f0;
        --border-hover: #cbd5e1;
      }
      /* Configuração do Tema Escuro */
      .doc-container.theme-dark {
        --bg-primary: #0f172a;
        --bg-card: #1e293b;
        --text-main: #f8fafc;
        --text-muted: #94a3b8;
        --border: #334155;
        --border-hover: #475569;
      }
      .doc-header { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; }
      .doc-top-bar { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; width: 100%; }
      .doc-menu-categorias { display: flex; flex-wrap: wrap; gap: 8px; border-bottom: 1px solid var(--border); padding-bottom: 12px; }
      .doc-tab-btn { padding: 8px 16px; border: 1px solid transparent; background: transparent; color: var(--text-muted); font-size: 14px; font-weight: 500; cursor: pointer; border-radius: 20px; transition: all 0.2s; }
      .doc-tab-btn:hover { background: var(--border); color: var(--text-main); }
      .doc-tab-btn.active { background: var(--primary); color: #fff; }
      .doc-input-wrapper { display: flex; align-items: center; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 0 14px; flex: 1; min-width: 200px; transition: all 0.2s; }
      .doc-input-wrapper:focus-within { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2); }
      .doc-input { border: none; padding: 10px 0 10px 8px; background: transparent; color: var(--text-main); font-size: 14px; outline: none; width: 100%; }
      .doc-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 20px; border-radius: 8px; font-weight: 500; font-size: 14px; cursor: pointer; border: 1px solid var(--border); background: var(--bg-card); color: var(--text-main); transition: all 0.2s; }
      .doc-btn:hover { background: var(--border-hover); }
      .doc-btn-primary { background: var(--primary); color: #fff; border: none; }
      .doc-btn-primary:hover { background: var(--primary-hover); }
      .doc-btn svg {  margin: 0;  }
      .doc-btn-danger { background: var(--danger); color: #fff; border: none; }
      .doc-btn-danger:hover { background: var(--danger-hover); }
      .doc-btn:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
      .doc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
      .doc-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow); position: relative; transition: transform 0.2s, background 0.3s; }
      .doc-card:hover { transform: translateY(-4px); }
      .doc-fav-icon { position: absolute; top: 16px; right: 16px; cursor: pointer; fill: none; stroke: var(--text-muted); transition: all 0.2s; z-index: 10; }
      .doc-fav-icon.active { fill: #ef4444; stroke: #ef4444; }
      .doc-preview { width: 100%; height: 140px; border-radius: 6px; object-fit: cover; margin-bottom: 12px; background: #e2e8f0; }
      .doc-icon-frame { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: rgba(99, 102, 241, 0.15); border-radius: 8px; color: var(--primary); margin-bottom: 12px; }
      .doc-title { font-size: 16px; font-weight: 600; margin: 0 0 4px 0; line-height: 1.4; }
      .doc-category { font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
      .doc-actions { display: flex; gap: 8px; margin-top: auto; }
      .doc-actions .doc-btn { flex: 1; padding: 8px; font-size: 13px; }
      .doc-pagination { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 16px; margin-top: 30px; }
      .doc-counter-text { font-size: 14px; color: var(--text-muted); font-weight: 500; }
      .doc-fav-wrapper, #doc-btn-fav, #doc-btn-import {  display:none;  }
      @media(max-width: 768px) { .doc-top-bar { flex-direction: column; align-items: stretch; } .doc-input-wrapper, .doc-btn { width: 100%; } .doc-pagination { flex-direction: column; gap: 12px; } }
    `;
    document.head.appendChild(estilo);
  }

  // Coleção Unificada de Ícones Vetoriais SVG
  const svgs = {
    arquivo: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    favorito: `<svg class="doc-fav-icon" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    buscar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    estrelaMenu: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    voltar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
    lixeira: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    olho: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    setaEsquerda: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    setaDireita: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    sol: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    lua: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    uploadBox: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
    downloadBox: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
  };

  // Instanciação ou Localização do Container HTML Alvo
  let container = document.getElementById(idContainer);
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }
  
  // Tratamento do Tema Inicial Salvo no Navegador
  const temaSalvo = localStorage.getItem('doc_viewer_theme') || 'theme-light';
  container.className = `doc-container ${temaSalvo}`;

  // Operações de Persistência no LocalStorage (Favoritos por Informações)
  function obterFavoritosSalvos() {
    return JSON.parse(localStorage.getItem('doc_favoritos_globais')) || [];
  }

  function alternarFavorito(doc) {
    let favs = obterFavoritosSalvos();
    const index = favs.findIndex(f => f.titulo === doc.titulo && f.urlVer === doc.urlVer);
    if (index > -1) { favs.splice(index, 1); } else { favs.push(doc); }
    localStorage.setItem('doc_favoritos_globais', JSON.stringify(favs));
    renderizar();
  }

  function eFavorito(doc) {
    return obterFavoritosSalvos().some(f => f.titulo === doc.titulo && f.urlVer === doc.urlVer);
  }

  // Funcionalidades Adicionadas: Backup e Alternância de Tema
  function alternarTema() {
    if (container.classList.contains('theme-light')) {
      container.classList.replace('theme-light', 'theme-dark');
      localStorage.setItem('doc_viewer_theme', 'theme-dark');
    } else {
      container.classList.replace('theme-dark', 'theme-light');
      localStorage.setItem('doc_viewer_theme', 'theme-light');
    }
    renderizar();
  }

  function exportarFavoritosBackup() {
    const dados = JSON.stringify(obterFavoritosSalvos(), null, 2);
    const blob = new Blob([dados], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const linkAviso = document.createElement('a');
    linkAviso.href = url;
    linkAviso.download = `backup_favoritos_${idioma}.json`;
    linkAviso.click();
    URL.revokeObjectURL(url);
  }

  function importarFavoritosBackup(evento) {
    const arquivo = evento.target.files[0];
    if (!arquivo) return;
    
    const leitor = new FileReader();
    leitor.onload = function(e) {
      try {
        const dadosImportados = JSON.parse(e.target.result);
        if (Array.isArray(dadosImportados)) {
          localStorage.setItem('doc_favoritos_globais', JSON.stringify(dadosImportados));
          alert(textos[idioma].sucessoImport);
          renderizar();
        } else {
          alert(textos[idioma].erroImport);
        }
      } catch (err) {
        alert(textos[idioma].erroImport);
      }
    };
    leitor.readAsText(arquivo);
    evento.target.value = ''; // Reseta o input de arquivo
  }

  // Extrair e Montar a Lista de Categorias Únicas
  const categorias = ['todos', ...new Set(estado.documentos.map(d => d.categoria).filter(Boolean))];

  // Estrutura Base Estrutural do Painel HTML
  container.innerHTML = `
    <div class="doc-header">
      <div class="doc-menu-categorias" id="doc-menu-abas">
        ${categorias.map(c => `
          <button class="doc-tab-btn ${c === 'todos' ? 'active' : ''}" data-cat="${c}">
            ${c === 'todos' ? textos[idioma].categoria : c}
          </button>
        `).join('')}
      </div>
      <div class="doc-top-bar">
        <div class="doc-input-wrapper" id="doc-busca-wrapper">
          <span style="display:inline-flex; align-items:center; color:var(--text-muted);">${svgs.buscar}</span>
          <input type="text" class="doc-input" id="doc-busca" placeholder="${textos[idioma].buscar}">
        </div>
        <button class="doc-btn" id="doc-btn-tema"></button>
        <button class="doc-btn doc-btn-primary" id="doc-btn-fav"></button>
        <button class="doc-btn" id="doc-btn-export" style="display: none;"></button>
        <button class="doc-btn" id="doc-btn-import" style="display: none;"></button>
        <button class="doc-btn doc-btn-danger" id="doc-btn-limpar" style="display: none;"></button>
        <input type="file" id="doc-file-input" accept=".json" style="display: none;">
      </div>
    </div>
    <div class="doc-grid" id="doc-lista-grid"></div>
    <div class="doc-pagination" id="doc-paginacao"></div>
  `;

  // Mapeamento dos Elementos do DOM
  const gridEl = container.querySelector('#doc-lista-grid');
  const paginacaoEl = container.querySelector('#doc-paginacao');
  const buscaEl = container.querySelector('#doc-busca');
  const buscaWrapperEl = container.querySelector('#doc-busca-wrapper');
  const btnTemaEl = container.querySelector('#doc-btn-tema');
  const btnFavEl = container.querySelector('#doc-btn-fav');
  const btnLimparEl = container.querySelector('#doc-btn-limpar');
  const btnExportEl = container.querySelector('#doc-btn-export');
  const btnImportEl = container.querySelector('#doc-btn-import');
  const fileInputEl = container.querySelector('#doc-file-input');
  const menuAbasEl = container.querySelector('#doc-menu-abas');

  // Lógica Principal de Renderização em Tela
  function renderizar() {
    const estaEscuro = container.classList.contains('theme-dark');
    const totalFavoritosExistentes = obterFavoritosSalvos().length;
    let docsFiltrados = estado.exibindoFavoritos ? obterFavoritosSalvos() : estado.documentos;

    // Atualização do Ícone do Botão de Tema
    btnTemaEl.innerHTML = estaEscuro ? `${svgs.sol}` : `${svgs.lua}`;

    // Filtros por Categoria e Busca Textual
    if (estado.categoriaAtual !== 'todos' && !estado.exibindoFavoritos) {
      docsFiltrados = docsFiltrados.filter(d => d.categoria === estado.categoriaAtual);
    }
    if (estado.termoBusca) {
      const termo = estado.termoBusca.toLowerCase();
      docsFiltrados = docsFiltrados.filter(d => 
        (d.titulo && d.titulo.toLowerCase().includes(termo)) || 
        (d.categoria && d.categoria.toLowerCase().includes(termo))
      );
    }

    // Cálculos de Paginação Dinâmica
    const totalItens = docsFiltrados.length;
    const totalPaginas = Math.ceil(totalItens / estado.itensPorPagina) || 1;
    if (estado.paginaAtual > totalPaginas) estado.paginaAtual = totalPaginas;

    const inicio = (estado.paginaAtual - 1) * estado.itensPorPagina;
    const docsPaginados = docsFiltrados.slice(inicio, inicio + estado.itensPorPagina);
    const totalItensNaPaginaAtual = docsPaginados.length;

    // Alternar Visibilidade dos Botões de Fluxo
    if (estado.exibindoFavoritos) {
    
    if (typeof call_favs === 'function') {  call_favs(textos[idioma].favoritos);  } 
    
      btnFavEl.innerHTML = `${svgs.voltar} ${textos[idioma].voltar}`;
      menuAbasEl.style.display = 'none';
      buscaWrapperEl.style.display = 'none';
      btnLimparEl.style.display = totalFavoritosExistentes > 0 ? 'inline-flex' : 'none';
      btnLimparEl.innerHTML = `${svgs.lixeira} ${textos[idioma].limparFav}`;
      btnExportEl.style.display = totalFavoritosExistentes > 0 ? 'inline-flex' : 'none';
      btnExportEl.innerHTML = `${svgs.downloadBox} ${textos[idioma].expBackup}`;
      btnImportEl.style.display = 'inline-flex';
      btnImportEl.innerHTML = `${svgs.uploadBox} ${textos[idioma].impBackup}`;
    } else {
        if (typeof call_favs === 'function') {  call_favs(" ");  } 

      btnFavEl.innerHTML = `${svgs.estrelaMenu} ${textos[idioma].favoritos}`;
      menuAbasEl.style.display = 'flex';
      buscaWrapperEl.style.display = 'flex';
      btnLimparEl.style.display = 'none';
      btnExportEl.style.display = 'none';
      btnImportEl.style.display = 'none';
    }

    // Criação dos Cards de Listagem
    if (totalItensNaPaginaAtual === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">${textos[idioma].semDoc}</div>`;
      paginacaoEl.innerHTML = '';
      return;
    }

    gridEl.innerHTML = docsPaginados.map((doc, idx) => {
      const favAtivo = eFavorito(doc) ? 'active' : '';
      const btnVerDisponivel = (doc.urlVer && doc.urlVer.trim() !== '') ? '' : 'disabled';
      const btnBaixarDisponivel = (doc.urlBaixar && doc.urlBaixar.trim() !== '') ? '' : 'disabled';

      const visualizacaoMedia = doc.imagemPreview 
        ? `<img src="${doc.imagemPreview}" class="doc-preview" alt="Preview">`
        : `<div class="doc-icon-frame">${doc.iconeSvg || svgs.arquivo}</div>`;

      return `
        <div class="doc-card">
          <div class="doc-fav-wrapper" data-index="${inicio + idx}">
            ${svgs.favorito.replace('class="doc-fav-icon"', `class="doc-fav-icon ${favAtivo}"`)}
          </div>
          ${visualizacaoMedia}
          <h3 class="doc-title">${doc.titulo || 'Documento'}</h3>
          <span class="doc-category">${doc.categoria || ''}</span>
          <div class="doc-actions">
            <button class="doc-btn" ${btnVerDisponivel} onclick="window.open('${doc.urlVer}', '_blank')">${svgs.olho} ${textos[idioma].ver}</button>
            <button class="doc-btn doc-btn-primary" ${btnBaixarDisponivel} onclick="window.open('${doc.urlBaixar}', '_blank')">${svgs.download} ${textos[idioma].baixar}</button>
          </div>
        </div>
      `;
    }).join('');

    // Criação da Barra de Paginação com Contadores de Registros
    const t = textos[idioma];
    paginacaoEl.innerHTML = `
      <button class="doc-btn" id="doc-prev" ${estado.paginaAtual === 1 ? 'disabled' : ''}>${svgs.setaEsquerda}</button>
      <span class="doc-counter-text">
        ${t.mostrando} <strong>${totalItensNaPaginaAtual}</strong> ${t.de} <strong>${totalItens}</strong> ${t.itens} 
        (Pg. ${estado.paginaAtual}/${totalPaginas})
      </span>
      <button class="doc-btn" id="doc-next" ${estado.paginaAtual === totalPaginas ? 'disabled' : ''}>${svgs.setaDireita}</button>
    `;

    // Eventos de Escuta Locais e Dinâmicos
    container.querySelector('#doc-prev').addEventListener('click', () => { estado.paginaAtual--; renderizar(); });
    container.querySelector('#doc-next').addEventListener('click', () => { estado.paginaAtual++; renderizar(); });
    
    container.querySelectorAll('.doc-fav-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const indexOriginal = wrapper.getAttribute('data-index');
        const documentoSelecionado = docsFiltrados[indexOriginal];
        alternarFavorito(documentoSelecionado);
      });
    });
  }

  // Ouvintes de Eventos Superiores (Inputs e Menus)
  buscaEl.addEventListener('input', (e) => {
    estado.termoBusca = e.target.value;
    estado.paginaAtual = 1;
    renderizar();
  });

  container.querySelectorAll('.doc-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('.doc-tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      estado.categoriaAtual = e.target.getAttribute('data-cat');
      estado.paginaAtual = 1;
      renderizar();
    });
  });

  // Gatilhos de Ações do Usuário
  btnTemaEl.addEventListener('click', alternarTema);
  btnFavEl.addEventListener('click', () => {
    estado.exibindoFavoritos = !estado.exibindoFavoritos;
    estado.paginaAtual = 1;
    renderizar();
  });
  btnLimparEl.addEventListener('click', () => {
    localStorage.removeItem('doc_favoritos_globais');
    renderizar();
  });
  btnExportEl.addEventListener('click', exportarFavoritosBackup);
  btnImportEl.addEventListener('click', () => fileInputEl.click());
  fileInputEl.addEventListener('change', importarFavoritosBackup);

  // Renderização de Entrada da Aplicação
  renderizar();
}
