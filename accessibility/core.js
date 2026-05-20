function check_stringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }


function imprimirPorId(idElemento) {
    const elemento = document.getElementById(idElemento);
    
    if (!elemento) {        return;    }

    const janela = window.open('', '_blank', 'width=900,height=700');

    const urlSite = window.location.href;
    const dataHora = new Date().toLocaleString('pt-BR');

    let estilosCss = '';
    const folhasEstilo = document.styleSheets;
    
    for (let i = 0; i < folhasEstilo.length; i++) {
        try {
            const regras = folhasEstilo[i].cssRules || folhasEstilo[i].rules;
            for (let j = 0; j < regras.length; j++) {
                if (regras[j].selectorText && regras[j].selectorText.includes(`#${idElemento}`)) {
                    estilosCss += regras[j].cssText;
                }
            }
        } catch (e) {
        }
    }

    janela.document.write('<html><head><title></title>');
    janela.document.write(`<style>
	* {        -webkit-print-color-adjust: exact !important;        print-color-adjust: exact !important;        color-adjust: exact !important;    }
	${estilosCss}
         body { font-family: sans-serif; margin: 0; padding: 20px; }
        #header-print { border-bottom: 1px solid #ccc; margin-bottom: 20px; font-size: 12px; color: #666; }
        #footer-print { border-top: 1px solid #ccc; margin-top: 20px; font-size: 12px; color: #666; text-align: right; }
      </style>`);
    janela.document.write('</head><body>');
    janela.document.write(`<div id="header-print">Documento extraído de: ${urlSite}</div><br/>`);
    janela.document.write(elemento.outerHTML); 
    janela.document.write(`<br/><div id="footer-print">Impresso em: ${dataHora}</div>`);
    janela.document.write('</body></html>');

    janela.document.close();
      
        janela.print();        janela.close();
}


function NavegacaoTeclado(e){
const seletores_pp = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
	const itens = Array.from(document.querySelectorAll(seletores_pp)).filter(el => el.offsetWidth > 0 && el.offsetHeight > 0); 
            if (itens.length === 0) return;
           
            const indexAtual = itens.indexOf(document.activeElement);
	
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                  e.preventDefault();   
			   const proximo = (indexAtual + 1) % itens.length;
                itens[proximo].focus();   
            } 
            else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                 e.preventDefault();     
				const anterior = (indexAtual - 1 + itens.length) % itens.length;
                itens[anterior].focus();   
            }
            else if (e.key === 'Enter' && indexAtual !== -1) {
                if (document.activeElement.tagName !== 'BUTTON' && document.activeElement.tagName !== 'A') {
                    document.activeElement.click();   
                }
            }
}

function iniciarNavegacaoTeclado(ativar = false) {
if (ativar===true){        document.addEventListener('keydown', NavegacaoTeclado);     }	else {
	document.removeEventListener('keydown', NavegacaoTeclado);     }
}


const toggleLegendas = function (status=false) {
    const idUnico = 'container-legendas-dinamico';
    let container = document.getElementById(idUnico);

    if (status === false || container) {
        if (container) container.remove();
        document.removeEventListener('mouseover', window._capturarTextoLegenda);
        return;
    }

    container = document.createElement('div');
    container.id = idUnico;
    
    Object.assign(container.style, {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '95%',
        minHeight: '70px',
        backgroundColor: 'rgba(15, 15, 15, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        padding: '15px 20px',
        color: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        opacity: '0',
        transition: 'opacity 0.4s, transform 0.4s',
        pointerEvents: 'none', overflow: "auto"
    });

    const textoElemento = document.createElement('p');
    textoElemento.innerText = "Passe o mouse sobre o conteúdo...";
    Object.assign(textoElemento.style, {
        margin: '0',
        flex: '1',
        fontSize: '16px',
        lineHeight: '1.5',
        fontWeight: '400',
        overflow: 'hidden',
        display: '-webkit-box',
        webkitLineClamp: '2',
        webkitBoxOrient: 'vertical'
    });

    const btnFechar = document.createElement('button');
    btnFechar.style.pointerEvents = 'auto'; 
    btnFechar.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>`;
    
    Object.assign(btnFechar.style, {
        background: 'rgba(255,255,255,0.1)',
        border: 'none',
        borderRadius: '50%',
        color: '#fff',
        cursor: 'pointer',
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '15px',
        transition: 'background 0.2s'
    });
    btnFechar.onclick = () => toggleLegendas(false);
    btnFechar.onmouseover = () => btnFechar.style.backgroundColor = 'rgba(255,50,50,0.5)';
    btnFechar.onmouseout = () => btnFechar.style.backgroundColor = 'rgba(255,255,255,0.1)';

    window._capturarTextoLegenda = (e) => {
        const el = e.target;
        if (container.contains(el) || el.innerText === undefined) return;

        const textoLimpo = el.innerText.trim();
        if (textoLimpo.length > 5 && textoLimpo.length < 800) {
            textoElemento.innerText = textoLimpo;
            container.style.opacity = '1';
            container.style.transform = 'translateX(-50%) translateY(0)';
        }
    };

    document.addEventListener('mouseover', window._capturarTextoLegenda);

    container.appendChild(textoElemento);
    container.appendChild(btnFechar);
    document.body.appendChild(container);

    setTimeout(() => {
        container.style.transform = 'translateX(-50%) translateY(-10px)';
    }, 50);
};



const controlarZoomSite = function (ativar = false) {
    const body_pg = document.body;
    const nivelZoom = ativar ? '1.2' : '1';
    
    body_pg.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.4s ease';
    body_pg.style.transformOrigin = 'top left';
    body_pg.style.transform = `scale(${nivelZoom})`;
    body_pg.style.width = ativar ? '83.33%' : '100%'; 
    //body_pg.parentElement.style.backgroundColor = window.getComputedStyle(body_pg).backgroundColor;
    body_pg.parentElement.style.overflowX = 'hidden';

};



const VirtualKeyboard = (function () {

 // --- INJEÇÃO DO CSS SEPARADO ---
  const KEYBOARD_CSS = `/* ==========================================
   VARIÁVEIS DE TEMA E DIMENSÕES TIPO FLUIDO
   ========================================== */
#vk-wrapper {
  /* Paleta Tema Escuro */
  --vk-bg-dark: #121214;
  --vk-key-dark: #1a1a1e;
  --vk-key-hover-dark: #26262b;
  --vk-border-dark: #2d2d34;
  --vk-text-dark: #e1e1e6;
  --vk-accent-dark: #00875f;

  /* Paleta Tema Claro */
  --vk-bg-light: #f8fafc;
  --vk-key-light: #ffffff;
  --vk-key-hover-light: #f1f5f9;
  --vk-border-light: #cbd5e1;
  --vk-text-light: #0f172a;
  --vk-accent-light: #0284c7;

  /* Fontes e Tamanhos Base */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-sizing: border-box;
}

/* ==========================================
   CONTAINER PRINCIPAL E REGRAS DE POSIÇÃO
   ========================================== */
#vk-main {
  position: fixed;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.25);
  user-select: none;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
  
  /* Valores Fluidos Ajustáveis conforme resolução */
  gap: clamp(4px, 1vh, 8px);
  padding: clamp(8px, 1.5vh, 16px);
  
  /* Transições suaves de recolhimento */
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s;
}

/* Modos de Posicionamento */
#vk-main.pos-bottom {
  bottom: 0;
  left: 0;
  width: 100vw;
  transform: translateY(100%);  display:none;
}
#vk-main.pos-bottom.open { transform: translateY(0); display:flex; }

#vk-main.pos-left {
  bottom: 20px;
  left: 20px;
  width: min(540px, 95vw);
  border-radius: 16px;  display: none;
  transform: translateY(140%) scale(0.95);
}
#vk-main.pos-left.open { transform: translateY(0) scale(1);  display:flex;  }

#vk-main.pos-right {
  bottom: 20px;
  right: 20px;
  width: min(540px, 95vw);
  border-radius: 16px;  display:none; 
  transform: translateY(140%) scale(0.95);
}
#vk-main.pos-right.open { transform: translateY(0) scale(1);  display:flex;  }

/* ==========================================
   BARRA SUPERIOR (TOOLBAR RESPONSIVA)
   ========================================== */
.vk-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding-bottom: clamp(6px, 1vh, 10px);
  box-sizing: border-box;
  gap: 8px;
}

.vk-tool-group, .vk-config-group {
  display: flex;
  gap: 6px;
  align-items: center;
}

.vk-tool-group { flex: 1; min-width: 0; }

.vk-tool-btn, .vk-config-btn {
  height: clamp(34px, 4vh, 40px);
  border-radius: 8px;
  font-size: clamp(11px, 1.2vw, 13px);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.15s ease;
  min-width: 0;
  box-sizing: border-box;
}

.vk-tool-btn { flex: 1; }
.vk-config-btn { padding: 0 12px; }

.vk-tool-btn span, .vk-config-btn span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vk-tool-btn:active, .vk-config-btn:active, .vk-key:active {
  transform: scale(0.95);
}

/* ==========================================
   MALLA GRÁFICA / FILEIRAS DO TECLADO
   ========================================== */
.vk-row {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  gap: clamp(4px, 0.6vw, 6px);
  box-sizing: border-box;
}

.vk-key {
  flex: 1;
  height: clamp(38px, 5.5vh, 52px);
  border-radius: 8px;
  font-size: clamp(14px, 1.5vw, 17px);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.1s ease;
  -webkit-tap-highlight-color: transparent;
}

/* Ajustes de proporção flexível estável */
.vk-wide { flex: 1.7; }
.vk-space { flex: 5.5; }

/* Botão de Controle Flutuante */
.vk-btn-trigger {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, background-color 0.2s;
}
.vk-btn-trigger:hover { transform: scale(1.05); }
.vk-btn-floating { position: fixed; bottom: 20px; right: 20px; z-index: 999999; }

/* ==========================================
   REGRAS VISUAIS DE TEMA (BORDAS BEM MARCADAS)
   ========================================== */
.vk-dark { background-color: var(--vk-bg-dark); color: var(--vk-text-dark); }
.vk-dark .vk-key, .vk-dark .vk-tool-btn, .vk-dark .vk-config-btn { 
  background-color: var(--vk-key-dark); 
  color: var(--vk-text-dark);
  border: 1px solid var(--vk-border-dark); 
}
.vk-dark .vk-key:hover, .vk-dark .vk-tool-btn:hover, .vk-dark .vk-config-btn:hover { background-color: var(--vk-key-hover-dark); }
.vk-dark .vk-active { background-color: var(--vk-accent-dark) !important; border-color: var(--vk-accent-dark) !important; color: #fff !important; }
.vk-dark.vk-btn-trigger { background-color: var(--vk-accent-dark); color: #fff; border: 1px solid var(--vk-border-dark); }
.vk-dark .vk-toolbar { border-bottom: 2px solid var(--vk-border-dark); }

.vk-light { background-color: var(--vk-bg-light); color: var(--vk-text-light); }
.vk-light .vk-key, .vk-light .vk-tool-btn, .vk-light .vk-config-btn { 
  background-color: var(--vk-key-light); 
  color: var(--vk-text-light);
  border: 1px solid var(--vk-border-light);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.vk-light .vk-key:hover, .vk-light .vk-tool-btn:hover, .vk-light .vk-config-btn:hover { background-color: var(--vk-key-hover-light); }
.vk-light .vk-active { background-color: var(--vk-accent-light) !important; border-color: var(--vk-accent-light) !important; color: #fff !important; }
.vk-light.vk-btn-trigger { background-color: var(--vk-accent-light); color: #fff; border: 1px solid var(--vk-border-light); }
.vk-light .vk-toolbar { border-bottom: 2px solid var(--vk-border-light); }

.vk-toolbar svg {  margin:0;  }

/* ==========================================
   MEDIA QUERIES - MÁXIMA COMPATIBILIDADE MOBILE
   ========================================== */

/* 1. Celulares, Telas Verticais e Dispositivos Compactos (Smartphones) */
@media (max-width: 768px) {
  /* Anula posições flutuantes para não quebrar ou cortar na lateral */
  #vk-main.pos-left, #vk-main.pos-right, #vk-main.pos-bottom {
    width: 100vw !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    border-radius: 0 !important;
  }
  
  #vk-main {
    padding: 8px 4px;
    gap: 4px;
  }

  .vk-toolbar {
    padding-bottom: 6px;
    gap: 4px;
  }

  /* Remove textos da barra e maximiza ícones evitando que fiquem imprensados */
  .vk-tool-btn span, .vk-config-btn span { 
    display: none !important; 
  }
  
  .vk-tool-btn, .vk-config-btn { 
    height: 38px; 
    padding: 0;
    width: 38px;
    flex: 1;
  }
  
  .vk-config-group {
    flex: 0 0 auto;
  }

  /* Redimensionamento das teclas mantendo o conteúdo da tela visível */
  .vk-row { gap: 3px; }
  .vk-key { 
    height: 42px;
    font-size: 14px; 
    border-radius: 5px;
  }
  .vk-wide { flex: 1.4; }
}

/* 2. Celulares Muito Pequenos (Ex: iPhone SE antigo / Telas < 360px) */
@media (max-width: 360px) {
  .vk-key { 
    height: 38px;
    font-size: 13px; 
  }
}

/* 3. Smartphones deitados de lado (Modo Paisagem / Landscape) */
@media (max-height: 480px) and (orientation: landscape) {
  #vk-main { 
    padding: 4px; 
    gap: 3px; 
  }
  /* Oculta ferramentas temporariamente para poupar espaço vertical e não cobrir o site */
  .vk-toolbar { 
    display: none !important; 
  }
  .vk-row { gap: 2px; }
  .vk-key { 
    height: clamp(28px, 8vh, 34px); 
    font-size: 13px; 
    border-radius: 4px;
  }
}`;


  // Configuração dos layouts de teclado por idioma
  const layouts = {
    pt: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç", "Enter"],
      ["z", "x", "c", "v", "b", "n", "m", ",", ".", "Space"]
    ],
    en: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter"],
      ["z", "x", "c", "v", "b", "n", "m", ",", ".", "Space"]
    ]
  };

  // Dicionário de traduções da interface
  const translations = {
    pt: { select: "Tudo", del: "Excluir", clear: "Limpar", copy: "Copiar", paste: "Colar", settings: "Opções", labelTheme: "Tema do Teclado", labelPos: "Posição na Tela", dark: "Escuro", light: "Claro", posBottom: ["Fixo","Abaixo"], posLeft: ["Flutuante","Esquerda"], posRight: ["Flutuante","Direita"] },
    en: { select: "All", del: "Delete", clear: "Clear", copy: "Copy", paste: "Paste", settings: "Settings", labelTheme: "Keyboard Theme", labelPos: "Screen Position", dark: "Dark", light: "Light", posBottom: ["Fixed","Bottom"], posLeft: ["Floating","Left"], posRight: ["Floating","Right"] }
  };
  
  // Ícones atualizados (Geométricos, modernos e cleans)
  const svgs = {
    backspace: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>`,
    enter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>`,
    caps: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 10l7-7 7 7M5 17h14"></path></svg>`,
    keyboard: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"></path></svg>`,
    selectAll: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 9h6v6H9z"></path></svg>`,
    delete: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    clear: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    copy: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    paste: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1"></rect></svg>`,
    close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    theme: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`,
    position: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M9 21V9"></path></svg>`
  };

  let isCaps = false;
  let isOpen = false;
  let activeInput = null;

  let isDarkTheme = localStorage.getItem("vk-theme") !== "light"; 
  let vkPosition = localStorage.getItem("vk-position") || "bottom"; // bottom, left, right

  let keyboardElement = null;
  let toggleButton = null;
  let toolbarElement = null;
  
   let currentLang = "pt"; 

  function injectStyles() {
    if (document.getElementById("vk-styles")) return;
    const style = document.createElement("style");
    style.id = "vk-styles";
    style.textContent = KEYBOARD_CSS;
    document.head.appendChild(style);
  }
  
 function applyConfigClasses() {
    const themeClass = isDarkTheme ? "vk-dark" : "vk-light";
    const posClass = `pos-${vkPosition}`;
    keyboardElement.className = `${themeClass} ${posClass}` + (isOpen ? " open" : "");
    if (toggleButton) {
      toggleButton.className = "vk-btn-trigger " + themeClass + (toggleButton.classList.contains("vk-btn-floating") ? " vk-btn-floating" : "");
    }
  }

  function renderToolbar() {
    toolbarElement.innerHTML = "";

    const lang = translations[currentLang];

    // Grupo de Ferramentas de Texto
    const toolGroup = document.createElement("div");
    toolGroup.className = "vk-tool-group";
    
    const tools = [
      { id: "select", label: lang.select, svg: svgs.selectAll, action: doSelectAll },
      { id: "del", label: lang.del, svg: svgs.delete, action: doDeleteSelection },
      { id: "clear", label: lang.clear, svg: svgs.clear, action: doClearAll },
      { id: "copy", label: lang.copy, svg: svgs.copy, action: doCopy },
      { id: "paste", label: lang.paste, svg: svgs.paste, action: doPaste }
    ];

    tools.forEach(tool => {
      const btn = document.createElement("button");
      btn.className = "vk-tool-btn";
      btn.innerHTML = `${tool.svg} <span>${tool.label}</span>`;
      btn.addEventListener("mousedown", (e) => e.preventDefault());
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (activeInput) { tool.action(); activeInput.focus(); }
      });
      toolGroup.appendChild(btn);
    });
    toolbarElement.appendChild(toolGroup);

    // Grupo Interativo de Configurações Dinâmicas (Substitutos dos Dropdowns)
    const configGroup = document.createElement("div");
    configGroup.className = "vk-config-group";

    // 1. Botão Dinâmico de Tema
    const themeBtn = document.createElement("button");
    themeBtn.className = "vk-config-btn";
    themeBtn.innerHTML = `${svgs.theme} <span>${isDarkTheme ? lang.dark : lang.light}</span>`;
    themeBtn.addEventListener("mousedown", (e) => e.preventDefault());
    themeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      isDarkTheme = !isDarkTheme;
      localStorage.setItem("vk-theme", isDarkTheme ? "dark" : "light");
      applyConfigClasses();
      renderToolbar();
    });
    configGroup.appendChild(themeBtn);

    // 2. Botão Rotativo de Posição
    const posBtn = document.createElement("button");
    posBtn.className = "vk-config-btn";
    let posLabel = lang.posBottom[1];
    if (vkPosition === "left") posLabel = lang.posLeft[1];
    if (vkPosition === "right") posLabel = lang.posRight[1];
    posBtn.innerHTML = `${svgs.position} <span>${posLabel}</span>`;
    posBtn.addEventListener("mousedown", (e) => e.preventDefault());
    posBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Ciclo rotativo de posições: bottom -> left -> right -> bottom
      if (vkPosition === "bottom") vkPosition = "left";
      else if (vkPosition === "left") vkPosition = "right";
      else vkPosition = "bottom";

      localStorage.setItem("vk-position", vkPosition);
      applyConfigClasses();
      renderToolbar();
    });
    configGroup.appendChild(posBtn);
    toolbarElement.appendChild(configGroup);

    // Botão de fechar nativo incorporado à barra
    const closeBtn = document.createElement("button");
    closeBtn.className = "vk-config-btn";
    closeBtn.style.padding = "0 10px";
    closeBtn.innerHTML = svgs.close;
    closeBtn.addEventListener("click", (e) => { e.preventDefault(); toggleKeyboard(); });
    toolbarElement.appendChild(closeBtn);
  }

  function doSelectAll() { activeInput.select(); }
  function doClearAll() { activeInput.value = ""; triggerInputEvent(); }

  function doDeleteSelection() {
    const start = activeInput.selectionStart, end = activeInput.selectionEnd, val = activeInput.value;
    activeInput.value = (start === end) ? val.substring(0, start) + val.substring(start + 1) : val.substring(0, start) + val.substring(end);
    activeInput.setSelectionRange(start, start);
    triggerInputEvent();
  }

  function doCopy() {
    const start = activeInput.selectionStart, end = activeInput.selectionEnd;
    const txt = start !== end ? activeInput.value.substring(start, end) : activeInput.value;
    navigator.clipboard.writeText(txt).catch(() => {});
  }

  function doPaste() {
    navigator.clipboard.readText().then(text => {
      const start = activeInput.selectionStart, end = activeInput.selectionEnd, val = activeInput.value;
      activeInput.value = val.substring(0, start) + text + val.substring(end);
      activeInput.setSelectionRange(start + text.length, start + text.length);
      triggerInputEvent();
    }).catch(() => {});
  }

  function triggerInputEvent() { activeInput.dispatchEvent(new Event("input", { bubbles: true })); }

  function renderKeys() {
    const rows = keyboardElement.querySelectorAll(".vk-row");
    rows.forEach(r => r.remove());

    layouts[currentLang].forEach((row) => {
      const rowDiv = document.createElement("div");
      rowDiv.className = "vk-row";

      row.forEach((key) => {
        const button = document.createElement("button");
        button.className = "vk-key";

        if (key === "Backspace") button.innerHTML = svgs.backspace;
        else if (key === "Enter") button.innerHTML = svgs.enter;
        else if (key === "Caps") button.innerHTML = svgs.caps;
        else if (key === "Space") button.textContent = "";
        else button.textContent = isCaps ? key.toUpperCase() : key.toLowerCase();

        if (["Backspace", "Enter", "Caps"].includes(key)) button.classList.add("vk-wide");
        if (key === "Space") button.classList.add("vk-space");
        if (key === "Caps" && isCaps) button.classList.add("vk-active");

        button.addEventListener("mousedown", (e) => e.preventDefault());
        button.addEventListener("click", (e) => {
          e.preventDefault();
          handleKeyPress(key);
        });

        rowDiv.appendChild(button);
      });
      keyboardElement.appendChild(rowDiv);
    });
  }

  function handleKeyPress(key) {
    if (key === "Caps") { isCaps = !isCaps; renderKeys(); return; }
    if (!activeInput) return;

    const start = activeInput.selectionStart, end = activeInput.selectionEnd, val = activeInput.value;

    if (key === "Backspace") {
      if (start === end && start > 0) {
        activeInput.value = val.substring(0, start - 1) + val.substring(end);
        activeInput.setSelectionRange(start - 1, start - 1);
      } else {
        activeInput.value = val.substring(0, start) + val.substring(end);
        activeInput.setSelectionRange(start, start);
      }
    } else if (key === "Enter") {
      activeInput.value = val.substring(0, start) + "\n" + val.substring(end);
      activeInput.setSelectionRange(start + 1, start + 1);
    } else if (key === "Space") {
      activeInput.value = val.substring(0, start) + " " + val.substring(end);
      activeInput.setSelectionRange(start + 1, start + 1);
    } else {
      const char = isCaps ? key.toUpperCase() : key.toLowerCase();
      activeInput.value = val.substring(0, start) + char + val.substring(end);
      activeInput.setSelectionRange(start + 1, start + 1);
    }
    triggerInputEvent();
    activeInput.focus();
  }

  function toggleKeyboard() {
    isOpen = !isOpen;
    keyboardElement.classList.toggle("open", isOpen);
    if (isOpen && activeInput) activeInput.focus();
  }

  document.addEventListener("focusin", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      activeInput = e.target;
    }
  });

  function init(lang, buttonContainerId = null) {
      injectStyles();

    currentLang = lang || "pt"; 
    
    const wrapper = document.createElement("div");
    wrapper.id = "vk-wrapper";

    //toggleButton = document.createElement("button");
    //toggleButton.innerHTML = svgs.keyboard;
    //toggleButton.addEventListener("click", toggleKeyboard);

    //if (buttonContainerId && document.getElementById(buttonContainerId)) {
      //document.getElementById(buttonContainerId).appendChild(toggleButton);
    //} else {
      //toggleButton.classList.add("vk-btn-floating");
      //wrapper.appendChild(toggleButton);
    //}

    keyboardElement = document.createElement("div");
    keyboardElement.id = "vk-main";

    toolbarElement = document.createElement("div");
    toolbarElement.className = "vk-toolbar";
    keyboardElement.appendChild(toolbarElement);

    wrapper.appendChild(keyboardElement);
    document.body.appendChild(wrapper);

    applyConfigClasses();
    renderToolbar();
    renderKeys(); 
    
  return { show:toggleKeyboard };  }

  return { init };
})();



const FToast = {
  constructor: function (pos = 'tc', maxStack = 1) {
    this.maxStack = maxStack;
    this.container = document.querySelector(`.toast-container[data-position="${pos}"]`);
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      this.container.dataset.position = pos;
    }
 return this.container;  },

  show: function (type, title, msg, duration = 3000) {
    const activeToasts = this.container.querySelectorAll('.toast');
    if (activeToasts.length >= this.maxStack) {
        activeToasts[0].remove();
    }

    const t = document.createElement('div');
    t.className = `toast style-accent toast-${type}`;
    t.innerHTML = `
      <div class="toast-icon">${this.getIcon(type)}</div>
      <div class="toast-content"><b>${title}</b><div>${msg}</div></div>
      <button class="toast-close"><svg viewBox="0 0 24 24" width="35" height="35" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      <div class="toast-progress"></div>`;
	  
    const animMode = 'zoom';
    const baseEntry = 'slideInDown';
    
    if (animMode === 'zoom') {
        t.style.animation = 'zoomIn 0.4s forwards';
    } else if (animMode === 'shake') {
        t.style.animation = `${baseEntry} 0.4s forwards, shake 0.4s 0.4s`;
    } else {
        t.style.animation = `${baseEntry} 0.4s forwards`;
    }	  
    
    this.container.appendChild(t);

    const currentPos = this.container.dataset.position;
    let animOut = currentPos.includes('r') ? 'slideOutRight' : 'slideOutLeft';
    if(currentPos === 'tc') animOut = 'slideOutUp';
    if(currentPos === 'bc') animOut = 'slideOutDown';

    const bar = t.querySelector('.toast-progress');
    if(bar) {
        bar.style.transform = 'scaleX(1)';
        setTimeout(() => {
          bar.style.transition = `transform ${duration}ms linear`;
          bar.style.transform = 'scaleX(0)';
        }, 50);
    }

    const dismiss = () => {
        t.style.animation = `${animOut} 0.3s forwards`;
        t.addEventListener('animationend', () => t.remove());
    };

    t.querySelector('.toast-close').onclick = function(){   dismiss();  t.remove();  };
    setTimeout(dismiss, duration);
  },

  getIcon: function (type) {
    const icons = {"success":"<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 6 9 17l-5-5\"/></svg>","error":"<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9-6 6\"/><path d=\"m9 9 6 6\"/></svg>","warning":"<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg>","info":"<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4\"/><path d=\"M12 8h.01\"/></svg>"};
    return icons[type];
  }
};


const AgeGate = {
    i18n: {
        pt: {
            title: "Conteúdo Restrito",
            msg: "Este site contém material destinado exclusivamente a adultos.",
            terms: `
                <h3>Termos de Uso</h3>
                <p>Ao clicar em confirmar, você declara estar ciente de:</p>
                <ul>
                    <li>Possuir 18 anos ou mais de idade.</li>
                    <li>O conteúdo é de natureza adulta e explícita.</li>
                    <li>A responsabilidade de acesso em locais públicos ou perto de menores é sua.</li>
                </ul>`,
            confirm: "Sou maior de idade",
            exit: "Sair",
        },
        en: {
            title: "Restricted Content",
            msg: "This website contains material intended for adults only.",
            terms: `
                <h3>Terms of Use</h3>
                <p>By clicking confirm, you declare that:</p>
                <ul>
                    <li>You are 18 years of age or older.</li>
                    <li>The content is of an adult and explicit nature.</li>
                    <li>Access responsibility near minors is entirely yours.</li>
                </ul>`,
            confirm: "I am 18 or older",
            exit: "Exit",
        }
    },

    init: function(lang = 'pt', onAccept, onDeny) {
        if (localStorage.getItem('isAdultUser') === 'true') {
            if(onAccept) onAccept();
            return;
        }

        const text = this.i18n[lang] || this.i18n['pt'];
        this.injectStyles();
        this.renderModal(text, onAccept, onDeny);
    },

    injectStyles: function() {
        if (document.getElementById('age-gate-styles')) return;
        const style = document.createElement('style');
        style.id = 'age-gate-styles';
        style.textContent = `
            #age-gate-wrapper {
                position: fixed; top: 0; left: 0; bottom:0; right:0;  width: 100%; height: 100%;
                background: rgba(0,0,0,0.85); backdrop-filter: blur(20px);
                z-index: 999999; display: flex; align-items: center; justify-content: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            }
            .age-gate-card {
                background: #121212; color: white; padding: 30px; border-radius: 20px;
                width: 90%; height: 80%;  text-align: center; border: 1px solid #333;  overflow: auto;
                box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            }
            .age-gate-card h2 { color: #e74c3c; margin-top: 0; }
            .age-gate-terms {
                text-align: left; background: #1e1e1e; padding: 15px;
                border-radius: 10px; font-size: 0.85rem; color: #bbb;
                margin: 20px 0; overflow: auto; border: 1px solid #222;
            }
            .age-gate-btns { display: flex; flex-direction: column; gap: 10px; }
            .btn-age-accept {
                background: #e74c3c; color: white; border: none; padding: 15px;
                border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.2s;
            }
            .btn-age-accept:hover { background: #c0392b; transform: translateY(-2px); }
            .btn-age-deny {
                 background: transparent; color: #777; border: none; cursor: pointer; text-decoration: underline;
            }
            body.age-gate-active { overflow: hidden; }
        `;
        document.head.appendChild(style);
    },

    renderModal: function(text, onAccept, onDeny) {
        document.body.classList.add('age-gate-active');
        const overlay = document.createElement('div');
        overlay.id = 'age-gate-wrapper';

        overlay.innerHTML = `
            <div class="age-gate-card">  <br/><br/>
                <h2>${text.title}</h2>
                <p>${text.msg}</p>
                <div class="age-gate-terms">${text.terms}</div>
                <div class="age-gate-btns">
                   <button class="btn-age-accept" id="age-accept">${text.confirm}</button>
                    <button class="btn-age-deny" id="age-deny">${text.exit}</button>
                </div>
            <br/><br/>  </div>
        `;

        document.body.appendChild(overlay);

       
        document.getElementById('age-accept').onclick = () => {
            localStorage.setItem('isAdultUser', 'true');
            overlay.remove();
            document.body.classList.remove('age-gate-active');
            if (onAccept) onAccept();
        };

        document.getElementById('age-deny').onclick = () => {
            if (onDeny) onDeny();
            else window.location.href = "";
        };
    }
};


const SmartChatAI = (obj=document.body, isOpen = false, lang = 'pt') => {
    
    const i18n = {
        pt: {
            welcome: "Olá! Como posso ajudar você hoje?",
            placeholder: "Pergunte algo sobre esta página...",
            emptyMsg: "O chat está vazio. <br/><br/> Inicie uma conversa profissional agora mesmo.",
            backupBtn: "Backup",
            clearBtn: "Limpar Chat",
			print: "Gerar Impressão",
            aiThinking: "Analisando conteúdo...",
            noContext: "Desculpe, não encontrei essa informação no texto desta página."
        },
        en: {
            welcome: "Hello! How can I help you today?",
            placeholder: "Ask something about this page...",
            emptyMsg: "The chat is empty. <br/><br/> Start a professional conversation now.",
            backupBtn: "Backup",
            clearBtn: "Clear Chat",
			print: "Generate Print",
            aiThinking: "Analyzing content...",
            noContext: "Sorry, I couldn't find that information in the text of this page."
        }
    };

    const dict = i18n[lang] || i18n['pt'];

    const getPageContext = () => {
        const tags = ['details', 'p', 'button', 'a', 'h1', 'h2', 'h3', 'li', 'ul', 'span', 'div', 'article', 'section'];
        let content = "";
        tags.forEach(tag => {
            document.querySelectorAll(tag).forEach(el => {
                if (el.innerText.length > 6) content += el.innerText + " ";
            });
        });
        return content.toLowerCase();
    };

    const pageKnowledge = getPageContext();

    let chatHistory = JSON.parse(localStorage.getItem('smart_chat_data')) || [];

    const saveHistory = () => {
        localStorage.setItem('smart_chat_data', JSON.stringify(chatHistory));
    };

    const icons = {
        chat: `<svg viewBox="0 0 24 24" width="24px" height="24px" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
        close: `<svg viewBox="0 0 24 24" width="24px" height="24px" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
        send: `<svg viewBox="0 0 24 24" width="20px" height="20px" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`,
		print: `<svg fill="#fff" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7,10a1,1,0,1,0,1,1A1,1,0,0,0,7,10ZM19,6H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3H6v3a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V18h1a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM8,4h8V6H8Zm8,16H8V16h8Zm4-5a1,1,0,0,1-1,1H18V15a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1v1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"/></svg>`,
		user: `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100 100" xml:space="preserve"><g>	<g>		<path d="M80,71.2V74c0,3.3-2.7,6-6,6H26c-3.3,0-6-2.7-6-6v-2.8c0-7.3,8.5-11.7,16.5-15.2c0.3-0.1,0.5-0.2,0.8-0.4			c0.6-0.3,1.3-0.3,1.9,0.1C42.4,57.8,46.1,59,50,59c3.9,0,7.6-1.2,10.8-3.2c0.6-0.4,1.3-0.4,1.9-0.1c0.3,0.1,0.5,0.2,0.8,0.4			C71.5,59.5,80,63.9,80,71.2z"></path>	</g>	<g>		<ellipse cx="50" cy="36.5" rx="14.9" ry="16.5"></ellipse>	</g></g></svg>`,
		bot: `<svg fill="#000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"/><ellipse cx="8.5" cy="12" rx="1.5" ry="2"/><ellipse cx="15.5" cy="12" rx="1.5" ry="2"/><path d="M8 16h8v2H8z"/></svg>`,
		clear: `<svg fill="#fff" width="24px" height="24px" viewBox="0 0 1024 1024" t="1569683368540" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9723" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z" p-id="9724"></path></svg>`,
		backup: `<svg fill="#fff" width="24px" height="24px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">      <rect class="clr-i-outline clr-i-outline-path-1" x="6" y="22" width="24" height="2"></rect><path class="clr-i-outline clr-i-outline-path-2" d="M30.84,13.37A1.94,1.94,0,0,0,28.93,12H26.55a3,3,0,0,1-.14,2h2.54C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H9.58a3,3,0,0,1-.14-2H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.84,13.37Z"></path><path class="clr-i-outline clr-i-outline-path-3" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"></path>    <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect></svg>`
    };

    const mainContainer = document.createElement('div');
    const chatBtn = document.createElement('button');
    const chatBox = document.createElement('div');

	mainContainer.style.marginLeft="5px";
	mainContainer.style.marginRight="5px";

    Object.assign(chatBtn.style, {
        width: '56px', height: '56px', borderRadius: '50%',
        backgroundColor: '#0056b3', border: 'none', cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: '9999'
    });
	chatBtn.className="fs-acc-btnch";
    chatBtn.innerHTML = icons.chat;

    Object.assign(chatBox.style, {
        position: 'fixed', bottom: '0', left: '0', right: '0', top: '0',
        width: '100%', height: '100%', backgroundColor: '#fff', margin: "0 auto",
        borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        display: isOpen ? 'flex' : 'none', flexDirection: 'column',
        overflow: 'hidden', zIndex: '9999', fontFamily: 'sans-serif'
    });

    chatBox.innerHTML = `
        <div style="background:#0056b3; padding:15px; color:white; display:flex; justify-content:space-between; align-items:center;">
            <strong style="font-size:1.1rem; display: flex; gap: 5px; flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: center;">${icons.chat}  Chat Support</strong>
            <div style="display:flex; gap:10px;">
                <button id="btn-bkpint" style="background:rgba(255,255,255,0.2); border:none; color:white; padding:5px 8px; border-radius:5px; cursor:pointer; font-size:11px; display: flex;flex-direction: row;flex-wrap: nowrap;align-content: center;align-items: center;justify-content: center;gap: 5px; ">${icons.print}  ${dict.print}</button>
                <button id="btn-bkp" style="background:rgba(255,255,255,0.2); border:none; color:white; padding:5px 8px; border-radius:5px; cursor:pointer; font-size:11px; display: flex;flex-direction: row;flex-wrap: nowrap;align-content: center;align-items: center;justify-content: center;gap: 5px; ">${icons.backup}  ${dict.backupBtn}</button>
                <button id="btn-cls" style="background:rgba(255,0,0,0.3); border:none; color:white; padding:5px 8px; border-radius:5px; cursor:pointer; font-size:11px; display: flex;flex-direction: row;flex-wrap: nowrap;align-content: center;align-items: center;justify-content: center;gap: 5px; ">${icons.clear}  ${dict.clearBtn}</button>
                <span id="close-chat" style="cursor:pointer; margin-left:10px;display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: center; align-items: center;">${icons.close}</span>
            </div>
        </div>
        <div id="messages-flow" style="flex:1; padding:15px; overflow-y:auto; background:#f8f9fa; display:flex; flex-direction:column; gap:12px;"></div>
        <div style="padding:15px; border-top:1px solid #eee; display:flex; gap:10px;">
            <input id="user-input" type="text" placeholder="${dict.placeholder}" style="flex:1; padding:10px; border:1px solid #ddd; border-radius:20px; outline:none;">
            <button id="send-btn" style="background:#0056b3; border:none; width:40px; height:40px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center;">${icons.send}</button>
        </div>
    `;

    obj.appendChild(mainContainer);
    mainContainer.appendChild(chatBtn);
    mainContainer.appendChild(chatBox);

    const msgFlow = chatBox.querySelector('#messages-flow');
    const inputField = chatBox.querySelector('#user-input');
    
    const renderMessage = (text, sender = 'bot') => {
        const msg = document.createElement('div');
        Object.assign(msg.style, {
            padding: '10px 15px', borderRadius: '15px', maxWidth: '85%',
            fontSize: '14px', lineHeight: '1.4', gap: "5px", display: "flex",
            alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: sender === 'user' ? '#0056b3' : '#e9ecef',
            color: sender === 'user' ? '#fff' : '#333'
        });
        if(sender==="user"){   msg.innerHTML = ""+text+"  "+icons.user;    }
        else if(sender==="bot"){   msg.innerHTML = icons.bot+"  "+text+"";    }
		else {   msg.innerHTML = ""+text+"";    }
        msgFlow.appendChild(msg);
        msgFlow.scrollTop = msgFlow.scrollHeight;
    };

    const loadHistory = () => {
        msgFlow.innerHTML = "";
        if (chatHistory.length === 0) {
            msgFlow.innerHTML = `<div style="color:#999; text-align:center; width: 90%;  position: absolute;  top: 50%;  left: 50%;  transform: translate(-50%, -50%);  margin: 0;  font-size:13px;">${dict.emptyMsg}</div>`;
        } else {
            chatHistory.forEach(m => renderMessage(m.text, m.type));
        }
    };

    const getAiResponse = (query) => {
        const q = query.toLowerCase();
        if (pageKnowledge.includes(q) && q.length > 3) {
            const sentences = pageKnowledge.split(/[.!?]/);
            const match = sentences.find(s => s.includes(q));
            return match ? match.trim() : dict.welcome;
        }
        return dict.noContext;
    };

    const handleSend = () => {
        const val = inputField.value.trim();
        if (!val) return;

        chatHistory.push({ type: 'user', text: val });
        renderMessage(val, 'user');
        inputField.value = "";

        setTimeout(() => {
            const reply = getAiResponse(val);
            chatHistory.push({ type: 'bot', text: reply });
            renderMessage(reply, 'bot');
            saveHistory();   
        }, 800);       loadHistory();
    };

    chatBtn.onclick = () => {
		chatBtn.classList.remove("show");
        chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
        if(chatBox.style.display === 'flex'){ chatBtn.classList.add("show");   loadHistory();    }
    };

    chatBox.querySelector('#close-chat').onclick = () => {  chatBtn.classList.remove("show");  chatBox.style.display = 'none';   };

    chatBox.querySelector('#btn-bkpint').onclick = () => {  if (chatHistory.length>=1) {   imprimirPorId("messages-flow");  }    };
	
    chatBox.querySelector('#send-btn').onclick = handleSend;

    inputField.onkeypress = (e) => { if (e.key === 'Enter') handleSend(); };

    chatBox.querySelector('#btn-cls').onclick = () => {
            chatHistory = [];
            saveHistory();
            loadHistory();
    };

    chatBox.querySelector('#btn-bkp').onclick = () => {
if (chatHistory.length>=1) {         
	const blob = new Blob([JSON.stringify(chatHistory, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chat-history.json';
        a.click();    }
    };

    loadHistory();
};



const fs_accessibility = (function() {
    const config = {   
        lang: 'pt',
		status: true,
		customConfig:{},
        autoClose: false, 
		menu: true, 
        position: 'right', // 'left' or 'right'
        modalPos: 'right', // 'left', 'right', 'center', 'full'
        storageKey: 'fs_acc_settings',
        customButtons: [],
        disable: [],
        open_call: function(){   },
        close_call: function(){   }
    };

    const i18n = {
        pt: {
            title: "Acessibilidade",
            reset: "Resetar Configurações",
            close: "Fechar",
            currentTela: "Ampliar Tela",
            currentTelaZ: "Reduzir Tela",
            increaseText: "Aumentar Texto",
            decreaseText: "Diminuir Texto",
            readableFont: "Fonte Legível",
            highContrast: "Alto Contraste",
            grayscale: "Escala de Cinza",
            linksHighlight: "Destacar Links",
            imagesHighlight: "Destacar Imagens",
            videosHighlight: "Destacar Vídeos",
            buttonsHighlight: "Destacar Botões",
            iconsHighlight: "Destacar Ícones",
            stopAnimations: "Parar Animações",
            bigCursor: "Cursor Grande",
            readingLine: "Linha de Leitura",
            textToLibra: "Traduzir para Libras",
            textTitle: "Sublinhar Títulos",
            textToSpeech: "Voz (Hover)",
            magnifier: "Lupa de Tela",
            line: "Altura da Linha",
			lupa: "Lupa",
			legenda: "Legendas",
            space: "Espaçamento de Texto",
			keyB: "Navegação pelo Teclado",
			arc_b: "Básico",
			arc_p: "Conteúdo da Página",
			arc_a: "Avançado",
			arc_t: "Texto",
			arc_e: "Extras",
			arc_o: "Outros",
			virtualk: "Teclado Virtual",
			applyAll: "Suas Configurações foram Aplicadas com Sucesso.",
			resetAll: "Suas Configurações foram Redefinidas com Sucesso."
        },
        en: {
            title: "Accessibility",
            reset: "Reset Settings",
            close: "Close",
            currentTela: "Enlarge Screen",
            currentTelaZ: "Reduce Screen",
            increaseText: "Increase Text",
            decreaseText: "Decrease Text",
            readableFont: "Readable Font",
            highContrast: "High Contrast",
            grayscale: "Grayscale",
            videosHighlight: "Highlight Videos",
            buttonsHighlight: "Highlight Buttons",
            iconsHighlight: "Highlight Icons",
            linksHighlight: "Highlight Links",
            imagesHighlight: "Highlight Images",
            stopAnimations: "Stop Animations",
            bigCursor: "Big Cursor",
            readingLine: "Reading Line",
            textToLibra: "Translate to Libras",
            textTitle: "Underline Headers",
            textToSpeech: "Speech (Hover)",
            magnifier: "Screen Magnifier",
            line: "Line Height",
			lupa: "Magnifier",
			legenda: "Subtitles",
            space: "Text Spacing",
			keyB: "Keyboard Navigation",
			arc_b: "Basic",
			arc_p: "Page Content",
			arc_a: "Advanced",
			arc_t: "Text",
			arc_e: "Extras",
			arc_o: "Other",
			virtualk: "Virtual Keyboard ",
			applyAll: "Your Settings have been Successfully Applied.",
			resetAll: "Your Settings have been Successfully Reset."
        }
    };

    const icons = {
        tela_1: `<svg width="24px" height="24px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g><path d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0315,30.0315,0,0,1,54,72Z"/><path d="M66,36H60V30a6,6,0,0,0-12,0v6H42a6,6,0,0,0,0,12h6v6a6,6,0,0,0,12,0V48h6a6,6,0,0,0,0-12Z"/></g></svg>`,
        tela_2: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 10L21 3M14 10H20M14 10V4M3 21L10 14M10 14V20M10 14H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        line: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" version="1.2" viewBox="0 0 47 25"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3.99999962 2.71042226V22.7104223"></path><path fill="currentColor" d="m.16814235 20.5270412 3.44487862 4.2104072c.17486379.2137224.48987514.2452235.70359754.0703597a.4999988.4999988 0 0 0 .07035976-.0703597l3.44487862-4.2104072c.17486378-.2137225.14336265-.5287338-.07035976-.7035976-.08933106-.073089-.20119771-.1130213-.31661889-.1130213H.555121c-.27614238 0-.5.2238576-.5.5 0 .1154211.0399323.2272878.11302135.3166189Zm0-161332381L3.61302097.18339592c.17486379-.21372241.48987514-.24522355.70359754-.07035976a.49999975.49999975 0 0 1 .07035976.07035976l3.44487862 4.2104072c.17486378.2137224.14336265.52873375-.07035976.70359754-.08933106.07308905-.20119771.11302135-.31661889.11302135H.555121c-.27614237 0-.5-.22385762-.5-.5 0-.11542118.0399323-.22728783.11302135-.3166189Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.4999996 1.71042226h30m-30 7h30m-30 7.00000004h30m-30 7h24"></path></g></svg>`,
        space: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 15 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.55293 0.999969C4.75295 0.999969 4.93372 1.11917 5.0125 1.30301L8.01106 8.29982C8.11984 8.55363 8.00226 8.84757 7.74844 8.95635C7.49463 9.06512 7.20069 8.94754 7.09191 8.69373L6.11613 6.41685H2.98973L2.01395 8.69373C1.90517 8.94754 1.61123 9.06512 1.35742 8.95635C1.1036 8.84757 0.986023 8.55363 1.0948 8.29982L4.09336 1.30301C4.17214 1.11917 4.35291 0.999969 4.55293 0.999969ZM4.55293 2.76929L5.75186 5.56685H3.354L4.55293 2.76929ZM11.0562 9.00214C11.2617 9.00214 11.4463 8.87633 11.5215 8.68502L14.2733 1.68299C14.3743 1.42598 14.2478 1.13575 13.9908 1.03475C13.7338 0.933747 13.4436 1.06021 13.3426 1.31722L11.0562 7.13514L8.76973 1.31722C8.66873 1.06021 8.3785 0.933747 8.1215 1.03475C7.86449 1.13575 7.73802 1.42598 7.83902 1.68299L10.5908 8.68502C10.666 8.87633 10.8506 9.00214 11.0562 9.00214ZM14.9537 12.4999C14.9537 12.606 14.9115 12.7077 14.8365 12.7828L12.8365 14.7828C12.6803 14.939 12.4271 14.939 12.2708 14.7828C12.1146 14.6265 12.1146 14.3733 12.2708 14.2171L13.588 12.8999H1.51937L2.83653 14.2171C2.99274 14.3733 2.99274 14.6265 2.83653 14.7828C2.68032 14.939 2.42705 14.939 2.27084 14.7828L0.270843 12.7828C0.195828 12.7077 0.153687 12.606 0.153687 12.4999C0.153687 12.3938 0.195828 12.2921 0.270843 12.2171L2.27084 10.2171C2.42705 10.0609 2.68032 10.0609 2.83653 10.2171C2.99274 10.3733 2.99274 10.6265 2.83653 10.7828L1.51937 12.0999L13.588 12.0999L12.2708 10.7828C12.1146 10.6265 12.1146 10.3733 12.2708 10.2171C12.4271 10.0609 12.6803 10.0609 12.8365 10.2171L14.8365 12.2171C14.9115 12.2921 14.9537 12.3938 14.9537 12.4999Z"></path></svg>`,
        main: `<svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>`,
        title: `<svg width="24px" height="24px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></svg>`,
        close: `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
        textPlus_1: `<svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path d="M 16 0 L 16 3 L 13 3 L 13 4 L 16 4 L 16 7 L 17 7 L 17 4 L 20 4 L 20 3 L 17 3 L 17 0 L 16 0 z M 5.6523438 6 L 1.03125 18.324219 L 1.96875 18.675781 L 3.3476562 15 L 9.6523438 15 L 11.03125 18.675781 L 11.96875 18.324219 L 7.3476562 6 L 5.6523438 6 z M 6.3476562 7.0019531 L 6.6523438 7.0019531 L 9.2773438 14 L 3.7226562 14 L 6.3476562 7.0019531 z " style="fill-opacity:1; stroke:none; stroke-width:0px;"/></g></svg>`,
        textPlus_2: `<svg width="24px" height="24px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path d="M 13 3 L 13 4 L 20 4 L 20 3 L 13 3 z M 5.6523438 6 L 1.03125 18.324219 L 1.96875 18.675781 L 3.3476562 15 L 9.6523438 15 L 11.03125 18.675781 L 11.96875 18.324219 L 7.3476562 6 L 5.6523438 6 z M 6.3476562 7.0019531 L 6.6523438 7.0019531 L 9.2773438 14 L 3.7226562 14 L 6.3476562 7.0019531 z " style="fill-opacity:1; stroke:none; stroke-width:0px;"/></g></svg>`,
        textPlus_3: `<svg width="24px" height="24px" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M12,1 L12,3 C12,3.55228475 11.5522847,4 11,4 C10.4477153,4 10,3.55228475 10,3 L10,2 L7,2 L7,10 L8,10 C8.55228475,10 9,10.4477153 9,11 C9,11.5522847 8.55228475,12 8,12 L4,12 C3.44771525,12 3,11.5522847 3,11 C3,10.4477153 3.44771525,10 4,10 L5,10 L5,2 L2,2 L2,3 C2,3.55228475 1.55228475,4 1,4 C0.44771525,4 0,3.55228475 0,3 L0,1 C0,0.44771525 0.44771525,0 1,0 L11,0 C11.5522847,0 12,0.44771525 12,1 Z"/></svg>`,
        contrast_1: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g>	<path d="M50,12.5c-20.712,0-37.5,16.793-37.5,37.502C12.5,70.712,29.288,87.5,50,87.5c20.712,0,37.5-16.788,37.5-37.498		C87.5,29.293,70.712,12.5,50,12.5z M50.124,22.443C65.265,22.51,77.56,34.848,77.56,50.002c0,15.155-12.295,27.488-27.436,27.555		V22.443z"/></g></svg>`,
        contrast_2: `<svg width="24px" height="24px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 25.344v-18.688h24v18.688h-24zM11.969 21.781v1.969h2v-1.969h2.031v-1.906h-2.031v-1.969h2.031v-1.906h-2.031v-1.938h2.031v-1.906h-2.031v-1.969h2.031v-1.938h-2.031v1.938h-2v-1.938h-2.031v1.938h-1.938v-1.938h-6.406v15.5h8.344v-1.969h2.031zM11.969 10.188v1.969h-2.031v-1.969h2.031zM8 14.063v-1.906h1.938v1.906h-1.938zM13.969 14.063h-2v-1.906h2v1.906zM9.938 14.063h2.031v1.938h-2.031v-1.938zM8 17.906v-1.906h1.938v1.906h-1.938zM13.969 17.906h-2v-1.906h2v1.906zM9.938 19.875v-1.969h2.031v1.969h-2.031zM8 21.781v-1.906h1.938v1.906h-1.938zM11.969 19.875h2v1.906h-2v-1.906z"></path></svg>`,
        link_1: `<svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"/><g><path d="M17.74 2.76c1.68 1.69 1.68 4.41 0 6.1l-1.53 1.52c-1.12 1.12-2.7 1.47-4.14 1.09l2.62-2.61.76-.77.76-.76c.84-.84.84-2.2 0-3.04-.84-.85-2.2-.85-3.04 0l-.77.76-3.38 3.38c-.37-1.44-.02-3.02 1.1-4.14l1.52-1.53c1.69-1.68 4.42-1.68 6.1 0zM8.59 13.43l5.34-5.34c.42-.42.42-1.1 0-1.52-.44-.43-1.13-.39-1.53 0l-5.33 5.34c-.42.42-.42 1.1 0 1.52.44.43 1.13.39 1.52 0zm-.76 2.29l4.14-4.15c.38 1.44.03 3.02-1.09 4.14l-1.52 1.53c-1.69 1.68-4.41 1.68-6.1 0-1.68-1.68-1.68-4.42 0-6.1l1.53-1.52c1.12-1.12 2.7-1.47 4.14-1.1l-4.14 4.15c-.85.84-.85 2.2 0 3.05.84.84 2.2.84 3.04 0z"/></g></svg>`,
        link_2: `<svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 416Q82 416 73 407 64 398 64 384L64 128Q64 114 73 105 82 96 96 96L416 96Q430 96 439 105 448 114 448 128L448 384Q448 398 439 407 430 416 416 416L96 416ZM184 240Q204 240 218 226 232 212 232 192 232 172 218 158 204 144 184 144 164 144 150 158 136 172 136 192 136 212 150 226 164 240 184 240ZM400 368L400 304 336 240 240 336 184 279 96 368 400 368Z" /></svg>`,
        reset: `<svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`,
        voice: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857ZM11.1429 6.57143C11.1429 6.1 11.5286 5.71429 12 5.71429C12.4714 5.71429 12.8571 6.1 12.8571 6.57143V11.7143C12.8571 12.1943 12.48 12.5714 12 12.5714C11.5286 12.5714 11.1429 12.1857 11.1429 11.7143V6.57143ZM16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z"/></svg>`,
        cursor: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path d="M8.85355339,19.8535534 C8.58780599,20.1193008 8.13485879,20.0078536 8.02276001,19.6491375 L3.02276001,3.6491375 C2.90244119,3.26411727 3.26411727,2.90244119 3.6491375,3.02276001 L19.6491375,8.02276001 C20.0078536,8.13485879 20.1193008,8.58780599 19.8535534,8.85355339 L16.2071068,12.5 L20.8535534,17.1464466 C21.0488155,17.3417088 21.0488155,17.6582912 20.8535534,17.8535534 L17.8535534,20.8535534 C17.6582912,21.0488155 17.3417088,21.0488155 17.1464466,20.8535534 L12.5,16.2071068 L8.85355339,19.8535534 Z M4.26195703,4.26195703 L8.73076159,18.5621316 L12.1464466,15.1464466 C12.3417088,14.9511845 12.6582912,14.9511845 12.8535534,15.1464466 L17.5,19.7928932 L19.7928932,17.5 L15.1464466,12.8535534 C14.9511845,12.6582912 14.9511845,12.3417088 15.1464466,12.1464466 L18.5621316,8.73076159 L4.26195703,4.26195703 Z"/></svg>`,
        icon: `<svg width="24px" height="24px" viewBox="-0.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h5.219v5.219h-5.219z"/><path d="m9.39 0h5.219v5.219h-5.219z"/><path d="m17.998 0h5.219v5.219h-5.219z"/><path d="m0 9.39h5.219v5.219h-5.219z"/><path d="m9.39 9.39h5.219v5.219h-5.219z"/><path d="m17.998 9.39h5.219v5.219h-5.219z"/><path d="m0 18.781h5.219v5.219h-5.219z"/><path d="m9.39 18.781h5.219v5.219h-5.219z"/><path d="m17.998 18.781h5.219v5.219h-5.219z"/></svg>`,
        button: `<svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">  <path fill-rule="evenodd"  clip-rule="evenodd" d="M2 5H13C13.5523 5 14 5.44772 14 6V9C14 9.55228 13.5523 10 13 10H2C1.44772 10 1 9.55228 1 9V6C1 5.44772 1.44772 5 2 5ZM0 6C0 4.89543 0.895431 4 2 4H13C14.1046 4 15 4.89543 15 6V9C15 10.1046 14.1046 11 13 11H2C0.89543 11 0 10.1046 0 9V6ZM4.5 6.75C4.08579 6.75 3.75 7.08579 3.75 7.5C3.75 7.91421 4.08579 8.25 4.5 8.25C4.91421 8.25 5.25 7.91421 5.25 7.5C5.25 7.08579 4.91421 6.75 4.5 6.75ZM6.75 7.5C6.75 7.08579 7.08579 6.75 7.5 6.75C7.91421 6.75 8.25 7.08579 8.25 7.5C8.25 7.91421 7.91421 8.25 7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5ZM10.5 6.75C10.0858 6.75 9.75 7.08579 9.75 7.5C9.75 7.91421 10.0858 8.25 10.5 8.25C10.9142 8.25 11.25 7.91421 11.25 7.5C11.25 7.08579 10.9142 6.75 10.5 6.75Z" /></svg>`,
        videos: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="m11 14 7-4-7-4z"/><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"/><path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-9 12V6l7 4-7 4z"/></svg>`,
        libra: `<svg width="24px" height="24px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><path d="M565.3 328.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"/></svg>`,
        animation: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,13v8a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h8A1,1,0,0,1,22,13ZM7,6A1,1,0,0,0,6,7v9a1,1,0,0,0,1,1h3V10.5a.5.5,0,0,1,.5-.5H17V7a1,1,0,0,0-1-1ZM3,13H4V4.5A.5.5,0,0,1,4.5,4H13V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3v9A1,1,0,0,0,3,13Z"/></svg>`,
		lupa: `<svg xmlns="http://w3.org" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">          <circle cx="11" cy="11" r="8"></circle>       <line x1="21" y1="21" x2="16.65" y2="16.65"></line>       <line x1="11" y1="8" x2="11" y2="14" stroke="#ccc"></line>     </svg>`,
		legenda: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM6.5 12.57H9.27C9.68 12.57 10.02 12.91 10.02 13.32C10.02 13.73 9.68 14.07 9.27 14.07H6.5C6.09 14.07 5.75 13.73 5.75 13.32C5.75 12.91 6.09 12.57 6.5 12.57ZM12.97 17.83H6.5C6.09 17.83 5.75 17.49 5.75 17.08C5.75 16.67 6.09 16.33 6.5 16.33H12.97C13.38 16.33 13.72 16.67 13.72 17.08C13.72 17.49 13.39 17.83 12.97 17.83ZM17.5 17.83H15.65C15.24 17.83 14.9 17.49 14.9 17.08C14.9 16.67 15.24 16.33 15.65 16.33H17.5C17.91 16.33 18.25 16.67 18.25 17.08C18.25 17.49 17.91 17.83 17.5 17.83ZM17.5 14.07H11.97C11.56 14.07 11.22 13.73 11.22 13.32C11.22 12.91 11.56 12.57 11.97 12.57H17.5C17.91 12.57 18.25 12.91 18.25 13.32C18.25 13.73 17.91 14.07 17.5 14.07Z"/></svg>`,
		keyB: `<svg width="24px" height="24px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">  <rect width="16" height="16" fill="none" />  <path d="M16,4c-0,-1.105 -0.895,-2 -2,-2c-3.074,0 -8.926,0 -12,0c-1.105,0 -2,0.895 -2,2c0,2.22 0,5.78 0,8c0,1.105 0.895,2 2,2c3.074,0 8.926,0 12,0c1.105,-0 2,-0.895 2,-2c0,-2.22 0,-5.78 0,-8Zm-4,6l0,2l-8,0l0,-2l8,0Zm-8,-3l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm4,0l0,2l-3,0l0,-2l3,0Zm-10,-3l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm3,0l0,2l-2,0l0,-2l2,0Zm4,0l0,2l-3,0l0,-2l3,0Z" /></svg>`,
		virtualk: `<svg viewBox="0 0 24 24" width="24px" height="24px" fill="white" stroke="currentColor" style="fill: none;    stroke: currentColor;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"></path></svg>`,
		virtualk2: `<svg viewBox="0 0 24 24" width="24px" height="24px" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"></path></svg>`,
		pAdv: `<svg width="24px" height="24px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M24,48v-8c-8.836,0-16-7.164-16-16c0-8.837,7.164-16,16-16V0h-5.021v4.661    c-2.212,0.573-4.284,1.494-6.129,2.735L9.857,4.402l-5.656,5.657l3.042,3.042c-1.163,1.784-2.036,3.766-2.583,5.883H0v10.032h4.66    c0.56,2.164,1.458,4.192,2.66,6.008l-3.118,3.119l5.656,5.655l3.119-3.118c1.819,1.205,3.853,2.104,6.023,2.664V48H24z"/><path d="M24,29c-2.762,0-5-2.238-5-5c0-2.761,2.238-5,5-5v-4c-4.971,0-9,4.029-9,9c0,4.971,4.029,9,9,9V29z"/><path d="M36.218,48V37.129C43.188,33.699,48,26.547,48,18.253C48,10.436,43.729,3.629,37.402,0v17.741    l-10.447,9.161V48H36.218z"/></g></g></svg>`,
		pOutros: `<svg width="24px" height="24px" fill="none" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M454.48,152.2H236.13c-7.74,0-14.02-6.28-14.02-14.02v-37.57c0-7.74,6.28-14.02,14.02-14.02h218.35     c7.74,0,14.02,6.28,14.02,14.02v37.57C468.5,145.92,462.22,152.2,454.48,152.2z"/></g><g><path d="M365.18,288.8H146.82c-7.74,0-14.02-6.28-14.02-14.02v-37.57c0-7.74,6.28-14.02,14.02-14.02h218.35     c7.74,0,14.02,6.28,14.02,14.02v37.57C379.19,282.53,372.92,288.8,365.18,288.8z"/></g><g><path d="M275.87,425.41H57.52c-7.74,0-14.02-6.28-14.02-14.02v-37.57c0-7.74,6.28-14.02,14.02-14.02h218.35     c7.74,0,14.02,6.28,14.02,14.02v37.57C289.89,419.13,283.61,425.41,275.87,425.41z"/></g></g></svg>`,
		pBasic: `<svg width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 73"><path d="M21,30H14a1,1,0,0,1-.71-.29l-7-7A1,1,0,0,1,6,22V7a5,5,0,0,1,5-5H21a5,5,0,0,1,5,5V25A5,5,0,0,1,21,30Zm-6.59-2H21a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3H11A3,3,0,0,0,8,7V21.59Z"/><path d="M13,21H7a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09l7,7A1,1,0,0,0,14,30a.84.84,0,0,0,.38-.08A1,1,0,0,0,15,29V23A2,2,0,0,0,13,21Z"/><path d="M19.78,26.14c-1.53,0-4.86-.71-4.86-1.54V29H21a4,4,0,0,0,3-1.38V23.71C23.68,26.07,21.32,26.14,19.78,26.14Z"/></g></svg>`,
		pPage: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 	 width="24px" height="24px" viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" xml:space="preserve"><g>	<path d="M1720.335,5.563H85.245c-43.937,0-79.679,35.739-79.679,79.667v1635.1c0,43.928,35.743,79.67,79.679,79.67		h1635.09c43.927,0,79.665-35.742,79.665-79.67V85.23C1800,41.302,1764.262,5.563,1720.335,5.563z M85.245,68.575h1635.09c9.182,0,16.653,7.473,16.653,16.655v195.532H68.578V85.23C68.578,76.048,76.055,68.575,85.245,68.575z M1720.335,1736.988H85.245		c-9.19,0-16.667-7.472-16.667-16.658V343.774h1668.41V1720.33C1736.988,1729.517,1729.517,1736.988,1720.335,1736.988z"/>	<path d="M1518.679,1150.928H333.948c-47.154,0-85.517,38.363-85.517,85.517v315.061		c0,47.152,38.363,85.516,85.517,85.516h1184.73c47.154,0,85.518-38.363,85.518-85.516v-315.061		C1604.196,1189.291,1565.833,1150.928,1518.679,1150.928z M1541.184,1551.505c0,12.403-10.096,22.504-22.505,22.504H333.948		c-12.409,0-22.504-10.101-22.504-22.504v-315.061c0-12.412,10.096-22.505,22.504-22.505h1184.73		c12.409,0,22.505,10.093,22.505,22.505V1551.505z"/>	<path d="M333.948,913.886h305.565c47.153,0,85.517-38.365,85.517-85.519V522.802		c0-47.154-38.363-85.516-85.517-85.516H333.948c-47.154,0-85.517,38.362-85.517,85.516v305.565		C248.432,875.521,286.794,913.886,333.948,913.886z M311.444,522.802c0-12.408,10.096-22.504,22.504-22.504h305.565		c12.408,0,22.505,10.096,22.505,22.504v305.565c0,12.408-10.097,22.505-22.505,22.505H333.948		c-12.409,0-22.504-10.097-22.504-22.505V522.802z"/>	<path d="M1572.689,996.396H279.938c-17.401,0-31.506,14.108-31.506,31.505c0,17.406,14.105,31.507,31.506,31.507	h1292.751c17.401,0,31.507-14.101,31.507-31.507C1604.196,1010.505,1590.091,996.396,1572.689,996.396z"/>	<path d="M1572.689,832.116H858.558c-17.402,0-31.507,14.105-31.507,31.507c0,17.401,14.105,31.505,31.507,31.505		h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,846.222,1590.091,832.116,1572.689,832.116z"/>	<path d="M1572.689,643.081H858.558c-17.402,0-31.507,14.105-31.507,31.506c0,17.401,14.105,31.505,31.507,31.505		h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,657.186,1590.091,643.081,1572.689,643.081z"/>	<path d="M1572.689,454.044H858.558c-17.402,0-31.507,14.105-31.507,31.507c0,17.401,14.105,31.505,31.507,31.505		h714.132c17.401,0,31.507-14.104,31.507-31.505C1604.196,468.15,1590.091,454.044,1572.689,454.044z"/>	<circle cx="204.913" cy="171.616" r="50.635"/>	<circle cx="364.694" cy="171.616" r="50.635"/>	<circle cx="524.474" cy="171.616" r="50.635"/></g></svg>`,
		pExtras: `<svg width="24px" height="24px" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g fill-rule="nonzero"><path d="M4.5,46.4 C2.2,46.4 0.4,48.2 0.4,50.5 L0.4,66.5 C0.4,68.8 2.2,70.6 4.5,70.6 L12,70.6 C13.1,74.9 14.8,79 17.1,82.8 L11.9,88 C10.3,89.6 10.3,92.2 11.9,93.8 L23.2,105.1 C24.8,106.7 27.4,106.7 29,105.1 L34.3,99.8 C38.1,102 42.2,103.7 46.5,104.8 L46.5,112.3 C46.5,114.6 48.3,116.4 50.6,116.4 L66.6,116.4 C68.9,116.4 70.7,114.6 70.7,112.3 L70.7,104.7 C75,103.6 79,101.9 82.8,99.7 L88.2,105.1 C89.8,106.7 92.4,106.7 94,105.1 L105.3,93.8 C106.9,92.2 106.9,89.6 105.3,88 L99.9,82.6 C102.1,78.8 103.8,74.8 104.9,70.5 L112.5,70.5 C114.8,70.5 116.6,68.7 116.6,66.4 L116.6,50.4 C116.6,48.1 114.8,46.3 112.5,46.3 L104.9,46.3 C103.8,42 102.1,38 99.9,34.2 L105.3,28.8 C106.9,27.2 106.9,24.6 105.3,23 L93.9,11.8 C92.3,10.2 89.7,10.2 88.1,11.8 L82.8,17.1 C79,14.9 74.9,13.2 70.6,12 L70.6,4.5 C70.6,2.2 68.8,0.4 66.5,0.4 L50.5,0.4 C48.2,0.4 46.4,2.2 46.4,4.5 L46.4,12 C42.1,13.1 38,14.8 34.2,17 L28.9,11.7 C27.3,10.1 24.7,10.1 23.1,11.7 L11.8,23.1 C10.2,24.7 10.2,27.3 11.8,28.9 L17,34.1 C14.7,37.9 13,42 11.9,46.4 L4.5,46.4 Z M19.3,51.2 C20.3,45.6 22.5,40.5 25.6,35.9 C26.7,34.3 26.5,32.1 25.1,30.7 L20.5,26 L26,20.5 L30.7,25.2 C32.1,26.6 34.3,26.8 35.9,25.7 C40.5,22.5 45.7,20.4 51.2,19.4 C53.1,19 54.6,17.4 54.6,15.4 L54.6,8.7 L62.4,8.7 L62.4,15.4 C62.4,17.4 63.8,19.1 65.7,19.4 C71.2,20.4 76.3,22.6 80.9,25.7 C82.5,26.8 84.7,26.6 86.1,25.2 L90.9,20.4 L96.4,25.9 L91.6,30.7 C90.2,32.1 90,34.3 91.1,35.9 C94.2,40.5 96.3,45.6 97.4,51.1 C97.8,53 99.5,54.5 101.4,54.5 L108.2,54.5 L108.2,62.3 L101.4,62.3 C99.4,62.3 97.7,63.7 97.4,65.6 C96.4,71.1 94.3,76.2 91.1,80.8 C90,82.4 90.2,84.6 91.6,86 L96.4,90.8 L90.9,96.3 L86.1,91.5 C84.7,90.1 82.5,89.9 80.9,91 C76.3,94.2 71.2,96.3 65.7,97.3 C63.8,97.7 62.4,99.4 62.4,101.3 L62.4,108 L54.6,108 L54.6,101.3 C54.6,99.3 53.2,97.6 51.2,97.3 C45.6,96.3 40.5,94.2 35.9,91 C34.3,89.9 32.1,90.1 30.7,91.5 L26,96.2 L20.5,91 L25.2,86.3 C26.6,84.9 26.8,82.7 25.7,81.1 C22.5,76.5 20.4,71.3 19.3,65.8 C18.9,63.9 17.3,62.5 15.3,62.5 L8.7,62.5 L8.7,54.7 L15.3,54.7 C17.2,54.6 18.9,53.2 19.3,51.2 Z"/><path d="M58.4,87.2 C73.9,87.2 86.5,74.6 86.5,59.1 C86.5,43.6 73.9,31 58.4,31 C42.9,31 30.3,43.6 30.3,59.1 C30.3,74.6 42.9,87.2 58.4,87.2 Z M58.4,39.2 C69.4,39.2 78.3,48.1 78.3,59.1 C78.3,70.1 69.4,79 58.4,79 C47.4,79 38.5,70.1 38.5,59.1 C38.5,48.1 47.4,39.2 58.4,39.2 Z"/></g></g></svg>`,
		pText: `<svg width="24px" height="24px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    <path d="M12.19,8.84a1.45,1.45,0,0,0-1.4-1h-.12a1.46,1.46,0,0,0-1.42,1L1.14,26.56a1.29,1.29,0,0,0-.14.59,1,1,0,0,0,1,1,1.12,1.12,0,0,0,1.08-.77l2.08-4.65h11l2.08,4.59a1.24,1.24,0,0,0,1.12.83,1.08,1.08,0,0,0,1.08-1.08,1.64,1.64,0,0,0-.14-.57ZM6.08,20.71l4.59-10.22,4.6,10.22Z" class="clr-i-outline clr-i-outline-path-1"></path><path d="M32.24,14.78A6.35,6.35,0,0,0,27.6,13.2a11.36,11.36,0,0,0-4.7,1,1,1,0,0,0-.58.89,1,1,0,0,0,.94.92,1.23,1.23,0,0,0,.39-.08,8.87,8.87,0,0,1,3.72-.81c2.7,0,4.28,1.33,4.28,3.92v.5a15.29,15.29,0,0,0-4.42-.61c-3.64,0-6.14,1.61-6.14,4.64v.05c0,2.95,2.7,4.48,5.37,4.48a6.29,6.29,0,0,0,5.19-2.48V26.9a1,1,0,0,0,1,1,1,1,0,0,0,1-1.06V19A5.71,5.71,0,0,0,32.24,14.78Zm-.56,7.7c0,2.28-2.17,3.89-4.81,3.89-1.94,0-3.61-1.06-3.61-2.86v-.06c0-1.8,1.5-3,4.2-3a15.2,15.2,0,0,1,4.22.61Z" class="clr-i-outline clr-i-outline-path-2"></path>   <rect x="0" y="0" width="36" height="36" fill-opacity="0"/></svg>`
    };

    let state = {
        zoom: 100,
        darkTheme: false, 
		legendas: false,
        currentTela: false,
        currentTelaZ: false,
        fontReadable: false,
        contrast: false,
		lupa: false,
        grayscale: false,
        lineSpace: false,
        textlineSpace: false,
        titleHighlight: false,
        linksHighlight: false,
        imagesHighlight: false,
        videosHighlight: false,
        iconsHighlight: false,
        buttonsHighlight: false,
        noAnim: false,
        bigCursor: false,
        speech: false,
        libras: false,
		teclado: false,
		virtualteclado:false,
    };


const LibrasInclusivo = (params) => {
    const config = {
        idioma: params.idioma || 'pt',
        tema: params.tema || 'light',
        botao: params.botao !== false,
        posicao: params.posicao || 'bottom-right',
        seletor: params.seletor || 'body'
    };

    const dicionario = {
        'A': '✊', 'B': '✋', 'C': '🤟', 'D': '☝️', 'E': '✊', 'F': '🖐️', 'G': '🤏', 'H': '✌️',
        'I': '🤙', 'J': '☝️', 'K': '✌️', 'L': '☝️', 'M': '✋', 'N': '✋', 'O': '👌', 'P': '✌️',
        'Q': '🤏', 'R': '🤞', 'S': '✊', 'T': '✊', 'U': '✌️', 'V': '✌️', 'W': '🖖', 'X': '☝️',
        'Y': '🤙', 'Z': '☝️', ' ': ' '
    };

    const i18n = {
        pt: { label: 'Traduzir Seleção', aviso: 'Selecione um texto para traduzir' },
        en: { label: 'Translate Selection', aviso: 'Select text to translate' }
    };

    const lang = i18n[config.idioma] || i18n.pt;

    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'none',
        userSelect: "none",
        flexDirection: 'column',
        pointerEvent:"none",
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '999999',
        padding: '40px',
        boxSizing: 'border-box',
        overflow: 'auto',
        backgroundColor: config.tema === 'dark' ? '#000' : '#fff',
        color: config.tema === 'dark' ? '#fff' : '#000'
    });

    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="35" height="35" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    Object.assign(closeBtn.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        cursor: 'pointer',
        zIndex: '1000000'
    });
    closeBtn.onclick = function(){  
        document.body.style.overflow="auto"; 
    overlay.style.display = 'none';      
     document.body.classList.remove("fs-acc-modal-scroll");
    }

    const content = document.createElement('div');
    Object.assign(content.style, {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
        height: '100%'
    });

    overlay.appendChild(closeBtn);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    function processar(texto) {
        content.innerHTML = '';
        if (!texto) return;
        
        const chars = texto.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split("");
        
        chars.forEach(char => {
            const box = document.createElement('div');
            Object.assign(box.style, {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px'
            });

            const sign = document.createElement('span');
            sign.innerText = dicionario[char] || char;
            sign.style.fontSize = 'min(26px, 42px)';

            const label = document.createElement('span');
            label.innerText = char;
            label.style.fontSize = '14px';
            label.style.marginTop = '5px';
            label.style.fontWeight = 'bold';

            box.appendChild(sign);
            box.appendChild(label);
            content.appendChild(box);
        });

        document.body.style.overflow="hidden"; 
        overlay.style.display = 'flex';
        document.body.classList.add("fs-acc-modal-scroll");
    }

    if (config.botao) {
        const floatBtn = document.createElement('button');
        floatBtn.innerText = lang.label;
        Object.assign(floatBtn.style, {
            position: 'fixed',
            zIndex: '999998',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: '#007bff',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            bottom: config.posicao.includes('bottom') ? '30px' : 'auto',
            top: config.posicao.includes('top') ? '30px' : 'auto',
            left: config.posicao.includes('left') ? '30px' : 'auto',
            right: config.posicao.includes('right') ? '30px' : 'auto'
        });
        floatBtn.onclick = () => {
            const sel = window.getSelection().toString();
            sel ? processar(sel) : function(){alert(lang.aviso);};
        };
        document.body.appendChild(floatBtn);
    }

    document.querySelector(config.seletor).addEventListener('mouseup', (e) => {
if(state){  if(state.libras===true){   
       if (window.getSelection().toString() && window.getSelection().toString() !== '') {
        const sel = window.getSelection().toString();
        if(sel.length > 0 && !config.botao) processar(sel);      }
 }   }
    });
};

	
function summary_accAdd(val, tet, titler, icons) {  if(val && tet && tet!=""){     var summary_accAdd_oo="";    var summary_acciconsAdd_oo="";
if(val==true){  
if(titler && titler!=""){  	
  if(icons && icons!=""){   summary_acciconsAdd_oo='<div class="js-divider-icon">'+icons+'</div>';    }
summary_accAdd_oo=summary_accAdd_oo+'<div class="js-divider">  <div class="js-divider-line"></div>   <div class="js-divider-content">   '+summary_acciconsAdd_oo+'   <span class="js-divider-text">'+titler+'</span>    </div>   <div class="js-divider-line"></div>   </div>   '+tet+'';
}   }   else  {
summary_accAdd_oo=tet;
}   }
return summary_accAdd_oo;   }


function state_appendObjeto(novoDado) {    if(novoDado){   
   Object.assign(state, novoDado);    }
}

	
var Keyboard_Vk=null;
	
    function init(options = {}) {
		document.body.classList.add("fs-acc-stu");
		
        Object.assign(config, options);
        injectStyles();
        state_appendObjeto(config.customConfig);
        loadSettings();
        render();
		
		var VirtualKeyboardMO=VirtualKeyboard.init(config.lang);
		  Keyboard_Vk =function(){     if(typeof VirtualKeyboardMO.show === 'function'){   VirtualKeyboardMO.show();  }    };
		
         LibrasInclusivo({ idioma: config.lang, tema: 'dark', botao: false,  posicao: 'bottom-right', seletor: 'body'  }); 
        applyAll();
        
   }
		

    function injectStyles() {
        const css = `
            :root { --fs-acc-primary: #2563eb; --fs-acc-bg: #ffffff; --fs-acc-text: #1f2937; }
            .fs-acc-theme_dark {  --fs-acc-bg: #111;    }

.toast-container {  user-select:none;   font-size: 14px;  position: fixed; z-index: 9999; padding: 20px; display: flex; flex-direction: column; gap: 10px; width: 95%; pointer-events: none; }
[data-position="tr"] { top: 0; right: 0; align-items: flex-end; }
[data-position="tc"] { top: 0; left: 50%; transform: translateX(-50%); align-items: center; }
[data-position="tl"] { top: 0; left: 0; align-items: flex-start; }
[data-position="br"] { bottom: 0; right: 0; align-items: flex-end; flex-direction: column-reverse; }
[data-position="bc"] { bottom: 0; left: 50%; transform: translateX(-50%); align-items: center; flex-direction: column-reverse; }
[data-position="bl"] { bottom: 0; left: 0; align-items: flex-start; flex-direction: column-reverse; }

.toast {  user-select:none;   position: relative; overflow: auto; display: flex; gap: 12px; width: 90%;     padding: 16px; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);    pointer-events: auto;  }

.toast-content {  pointer-events:none;  }
 
.toast.toast-success {     --toast-accent-color: #16a34a;     background: #ffffff !important;     color: #1e293b !important; }
.toast.toast-error {     --toast-accent-color: #dc2626;     background: #ffffff !important;     color: #1e293b !important; }
.toast.toast-warning {     --toast-accent-color: #f59e0b;     background: #ffffff !important;     color: #1e293b !important; }
.toast.toast-info {     --toast-accent-color: #3b82f6;     background: #ffffff !important;     color: #1e293b !important; }

.toast-icon {  pointer-events:none;  display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.style-accent .toast-icon, .style-bordered .toast-icon, .style-minimal .toast-icon { color: var(--toast-accent-color); }

.toast-close { background: none; border: none; color: inherit; cursor: pointer; font-size: 1.4rem; opacity: 0.4; line-height: 1; padding: 0; margin-left: auto; transition: opacity 0.2s; align-self: flex-start;   }
.toast-close:hover { opacity: 1; }

.style-accent { border: 1px solid var(--toast-accent-color); border-left: 6px solid var(--toast-accent-color); }
.style-bordered { border: 2px solid var(--toast-accent-color); }

.toast-progress {   pointer-events:none;  position: absolute; bottom: 0; left: 0; height: 5px; width: 100%; background: var(--toast-accent-color); opacity: 0.3; transform-origin: left; z-index: 10; transform: scaleX(1); }
.style-solid .toast-progress { background: rgba(255,255,255,0.7); opacity: 1; }

@keyframes slideInRight { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes slideOutRight { to { transform: translateX(120%); opacity: 0; } }
@keyframes slideInLeft { from { transform: translateX(-120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
@keyframes slideOutLeft { to { transform: translateX(-120%); opacity: 0; } }
@keyframes slideInDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes slideOutUp { to { transform: translateY(-100%); opacity: 0; } }
@keyframes slideInUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
@keyframes slideOutDown { to { transform: translateY(100%); opacity: 0; } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-8px); } 75% { transform: translateX(8px); } }
@keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }

            .js-divider {      user-select:none;  pointer-events:none;             display: flex;                align-items: center;                width: 100%;                margin: 7px 0;                gap: 15px;            }
            .js-divider-line {                flex: 1;                height: 1px;                background: linear-gradient(90deg, transparent, #d1d5db, transparent);            }
            .js-divider-content {                display: flex;                align-items: center;                gap: 8px;                   color: #000;                font-family: system-ui, -apple-system, sans-serif;                white-space: nowrap;            }
            .js-divider-content svg {   fill: #000;   }
			.js-divider-icon {                width: 18px;                height: 18px;                display: flex;                align-items: center;                color: #6366f1;         }
            .js-divider-text {                font-size: clamp(11px, 2.5vw, 13px);                font-weight: 700;                text-transform: uppercase;                letter-spacing: 0.1em;            }
			.fs-acc-theme_dark .js-divider-content{   color: #fff;   }
			.fs-acc-theme_dark .js-divider-content svg {   fill: #fff;   }
			
            @media (max-width: 480px) {
                .js-divider { gap: 8px; }
            }
			
            .fs-acc-area { position: fixed; bottom: 20px; ${config.position}: 20px;  z-index: 9999;  display: grid;   padding: 8px;    width: 60%;    height: 80px;       align-content: center;   align-items: center;    justify-content: start;  grid-auto-flow: column;   overflow: auto;  transition: transform 0.3s; }

			.fs-acc-stu {  }
			
            .fs-acc-btn { width: 56px; height: 56px; border-radius: 50%; background: var(--fs-acc-primary); color: white; border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; transition: transform 0.3s; }
            .fs-acc-btn:hover { transform: scale(1.1); }
			.fs-acc-btnch {      transition: transform 0.3s;     }
			.fs-acc-btnch:hover, .fs-acc-btnch.show { transform: scale(1.1); }
            .fs-acc-btnch svg, .fs-acc-btn svg { width: 30px; height: 30px;   fill: #fff; }

            .fs-acc-modal { position: fixed; top: 0; bottom: 0; width: 320px; background: var(--fs-acc-bg); z-index: 10000; box-shadow: 0 0 20px rgba(0,0,0,0.1); display: none; flex-direction: column; font-family: sans-serif; color: var(--fs-acc-text); overflow-y: auto; transition: all 0.3s ease; }
            .fs-acc-modal.active { display: flex; }
            
            .fs-acc-modal-scroll {  overflow:hidden;  }
            
            .fs-acc-modal.right { right: 0; }
            .fs-acc-modal.left { left: 0; }
            .fs-acc-modal.center { left: 50%; top: 50%; bottom: auto; transform: translate(-50%, -50%); height: 80vh; border-radius: 12px; }
            .fs-acc-modal.full { left: 0; right: 0; width: 100%; height: 100%; }

            .fs-acc-header { padding: 20px; background: #f3f4f6; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e5e7eb; }
            
            .fs-acc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 20px; }
            .fs-acc-grid.full {   padding: 10px;    width: 95%;    margin: 4px auto;    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));   }
            
            .fs-acc-item { background: #f9fafb; border: 1px solid #e5e7eb; padding: 15px 10px; border-radius: 8px; cursor: pointer; text-align: center; font-size: 12px; transition: 0.2s; display: flex; flex-direction: column; align-items: center; gap: 8px; }
            .fs-acc-item:hover { border-color: var(--fs-acc-primary); background: #eff6ff; }
            .fs-acc-item.active { background: var(--fs-acc-primary); color: white; border-color: var(--fs-acc-primary); }
            .fs-acc-item svg { width: 24px; height: 24px; fill: currentColor; }

            .fs-acc-close { background: none; border: none; cursor: pointer; width: 24px; height: 24px; }
            .fs-acc-close:active {  border: 1px solid #000;  }
            .fs-acc-close:hover {  border: 2px solid #ccc;  }

            body.fs-acc-tela_z .fs-acc-modal.active {  transform-origin: center;    transform: scale(0.6);    }
            body.fs-acc-tela_d .fs-acc-modal.active {  transform-origin: bottom center;   transform: scale(0.7);   }

            .fs-acc-modal .separate {  margin-top: 6px;    padding: 5px;    border-top: 1px solid #ccc;    width: 100%;    pointer-events: none;   }
            .fs-acc-theme_dark .separate {   border-top: 1px solid #fff;  }
			.fs-acc-modal .separatep {  margin-top: 7px;    padding: 5px;   width: 100%;    pointer-events: none;   }

			body.fs-acc-lupa {  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.4s;    transform-origin: left top;    transform: scale(1.3);    width: 83.33%;    overflow: auto;  }
			body.fs-acc-teclado *:focus { outline: 5px solid #2ecc71 !important; outline-offset: 3px; transition: outline 0.1s; }

            body.fs-acc-readable, body.fs-acc-readable * {  font-family: 'OpenDyslexic', Arial, sans-serif !important;  }
            body.fs-acc-contrast { background: #000 !important; color: #fff !important; filter: contrast(150%); }
            body.fs-acc-grayscale { filter: grayscale(100%); }
            body.fs-acc-no-anim, body.fs-acc-no-anim * { animation: none !important; transition: none !important; }
            body.fs-acc-links a { background: yellow !important; color: black !important; outline: 2px solid red !important; }
            body.fs-acc-images img { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-icons svg { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-buttons button { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-videos video { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-tela_z {   transform: scale(1.2);    transform-origin: left top;   }
            body.fs-acc-tela_d {   transform: scale(0.8);       transform-origin: center top;  }
            body.fs-acc-text_line, body.fs-acc-text_line * {  line-height: 2 !important;  }
            body.fs-acc-text_space, body.fs-acc-text_space * {  letter-spacing: 0.1em !important;    word-spacing: 0.5em !important;    }
            body.fs-acc-title h1, body.fs-acc-title h2, body.fs-acc-title h3 {  text-decoration: underline !important;  }
            body.fs-acc-cursor {  cursor: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjkuMTg4cHgiIGhlaWdodD0iNDMuNjI1cHgiIHZpZXdCb3g9IjAgMCAyOS4xODggNDMuNjI1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyOS4xODggNDMuNjI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNEOURBRDkiIHN0cm9rZS13aWR0aD0iMS4xNDA2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMi44LDQuNTQ5IDI2Ljg0NywxOS45MDIgMTYuOTY0LDIyLjcwMSAyNC4yMzksMzcuNzQ5IDE4LjI3OCw0Mi4wMTcgOS43NDEsMzAuNzI0IDEuMTM4LDM1LjgwOSAiLz48Zz48Zz48Zz48cGF0aCBmaWxsPSIjMjEyNjI3IiBkPSJNMjkuMTc1LDIxLjE1NWMwLjA3MS0wLjYxMy0wLjE2NS0xLjI1My0wLjYzNS0xLjU3M0wyLjE2NSwwLjI1OGMtMC40MjQtMC4zMi0wLjk4OC0wLjM0Ni0xLjQzNS0wLjA1M0MwLjI4MiwwLjQ5NywwLDEuMDMsMCwxLjYxN3YzNC4xNzFjMCwwLjYxMywwLjMwNiwxLjE0NiwwLjc3NiwxLjQzOWMwLjQ3MSwwLjI2NywxLjA1OSwwLjIxMywxLjQ4Mi0wLjE2bDcuNDgyLTYuMzQ0bDYuODQ3LDEyLjE1NWMwLjI1OSwwLjQ4LDAuNzI5LDAuNzQ2LDEuMiwwLjc0NmMwLjIzNSwwLDAuNDk0LTAuMDgsMC43MDYtMC4yMTNsNi45ODgtNC41ODVjMC4zMjktMC4yMTMsMC41NjUtMC41ODYsMC42NTktMS4wMTNjMC4wOTQtMC40MjYsMC4wMjQtMC44OC0wLjE4OC0xLjIyNmwtNi4zNzYtMTEuMzgybDguNjExLTIuNzQ1QzI4LjcwNSwyMi4yNzQsMjkuMTA1LDIxLjc2OCwyOS4xNzUsMjEuMTU1eiBNMTYuOTY0LDIyLjcwMWMtMC40MjQsMC4xMzMtMC43NzYsMC41MDYtMC45NDEsMC45NmMtMC4xNjUsMC40OC0wLjExOCwxLjAxMywwLjExOCwxLjQzOWw2LjU4OCwxMS43ODFsLTQuNTQxLDIuOTg1bC02Ljg5NC0xMi4zMTVjLTAuMjEyLTAuMzczLTAuNTQxLTAuNjQtMC45NDEtMC43MmMtMC4wOTQtMC4wMjctMC4xNjUtMC4wMjctMC4yNTktMC4wMjdjLTAuMzA2LDAtMC41ODgsMC4xMDctMC44NDcsMC4zMkwyLjgsMzIuNTlWNC41NDlsMjEuNTk5LDE1LjgwNkwxNi45NjQsMjIuNzAxeiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4='), auto !important;   }
            body.fs-acc-cursor a:hover, body.fs-acc-cursor button:hover {   cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9ImltZyIgY2xhc3M9Imljb25pZnkgaWNvbmlmeS0tZ2lzIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBkPSJNMTcuMDkgMS44NTNhNC45OTkgNC45OTkgMCAwIDAtNS4yNzYgNS41OTZsNy41NTcgODEuMDg3Yy40ODMgMy45MzggNS4xMzcgNS43NzMgOC4xNzYgMy4yMjNsMTUuOTQ3LTEyLjkzMmw3LjE1IDEyLjM4NWM0LjExMiA3LjEyMiAxMC42MzYgOC44NzIgMTcuNzU4IDQuNzZzOC44Ny0xMC42MzggNC43NTgtMTcuNzZsLTcuMTI1LTEyLjM0bDE4Ljg5Ni03LjI0NGMzLjcyOC0xLjM1NyA0LjQ2Ny02LjMwNiAxLjMtOC42OTNMMTkuNzg0IDIuODQ3YTQuOTk1IDQuOTk1IDAgMCAwLTIuNjk1LS45OTR6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PC9zdmc+'), auto !important;   }

             ${config.disable.map(item => ` .fs-acc-item[data-key="${item}"]{  pointer-events:none;  opacity:0.7;  }  `).join('')}
        `;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
		
        const styled = document.createElement('style');
        styled.id = "fs-acc-custom";    styled.textContent = "";
        document.head.appendChild(styled);
    }

    function render() {
        const lang = i18n[config.lang];

        const trigger_ares = document.createElement('div');
        trigger_ares.className = 'fs-acc-area';
        trigger_ares.innerHTML = "";
		
        const trigger = document.createElement('button');
        trigger.className = 'fs-acc-btn';
        trigger.innerHTML = icons.main;
        trigger.onclick = toggleModal;

		trigger_ares.appendChild(trigger);
		SmartChatAI(trigger_ares, false, config.lang);
		
        document.body.appendChild(trigger_ares);

		const triggervk = document.createElement('span');
        triggervk.id = 'vk_fss';
        triggervk.innerHTML = "";
		trigger_ares.appendChild(triggervk);

        const modal = document.createElement('div');
        modal.id = 'fs_acc_modal';
        modal.className = `fs-acc-modal ${config.modalPos}`;

		var custom_btnsaction_div='';
		var custom_btnsaction=`${config.customButtons.map(btn => `<div class="fs-acc-item" onclick="${btn.action}">${btn.icon} ${btn.label}</div>`).join('')}`; 
		if(custom_btnsaction!=""){
			custom_btnsaction_div=`${summary_accAdd(config.menu, `<div class="fs-acc-grid full">
             ${custom_btnsaction}   
            </div>`, lang.arc_o, icons.pOutros)}`;
		}
		
        modal.innerHTML = `
            <div class="fs-acc-header">
                <span onclick="fs_accessibility.update('darkTheme')"> <svg viewBox="0 0 24 24" width="24px" heigh="24px" style="margin: 0;"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></svg> </span>
                <strong>${lang.title}</strong>
                <button class="fs-acc-close" onclick="fs_accessibility.toggleModal()">${icons.close}</button>
            </div>  
			 <div class="separatep"></div>
            ${summary_accAdd(config.menu, `<div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="currentTela" onclick="fs_accessibility.update('currentTela')">${icons.tela_1} ${lang.currentTela}</div>
                <div class="fs-acc-item" data-key="currentTelaZ" onclick="fs_accessibility.update('currentTelaZ')">${icons.tela_2} ${lang.currentTelaZ}</div>
            </div>
			<div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="contrast" onclick="fs_accessibility.update('contrast')">${icons.contrast_1} ${lang.highContrast}</div>
                <div class="fs-acc-item" data-key="grayscale" onclick="fs_accessibility.update('grayscale')">${icons.contrast_2} ${lang.grayscale}</div>
            </div>`, lang.arc_b, icons.pBasic)}  
            ${summary_accAdd(config.menu, `<div class="fs-acc-grid full">
                <div class="fs-acc-item" onclick="fs_accessibility.update('zoom', 10)">${icons.textPlus_1} ${lang.increaseText}</div>
                <div class="fs-acc-item" onclick="fs_accessibility.update('zoom', -10)">${icons.textPlus_2} ${lang.decreaseText}</div>
            </div>            
			<div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="lineSpace" onclick="fs_accessibility.update('lineSpace')">${icons.space} ${lang.space}</div>
                <div class="fs-acc-item" data-key="textlineSpace" onclick="fs_accessibility.update('textlineSpace')">${icons.line} ${lang.line}</div>
            </div>
            <div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="fontReadable" onclick="fs_accessibility.update('fontReadable')">${icons.textPlus_3} ${lang.readableFont}</div>
                <div class="fs-acc-item" data-key="titleHighlight" onclick="fs_accessibility.update('titleHighlight')">${icons.title} ${lang.textTitle}</div>
            </div>`, lang.arc_t, icons.pText)}  
            ${summary_accAdd(config.menu, `<div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="linksHighlight" onclick="fs_accessibility.update('linksHighlight')">${icons.link_1} ${lang.linksHighlight}</div>
                <div class="fs-acc-item" data-key="imagesHighlight" onclick="fs_accessibility.update('imagesHighlight')">${icons.link_2} ${lang.imagesHighlight}</div>
                <div class="fs-acc-item" data-key="videosHighlight" onclick="fs_accessibility.update('videosHighlight')">${icons.videos} ${lang.videosHighlight}</div>
                <div class="fs-acc-item" data-key="iconsHighlight" onclick="fs_accessibility.update('iconsHighlight')">${icons.icon} ${lang.iconsHighlight}</div>
                <div class="fs-acc-item" data-key="buttonsHighlight" onclick="fs_accessibility.update('buttonsHighlight')">${icons.button} ${lang.buttonsHighlight}</div>
            </div>`, lang.arc_p, icons.pPage)} 
             ${summary_accAdd(config.menu, `<div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="noAnim" onclick="fs_accessibility.update('noAnim')">${icons.animation} ${lang.stopAnimations}</div>
            </div>
            <div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="bigCursor" onclick="fs_accessibility.update('bigCursor')">${icons.cursor} ${lang.bigCursor}</div>
            </div>`, lang.arc_e, icons.pExtras)}
            ${summary_accAdd(config.menu, `<div class="fs-acc-grid full">
                <div class="fs-acc-item" data-key="lupa" onclick="fs_accessibility.update('lupa')">${icons.lupa} ${lang.lupa}</div>
                <div class="fs-acc-item" data-key="speech" onclick="fs_accessibility.update('speech')">${icons.voice} ${lang.textToSpeech}</div>
                <div class="fs-acc-item" data-key="libras" onclick="fs_accessibility.update('libras')">${icons.libra} ${lang.textToLibra}</div>
                <div class="fs-acc-item" data-key="legendas" onclick="fs_accessibility.update('legendas')">${icons.legenda} ${lang.legenda}</div>
                <div class="fs-acc-item" data-key="teclado" onclick="fs_accessibility.update('teclado')">${icons.keyB} ${lang.keyB}</div>
	            <div class="fs-acc-item" data-key="virtualteclado" onclick="fs_accessibility.update('virtualteclado')">${icons.virtualk} ${lang.virtualk}</div>
            </div>`, lang.arc_a, icons.pAdv)}    
			${custom_btnsaction_div}
             <div class="separate"></div>  
            <div style="padding: 8px 20px;    margin-top: 4px;">
                <button class="fs-acc-item" style="width: 100%" onclick="fs_accessibility.reset()"> ${icons.reset} ${lang.reset} </button>
            </div>  <br/>  <br/> 
        `;
        document.body.appendChild(modal);

		if(config.status==true){  var obj_osd = FToast.constructor();          if(obj_osd){   document.getElementById("fs_acc_modal").appendChild(obj_osd);   }    }
    }

    function toggleModal() {
        document.getElementById('fs_acc_modal').classList.toggle('active');
        if (document.getElementById('fs_acc_modal').classList.contains('active')) {           
            document.body.classList.add("fs-acc-modal-scroll");     

            if (typeof config.open_call === 'function') {  config.open_call(state);  }

        }  else {
           document.body.classList.remove("fs-acc-modal-scroll");
            
           if (typeof config.close_call === 'function') {  config.close_call(state);  }

        }
    }

    function update(key, val) {
        if (key === 'zoom') {
            state.zoom = Math.max(80, Math.min(200, state.zoom + val));
        } else {
            state[key] = !state[key];
        }
        saveSettings();
        applyAll();
    }

    function applyAll() {
        const b = document.body;
        //b.style.fontSize = state.zoom + '%';
		if(document.getElementById("fs-acc-custom")){   document.getElementById("fs-acc-custom").textContent=".fs-acc-stu, .fs-acc-stu .l {  font-size: "+state.zoom+"%; }";  }

		b.classList.toggle('fs-acc-readable', state.fontReadable);
        b.classList.toggle('fs-acc-contrast', state.contrast);
        b.classList.toggle('fs-acc-grayscale', state.grayscale);
        b.classList.toggle('fs-acc-no-anim', state.noAnim);
        b.classList.toggle('fs-acc-links', state.linksHighlight);
        b.classList.toggle('fs-acc-images', state.imagesHighlight);
        b.classList.toggle('fs-acc-videos', state.videosHighlight);
        b.classList.toggle('fs-acc-buttons', state.buttonsHighlight);
        b.classList.toggle('fs-acc-icons', state.iconsHighlight);
        b.classList.toggle('fs-acc-cursor', state.bigCursor);
        b.classList.toggle('fs-acc-tela_z', state.currentTela);
        b.classList.toggle('fs-acc-tela_d', state.currentTelaZ);
        b.classList.toggle('fs-acc-title', state.titleHighlight);
        b.classList.toggle('fs-acc-text_line', state.textlineSpace);
        b.classList.toggle('fs-acc-text_space', state.lineSpace);
        b.classList.toggle('fs-acc-lupa', state.lupa);
        b.classList.toggle('fs-acc-teclado', state.teclado);

        document.getElementById('fs_acc_modal').classList.toggle('fs-acc-theme_dark', state.darkTheme);

        // Ativar/Desativar
		toggleLegendas(state.legendas);    iniciarNavegacaoTeclado(state.teclado);

		if(document.getElementById("vk_fss")) {
			if(document.getElementById("Keyboard_Vk_btn")) {   document.getElementById("Keyboard_Vk_btn").remove();   }
			document.getElementById("vk_fss").innerHTML="";
			if(state.virtualteclado===true){
				document.getElementById("vk_fss").innerHTML=`<button id="Keyboard_Vk_btn" class="fs-acc-btnch" style="width: 56px; height: 56px; border-radius: 50%; background-color: rgb(0, 86, 179); border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 15px; display: flex; align-items: center; justify-content: center; z-index: 9999;">${icons.virtualk2}</button>`;
				if(document.getElementById("Keyboard_Vk_btn")) {   document.getElementById("Keyboard_Vk_btn").onclick=function(){  if(typeof Keyboard_Vk === 'function'){   Keyboard_Vk();  }   };   }
			}
		}
		
        if (state.speech) {
            b.onmouseover = (e) => {
                if (e.target.innerText && e.target.tagName !== 'BODY') {
                    const msg = new SpeechSynthesisUtterance(e.target.innerText);
                    msg.lang = config.lang === 'pt' ? 'pt-BR' : 'en-US';
                    window.speechSynthesis.cancel();
                    window.speechSynthesis.speak(msg);
                }
            };
        } else {
            b.onmouseover = null;
        }

        document.querySelectorAll('.fs-acc-item[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            el.classList.toggle('active', state[key]);
        });

      var lang_u = i18n[config.lang];
	   if(config.status==true){  FToast.show('success', lang_u.title+'', lang_u.applyAll+'');    } 
    }

    function saveSettings() {
        localStorage.setItem(config.storageKey, JSON.stringify(state));
    }

    function loadSettings() {
        const saved = localStorage.getItem(config.storageKey);
        if (saved && saved!=""){  state = JSON.parse(saved);     }
    }

    function reset() {
        state = { darkTheme: false, virtualteclado:false, teclado: false, legendas: false, lupa: false, currentTela: false, currentTelaZ: false, lineSpace: false, textlineSpace: false, zoom: 100, fontReadable: false, contrast: false, grayscale: false, titleHighlight: false, linksHighlight: false, imagesHighlight: false, noAnim: false, bigCursor: false, speech: false, libras: false, videosHighlight: false, iconsHighlight: false, buttonsHighlight: false };
        saveSettings();
        applyAll();
		
      var lang_u = i18n[config.lang];
	   if(config.status==true){  FToast.show('success', lang_u.title+'', lang_u.resetAll+'');    } 
    }

    return { init, toggleModal, update, reset };
})();
