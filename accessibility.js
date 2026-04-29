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
            else window.location.href = "https://google.com";
        };
    }
};


const fs_accessibility = (function() {
    const config = {
        lang: 'pt',
        position: 'right', // 'left' or 'right'
        modalPos: 'right', // 'left', 'right', 'center', 'full'
        storageKey: 'fs_acc_settings',
        customButtons: []
    };

    const i18n = {
        pt: {
            title: "Acessibilidade",
            reset: "Resetar Configurações",
            close: "Fechar",
            increaseText: "Aumentar Texto",
            decreaseText: "Diminuir Texto",
            readableFont: "Fonte Legível",
            highContrast: "Alto Contraste",
            grayscale: "Escala de Cinza",
            linksHighlight: "Destacar Links",
            imagesHighlight: "Destacar Imagens",
            stopAnimations: "Parar Animações",
            bigCursor: "Cursor Grande",
            readingLine: "Linha de Leitura",
            textToLibra: "Traduzir para Libras",
            textToSpeech: "Voz (Hover)",
            magnifier: "Lupa de Tela"
        },
        en: {
            title: "Accessibility",
            reset: "Reset Settings",
            close: "Close",
            increaseText: "Increase Text",
            decreaseText: "Decrease Text",
            readableFont: "Readable Font",
            highContrast: "High Contrast",
            grayscale: "Grayscale",
            linksHighlight: "Highlight Links",
            imagesHighlight: "Highlight Images",
            stopAnimations: "Stop Animations",
            bigCursor: "Big Cursor",
            readingLine: "Reading Line",
            textToLibra: "Translate to Libras",
            textToSpeech: "Speech (Hover)",
            magnifier: "Screen Magnifier"
        }
    };

    const icons = {
        main: `<svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>`,
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
        libra: `<svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.46088 12.8405L22.2354 9.06243C22.7542 8.95215 23.2956 9.05249 23.7405 9.34139L31.8394 14.6009C32.2842 14.8898 32.8256 14.9901 33.3445 14.8798L37.4249 14.0125C38.5053 13.7829 39.5674 14.4726 39.797 15.553L40.4207 18.4874C40.6504 19.5679 39.9607 20.6299 38.8803 20.8596L31.8654 22.3506C31.3466 22.4609 30.8052 22.3605 30.3603 22.0717L22.2614 16.8122C21.8165 16.5233 21.2751 16.4229 20.7563 16.5332L17.654 17.1926" stroke="none" stroke-width="4" stroke-linecap="round"/><path d="M43.5393 33.1596L25.7648 36.9377C25.246 37.048 24.7046 36.9476 24.2597 36.6587L16.1608 31.3992C15.7159 31.1103 15.1745 31.01 14.6557 31.1203L10.5753 31.9876C9.49486 32.2173 8.43282 31.5276 8.20317 30.4471L7.57943 27.5127C7.34978 26.4323 8.03947 25.3702 9.11991 25.1406L16.1348 23.6495C16.6536 23.5392 17.195 23.6396 17.6399 23.9285L25.7388 29.188C26.1836 29.4769 26.725 29.5772 27.2439 29.4669L30.3462 28.8075" stroke="none" stroke-width="4" stroke-linecap="round"/></svg>`,
        animation: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,13v8a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h8A1,1,0,0,1,22,13ZM7,6A1,1,0,0,0,6,7v9a1,1,0,0,0,1,1h3V10.5a.5.5,0,0,1,.5-.5H17V7a1,1,0,0,0-1-1ZM3,13H4V4.5A.5.5,0,0,1,4.5,4H13V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3v9A1,1,0,0,0,3,13Z"/></svg>`
    };

    let state = {
        zoom: 100,
        fontReadable: false,
        contrast: false,
        grayscale: false,
        linksHighlight: false,
        imagesHighlight: false,
        noAnim: false,
        bigCursor: false,
        speech: false,
        libras: false
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
    closeBtn.onclick = () => { overlay.style.display = 'none'; document.body.style.overflow = 'auto'; };

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

    const processar = (texto) => {
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

        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

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



    function init(options = {}) {
         LibrasInclusivo({ idioma: 'pt', tema: 'dark', botao: false,  posicao: 'bottom-right', seletor: 'body'  }); 
        Object.assign(config, options);
        loadSettings();
        injectStyles();
        render();
        applyAll();
    }

    function injectStyles() {
        const css = `
            :root { --fs-acc-primary: #2563eb; --fs-acc-bg: #ffffff; --fs-acc-text: #1f2937; }
            .fs-acc-btn { position: fixed; bottom: 20px; ${config.position}: 20px; width: 56px; height: 56px; border-radius: 50%; background: var(--fs-acc-primary); color: white; border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 9999; display: flex; align-items: center; justify-content: center; transition: transform 0.3s; }
            .fs-acc-btn:hover { transform: scale(1.1); }
            .fs-acc-btn svg { width: 30px; height: 30px; fill: currentColor; }

            .fs-acc-modal { position: fixed; top: 0; bottom: 0; width: 320px; background: var(--fs-acc-bg); z-index: 10000; box-shadow: 0 0 20px rgba(0,0,0,0.1); display: none; flex-direction: column; font-family: sans-serif; color: var(--fs-acc-text); overflow-y: auto; transition: all 0.3s ease; }
            .fs-acc-modal.active { display: flex; }
            
            /* Posições do Modal */
            .fs-acc-modal.right { right: 0; }
            .fs-acc-modal.left { left: 0; }
            .fs-acc-modal.center { left: 50%; top: 50%; bottom: auto; transform: translate(-50%, -50%); height: 80vh; border-radius: 12px; }
            .fs-acc-modal.full { left: 0; right: 0; width: 100%; height: 100%; }

            .fs-acc-header { padding: 20px; background: #f3f4f6; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e5e7eb; }
            .fs-acc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 20px; }
            .fs-acc-item { background: #f9fafb; border: 1px solid #e5e7eb; padding: 15px 10px; border-radius: 8px; cursor: pointer; text-align: center; font-size: 12px; transition: 0.2s; display: flex; flex-direction: column; align-items: center; gap: 8px; }
            .fs-acc-item:hover { border-color: var(--fs-acc-primary); background: #eff6ff; }
            .fs-acc-item.active { background: var(--fs-acc-primary); color: white; border-color: var(--fs-acc-primary); }
            .fs-acc-item svg { width: 24px; height: 24px; fill: currentColor; }

            .fs-acc-close { background: none; border: none; cursor: pointer; width: 24px; height: 24px; }
            .fs-acc-close:active {  border: 1px solid #000;  }
            .fs-acc-close:hover {  border: 2px solid #ccc;  }

            /* Classes Globais de Acessibilidade */
            body.fs-acc-readable { font-family: 'OpenDyslexic', Arial, sans-serif !important; }
            body.fs-acc-contrast { background: #000 !important; color: #fff !important; filter: contrast(150%); }
            body.fs-acc-grayscale { filter: grayscale(100%); }
            body.fs-acc-no-anim * { animation: none !important; transition: none !important; }
            body.fs-acc-links a { background: yellow !important; color: black !important; outline: 2px solid red !important; }
            body.fs-acc-images img { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-cursor { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://w3.org" width="48" height="48" viewBox="0 0 24 24"><path d="M7 2l12 11.2l-5.8.5l3.3 7.3l-2.2 1l-3.2-7.4L7 19z"/></svg>'), auto !important; }
        `;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    function render() {
        const lang = i18n[config.lang];
        
        // Botão de Gatilho
        const trigger = document.createElement('button');
        trigger.className = 'fs-acc-btn';
        trigger.innerHTML = icons.main;
        trigger.onclick = toggleModal;
        document.body.appendChild(trigger);

        // Modal
        const modal = document.createElement('div');
        modal.id = 'fs_acc_modal';
        modal.className = `fs-acc-modal ${config.modalPos}`;
        modal.innerHTML = `
            <div class="fs-acc-header">
                <svg viewBox="0 0 24 24" width="24px" heigh="24px" style="margin: 0;"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></svg>
                <strong>${lang.title}</strong>
                <button class="fs-acc-close" onclick="fs_accessibility.toggleModal()">${icons.close}</button>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" onclick="fs_accessibility.update('zoom', 10)">${icons.textPlus_1} ${lang.increaseText}</div>
                <div class="fs-acc-item" onclick="fs_accessibility.update('zoom', -10)">${icons.textPlus_2} ${lang.decreaseText}</div>
                <div class="fs-acc-item" data-key="fontReadable" onclick="fs_accessibility.update('fontReadable')">${icons.textPlus_3} ${lang.readableFont}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="contrast" onclick="fs_accessibility.update('contrast')">${icons.contrast_1} ${lang.highContrast}</div>
                <div class="fs-acc-item" data-key="grayscale" onclick="fs_accessibility.update('grayscale')">${icons.contrast_2} ${lang.grayscale}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="linksHighlight" onclick="fs_accessibility.update('linksHighlight')">${icons.link_1} ${lang.linksHighlight}</div>
                <div class="fs-acc-item" data-key="imagesHighlight" onclick="fs_accessibility.update('imagesHighlight')">${icons.link_2} ${lang.imagesHighlight}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="noAnim" onclick="fs_accessibility.update('noAnim')">${icons.animation} ${lang.stopAnimations}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="bigCursor" onclick="fs_accessibility.update('bigCursor')">${icons.cursor} ${lang.bigCursor}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="speech" onclick="fs_accessibility.update('speech')">${icons.voice} ${lang.textToSpeech}</div>
                <div class="fs-acc-item" data-key="libras" onclick="fs_accessibility.update('libras')">${icons.libra} ${lang.textToLibra}</div>
            </div>
            <div class="fs-acc-grid">
                ${config.customButtons.map(btn => `<div class="fs-acc-item" onclick="${btn.action}">${btn.icon} ${btn.label}</div>`).join('')}
            </div>
            <div style="padding: 20px; margin-top: auto;">
                <button class="fs-acc-item" style="width: 100%" onclick="fs_accessibility.reset()"> ${icons.reset} ${lang.reset} </button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function toggleModal() {
        document.getElementById('fs_acc_modal').classList.toggle('active');
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
        b.classList.toggle('fs-acc-cursor', state.bigCursor);

        // Ativar/Desativar
        if (state.libras) {
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

        // Marcar botões ativos no modal
        document.querySelectorAll('.fs-acc-item[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            el.classList.toggle('active', state[key]);
        });
    }

    function saveSettings() {
        localStorage.setItem(config.storageKey, JSON.stringify(state));
    }

    function loadSettings() {
        const saved = localStorage.getItem(config.storageKey);
        if (saved) state = JSON.parse(saved);
    }

    function reset() {
        state = { zoom: 100, fontReadable: false, contrast: false, grayscale: false, linksHighlight: false, imagesHighlight: false, noAnim: false, bigCursor: false, speech: false, libras: false };
        saveSettings();
        applyAll();
    }

    return { init, toggleModal, update, reset };
})();
