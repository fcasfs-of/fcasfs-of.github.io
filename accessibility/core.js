function check_stringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }


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
		teclado: false
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

	
    function init(options = {}) {
        Object.assign(config, options);
        injectStyles();
        state_appendObjeto(config.customConfig);
        loadSettings();
        render();
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
			
            .fs-acc-btn { position: fixed; bottom: 20px; ${config.position}: 20px; width: 56px; height: 56px; border-radius: 50%; background: var(--fs-acc-primary); color: white; border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999; display: flex; align-items: center; justify-content: center; transition: transform 0.3s; }
            .fs-acc-btn:hover { transform: scale(1.1); }
            .fs-acc-btn svg { width: 30px; height: 30px; fill: currentColor; }

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

            body.fs-acc-readable { font-family: 'OpenDyslexic', Arial, sans-serif !important; }
            body.fs-acc-contrast { background: #000 !important; color: #fff !important; filter: contrast(150%); }
            body.fs-acc-grayscale { filter: grayscale(100%); }
            body.fs-acc-no-anim * { animation: none !important; transition: none !important; }
            body.fs-acc-links a { background: yellow !important; color: black !important; outline: 2px solid red !important; }
            body.fs-acc-images img { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-icons svg { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-buttons button { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-videos video { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-tela_z {   transform: scale(1.2);    transform-origin: left top;   }
            body.fs-acc-tela_d {   transform: scale(0.8);       transform-origin: center top;  }
            body.fs-acc-text_line * {  line-height: 2 !important;  }
            body.fs-acc-text_space * {  letter-spacing: 0.1em !important;    word-spacing: 0.5em !important;    }
            body.fs-acc-title h1, body.fs-acc-title h2, body.fs-acc-title h3 {  text-decoration: underline !important;  }
            body.fs-acc-cursor {  cursor: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjkuMTg4cHgiIGhlaWdodD0iNDMuNjI1cHgiIHZpZXdCb3g9IjAgMCAyOS4xODggNDMuNjI1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyOS4xODggNDMuNjI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNEOURBRDkiIHN0cm9rZS13aWR0aD0iMS4xNDA2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMi44LDQuNTQ5IDI2Ljg0NywxOS45MDIgMTYuOTY0LDIyLjcwMSAyNC4yMzksMzcuNzQ5IDE4LjI3OCw0Mi4wMTcgOS43NDEsMzAuNzI0IDEuMTM4LDM1LjgwOSAiLz48Zz48Zz48Zz48cGF0aCBmaWxsPSIjMjEyNjI3IiBkPSJNMjkuMTc1LDIxLjE1NWMwLjA3MS0wLjYxMy0wLjE2NS0xLjI1My0wLjYzNS0xLjU3M0wyLjE2NSwwLjI1OGMtMC40MjQtMC4zMi0wLjk4OC0wLjM0Ni0xLjQzNS0wLjA1M0MwLjI4MiwwLjQ5NywwLDEuMDMsMCwxLjYxN3YzNC4xNzFjMCwwLjYxMywwLjMwNiwxLjE0NiwwLjc3NiwxLjQzOWMwLjQ3MSwwLjI2NywxLjA1OSwwLjIxMywxLjQ4Mi0wLjE2bDcuNDgyLTYuMzQ0bDYuODQ3LDEyLjE1NWMwLjI1OSwwLjQ4LDAuNzI5LDAuNzQ2LDEuMiwwLjc0NmMwLjIzNSwwLDAuNDk0LTAuMDgsMC43MDYtMC4yMTNsNi45ODgtNC41ODVjMC4zMjktMC4yMTMsMC41NjUtMC41ODYsMC42NTktMS4wMTNjMC4wOTQtMC40MjYsMC4wMjQtMC44OC0wLjE4OC0xLjIyNmwtNi4zNzYtMTEuMzgybDguNjExLTIuNzQ1QzI4LjcwNSwyMi4yNzQsMjkuMTA1LDIxLjc2OCwyOS4xNzUsMjEuMTU1eiBNMTYuOTY0LDIyLjcwMWMtMC40MjQsMC4xMzMtMC43NzYsMC41MDYtMC45NDEsMC45NmMtMC4xNjUsMC40OC0wLjExOCwxLjAxMywwLjExOCwxLjQzOWw2LjU4OCwxMS43ODFsLTQuNTQxLDIuOTg1bC02Ljg5NC0xMi4zMTVjLTAuMjEyLTAuMzczLTAuNTQxLTAuNjQtMC45NDEtMC43MmMtMC4wOTQtMC4wMjctMC4xNjUtMC4wMjctMC4yNTktMC4wMjdjLTAuMzA2LDAtMC41ODgsMC4xMDctMC44NDcsMC4zMkwyLjgsMzIuNTlWNC41NDlsMjEuNTk5LDE1LjgwNkwxNi45NjQsMjIuNzAxeiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4='), auto !important;   }
            body.fs-acc-cursor a:hover, body.fs-acc-cursor button:hover {   cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9ImltZyIgY2xhc3M9Imljb25pZnkgaWNvbmlmeS0tZ2lzIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBkPSJNMTcuMDkgMS44NTNhNC45OTkgNC45OTkgMCAwIDAtNS4yNzYgNS41OTZsNy41NTcgODEuMDg3Yy40ODMgMy45MzggNS4xMzcgNS43NzMgOC4xNzYgMy4yMjNsMTUuOTQ3LTEyLjkzMmw3LjE1IDEyLjM4NWM0LjExMiA3LjEyMiAxMC42MzYgOC44NzIgMTcuNzU4IDQuNzZzOC44Ny0xMC42MzggNC43NTgtMTcuNzZsLTcuMTI1LTEyLjM0bDE4Ljg5Ni03LjI0NGMzLjcyOC0xLjM1NyA0LjQ2Ny02LjMwNiAxLjMtOC42OTNMMTkuNzg0IDIuODQ3YTQuOTk1IDQuOTk1IDAgMCAwLTIuNjk1LS45OTR6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PC9zdmc+'), auto !important;   }

             ${config.disable.map(item => ` .fs-acc-item[data-key="${item}"]{  pointer-events:none;  opacity:0.7;  }  `).join('')}
        `;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    function render() {
        const lang = i18n[config.lang];
        
        const trigger = document.createElement('button');
        trigger.className = 'fs-acc-btn';
        trigger.innerHTML = icons.main;
        trigger.onclick = toggleModal;
        document.body.appendChild(trigger);

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
        b.style.fontSize = state.zoom + '%';
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
        state = { darkTheme: false, teclado: false, legendas: false, lupa: false, currentTela: false, currentTelaZ: false, lineSpace: false, textlineSpace: false, zoom: 100, fontReadable: false, contrast: false, grayscale: false, titleHighlight: false, linksHighlight: false, imagesHighlight: false, noAnim: false, bigCursor: false, speech: false, libras: false, videosHighlight: false, iconsHighlight: false, buttonsHighlight: false };
        saveSettings();
        applyAll();
		
      var lang_u = i18n[config.lang];
	   if(config.status==true){  FToast.show('success', lang_u.title+'', lang_u.resetAll+'');    } 
    }

    return { init, toggleModal, update, reset };
})();
