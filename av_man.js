var manut=false;


const Avisos = {
    config: {
        importante: { cor: '#999999', fundo: '#f3f6f4', icone: '<svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="22px" height="22px" viewBox="0 0 32 32" xml:space="preserve"><path d="M9.421,13.339C9.753,10.855,11.872,9,14.378,9h3.245c2.506,0,4.625,1.855,4.956,4.339L23.733,22H16V11	h-1.587c-1.498,0-2.766,1.105-2.972,2.589L10.277,22h-2.01L9.421,13.339z M13.187,7.436c0.061,0.224,0.263,0.371,0.483,0.371	c0.043,0,0.086-0.005,0.129-0.017c0.268-0.071,0.426-0.346,0.354-0.612l-1.035-3.864c-0.072-0.268-0.348-0.424-0.612-0.354	c-0.268,0.071-0.426,0.346-0.354,0.612L13.187,7.436z M22.364,10.136c0.128,0,0.256-0.049,0.354-0.146l2.828-2.829	c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0l-2.828,2.829c-0.195,0.195-0.195,0.512,0,0.707	C22.108,10.087,22.236,10.136,22.364,10.136z M18.2,7.79c0.043,0.012,0.086,0.017,0.129,0.017c0.221,0,0.423-0.147,0.483-0.371	l1.035-3.864c0.071-0.267-0.087-0.541-0.354-0.612c-0.261-0.069-0.54,0.087-0.612,0.354l-1.035,3.864	C17.774,7.444,17.933,7.718,18.2,7.79z M8,23c-0.552,0-1,0.448-1,1h18c0-0.552-0.448-1-1-1H8z M9.282,9.99	c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L7.161,6.454	c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L9.282,9.99z M29.04,12.506c-0.072-0.268-0.343-0.424-0.613-0.354	l-3.863,1.035c-0.267,0.071-0.425,0.346-0.354,0.612c0.061,0.224,0.263,0.371,0.483,0.371c0.043,0,0.086-0.005,0.13-0.017	l3.863-1.035C28.953,13.047,29.111,12.772,29.04,12.506z M25,25H7c-1.163,0-2.164,0.821-2.392,1.961l-0.369,1.843	C4.115,29.423,4.589,30,5.22,30h21.56c0.631,0,1.104-0.577,0.981-1.196l-0.369-1.843C27.164,25.821,26.163,25,25,25z M12.432,13.726	L11.286,22H15V12h-0.587C13.42,12,12.568,12.742,12.432,13.726z M7.307,14.17c0.221,0,0.423-0.147,0.483-0.371	c0.071-0.267-0.087-0.541-0.354-0.612l-3.863-1.035c-0.27-0.069-0.541,0.087-0.613,0.354c-0.071,0.267,0.087,0.541,0.354,0.612	l3.863,1.035C7.221,14.165,7.264,14.17,7.307,14.17z"/></svg>' },
        sucesso: { cor: '#10b981', fundo: '#f0fdf4', icone: '<svg stroke="currentColor" fill="currentColor" width="22px" height="22px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z"/></svg>' },
        erro: { cor: '#ef4444', fundo: '#fef2f2', icone: '<svg stroke="currentColor" fill="currentColor" height="22px" width="22px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M64,256c0-106.1,86-192,192-192	c42.1,0,81,13.7,112.6,36.7L100.7,368.6C77.7,337,64,298.1,64,256z M256,448c-42.1,0-81-13.7-112.6-36.7l267.9-267.9	c23,31.7,36.7,70.5,36.7,112.6C448,362.1,362,448,256,448z"/></svg>' },
        alerta: { cor: '#f59e0b', fundo: '#fffbeb', icone: '<svg stroke="currentColor" fill="currentColor" width="22px" height="22px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">	<path d="M8.454 1.492l-8.242 14.508h16.581l-8.339-14.508zM8.459 3.508l6.605 11.492h-13.134l6.529-11.492zM9 10.938h-1v-3.938h1v3.938zM9.5 13.031c0 0.552-0.447 1-1 1s-1-0.448-1-1 0.447-1 1-1 1 0.448 1 1z" /></svg>' },
        none: { cor: '#000000', fundo: '#ffffff', icone: '' },
        info: { cor: '#3b82f6', fundo: '#eff6ff', icone: '<svg stroke="currentColor" fill="currentColor" width="22px" height="22px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-10a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>' }
    },

    exibir(opcoes) {
        const { 
            alvo, 
            mensagem, 
            tipo = 'info', 
            fixo = false, 
            duracao = 5000, 
            exibirBotaoFechar = true 
        } = opcoes;

        const estilo = this.config[tipo] || this.config.info;
        const elementoAlvo = typeof alvo === 'string' ? document.querySelector(alvo) : alvo;

        if (!elementoAlvo) return;

        const box = document.createElement('div');
        
        Object.assign(box.style, {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            marginBottom: '12px',
            width: "100%",
            borderRadius: '12px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            color: '#1f2937',
            backgroundColor: estilo.fundo,
            border: `1px solid ${estilo.cor}`,
            borderLeft: `6px solid ${estilo.cor}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.4s ease',
            opacity: '0',
            transform: 'translateY(-10px)'
        });

        const conteudo = document.createElement('div');
        conteudo.style.display = 'flex';
        conteudo.style.alignItems = 'center';
        conteudo.style.gap = '12px';
        conteudo.style.overflow = 'auto';
        conteudo.innerHTML = `<span style="color: ${estilo.cor}; display: flex;">${estilo.icone}</span> <span>${mensagem}</span>`;
        box.appendChild(conteudo);

        if (exibirBotaoFechar) {
            const btnFechar = document.createElement('button');
            btnFechar.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            Object.assign(btnFechar.style, {
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: '#9ca3af',
                marginLeft: '15px',
                display: 'flex',
                transition: 'color 0.2s'
            });
            btnFechar.onmouseover = () => btnFechar.style.color = estilo.cor;
            btnFechar.onmouseout = () => btnFechar.style.color = '#9ca3af';
            btnFechar.onclick = () => fecharAviso();
            box.appendChild(btnFechar);
        }

        const fecharAviso = () => {
            box.style.opacity = '0';
            box.style.transform = 'translateX(20px)';
            setTimeout(() => box.remove(), 400);
        };

        elementoAlvo.parentNode.insertBefore(box, elementoAlvo);

        requestAnimationFrame(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        });

        if (!fixo) {
            setTimeout(fecharAviso, duracao);
        }
    }
};


function initAvisos(call){   if (typeof call === 'function') {   call(Avisos.exibir);	 	}      }




