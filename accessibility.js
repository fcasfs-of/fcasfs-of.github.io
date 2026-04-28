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
        contrast: `<svg viewBox="0 0 24 24"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.83c3.57.44 6.39 3.26 6.83 6.83h-6.83V4.17z"/></svg>`,
        reset: `<svg viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`,
        animation: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>`
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
        speech: false
    };

    function init(options = {}) {
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
                <div class="fs-acc-item" data-key="contrast" onclick="fs_accessibility.update('contrast')">${icons.contrast} ${lang.highContrast}</div>
                <div class="fs-acc-item" data-key="grayscale" onclick="fs_accessibility.update('grayscale')">${icons.contrast} ${lang.grayscale}</div>
                <div class="fs-acc-item" data-key="linksHighlight" onclick="fs_accessibility.update('linksHighlight')">${icons.animation} ${lang.linksHighlight}</div>
                <div class="fs-acc-item" data-key="imagesHighlight" onclick="fs_accessibility.update('imagesHighlight')">${icons.animation} ${lang.imagesHighlight}</div>
                <div class="fs-acc-item" data-key="noAnim" onclick="fs_accessibility.update('noAnim')">${icons.animation} ${lang.stopAnimations}</div>
                <div class="fs-acc-item" data-key="bigCursor" onclick="fs_accessibility.update('bigCursor')">${icons.main} ${lang.bigCursor}</div>
                <div class="fs-acc-item" data-key="speech" onclick="fs_accessibility.update('speech')">${icons.main} ${lang.textToSpeech}</div>
                ${config.customButtons.map(btn => `<div class="fs-acc-item" onclick="${btn.action}">${btn.icon} ${btn.label}</div>`).join('')}
            </div>
            <div style="padding: 20px; margin-top: auto;">
                <button class="fs-acc-item" style="width: 100%" onclick="fs_accessibility.reset()">
                    ${icons.reset} ${lang.reset}
                </button>
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

        // Ativar/Desativar Voz
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
        state = { zoom: 100, fontReadable: false, contrast: false, grayscale: false, linksHighlight: false, imagesHighlight: false, noAnim: false, bigCursor: false, speech: false };
        saveSettings();
        applyAll();
    }

    return { init, toggleModal, update, reset };
})();
