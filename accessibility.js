function check_stringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }

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
            magnifier: "Lupa de Tela".
            line: "Altura da Linha",
            space: "Espaçamento de Texto"
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
            magnifier: "Screen Magnifier".
            line: "Line Height",
            space: "Text Spacing"
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
        libra: `<svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.46088 12.8405L22.2354 9.06243C22.7542 8.95215 23.2956 9.05249 23.7405 9.34139L31.8394 14.6009C32.2842 14.8898 32.8256 14.9901 33.3445 14.8798L37.4249 14.0125C38.5053 13.7829 39.5674 14.4726 39.797 15.553L40.4207 18.4874C40.6504 19.5679 39.9607 20.6299 38.8803 20.8596L31.8654 22.3506C31.3466 22.4609 30.8052 22.3605 30.3603 22.0717L22.2614 16.8122C21.8165 16.5233 21.2751 16.4229 20.7563 16.5332L17.654 17.1926" stroke="none" stroke-width="4" stroke-linecap="round"/><path d="M43.5393 33.1596L25.7648 36.9377C25.246 37.048 24.7046 36.9476 24.2597 36.6587L16.1608 31.3992C15.7159 31.1103 15.1745 31.01 14.6557 31.1203L10.5753 31.9876C9.49486 32.2173 8.43282 31.5276 8.20317 30.4471L7.57943 27.5127C7.34978 26.4323 8.03947 25.3702 9.11991 25.1406L16.1348 23.6495C16.6536 23.5392 17.195 23.6396 17.6399 23.9285L25.7388 29.188C26.1836 29.4769 26.725 29.5772 27.2439 29.4669L30.3462 28.8075" stroke="none" stroke-width="4" stroke-linecap="round"/></svg>`,
        animation: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,13v8a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h8A1,1,0,0,1,22,13ZM7,6A1,1,0,0,0,6,7v9a1,1,0,0,0,1,1h3V10.5a.5.5,0,0,1,.5-.5H17V7a1,1,0,0,0-1-1ZM3,13H4V4.5A.5.5,0,0,1,4.5,4H13V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3v9A1,1,0,0,0,3,13Z"/></svg>`
    };

    let state = {
        zoom: 100,
        currentTela: false,
        currentTelaZ: false,
        fontReadable: false,
        contrast: false,
        grayscale: false,
        titleHighlight: false,
        linksHighlight: false,
        imagesHighlight: false,
        videosHighlight: false,
        iconsHighlight: false,
        buttonsHighlight: false,
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
            body.fs-acc-icons svg { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-buttons button { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-videos video { outline: 4px solid #2563eb !important; opacity: 0.8; }
            body.fs-acc-tela_z {   transform: scale(1.2);    transform-origin: left top;   }
            body.fs-acc-tela_d {   transform: scale(0.8);       transform-origin: center top;  }
            body.fs-acc-title h1, body.fs-acc-title h2, body.fs-acc-title h3 {  text-decoration: underline !important;  }
            body.fs-acc-cursor {  cursor: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOS4xODhweCIgaGVpZ2h0PSI0My42MjVweCIgdmlld0JveD0iMCAwIDI5LjE4OCA0My42MjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5LjE4OCA0My42MjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0Q5REFEOSIgc3Ryb2tlLXdpZHRoPSIxLjE0MDYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyLjgsNC41NDkgMjYuODQ3LDE5LjkwMiAxNi45NjQsMjIuNzAxIDI0LjIzOSwzNy43NDkgMTguMjc4LDQyLjAxNyA5Ljc0MSwzMC43MjQgMS4xMzgsMzUuODA5ICIvPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiMyMTI2MjciIGQ9Ik0yOS4xNzUsMjEuMTU1YzAuMDcxLTAuNjEzLTAuMTY1LTEuMjUzLTAuNjM1LTEuNTczTDIuMTY1LDAuMjU4Yy0wLjQyNC0wLjMyLTAuOTg4LTAuMzQ2LTEuNDM1LTAuMDUzQzAuMjgyLDAuNDk3LDAsMS4wMywwLDEuNjE3djM0LjE3MWMwLDAuNjEzLDAuMzA2LDEuMTQ2LDAuNzc2LDEuNDM5YzAuNDcxLDAuMjY3LDEuMDU5LDAuMjEzLDEuNDgyLTAuMTZsNy40ODItNi4zNDRsNi44NDcsMTIuMTU1YzAuMjU5LDAuNDgsMC43MjksMC43NDYsMS4yLDAuNzQ2YzAuMjM1LDAsMC40OTQtMC4wOCwwLjcwNi0wLjIxM2w2Ljk4OC00LjU4NWMwLjMyOS0wLjIxMywwLjU2NS0wLjU4NiwwLjY1OS0xLjAxM2MwLjA5NC0wLjQyNiwwLjAyNC0wLjg4LTAuMTg4LTEuMjI2bC02LjM3Ni0xMS4zODJsOC42MTEtMi43NDVDMjguNzA1LDIyLjI3NCwyOS4xMDUsMjEuNzY4LDI5LjE3NSwyMS4xNTV6IE0xNi45NjQsMjIuNzAxYy0wLjQyNCwwLjEzMy0wLjc3NiwwLjUwNi0wLjk0MSwwLjk2Yy0wLjE2NSwwLjQ4LTAuMTE4LDEuMDEzLDAuMTE4LDEuNDM5bDYuNTg4LDExLjc4MWwtNC41NDEsMi45ODVsLTYuODk0LTEyLjMxNWMtMC4yMTItMC4zNzMtMC41NDEtMC42NC0wLjk0MS0wLjcyYy0wLjA5NC0wLjAyNy0wLjE2NS0wLjAyNy0wLjI1OS0wLjAyN2MtMC4zMDYsMC0wLjU4OCwwLjEwNy0wLjg0NywwLjMyTDIuOCwzMi41OVY0LjU0OWwyMS41OTksMTUuODA2TDE2Ljk2NCwyMi43MDF6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=='), auto !important;   }
            body.fs-acc-cursor a:hover, body.fs-acc-cursor button:hover {   cursor: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAzLjA3OSAyMDMuMDc5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDMuMDc5IDIwMy4wNzk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTkyLjIzMSwxMDQuMDgyVjEwMmMwLTEyLjQwNy0xMC4wOTQtMjIuNS0yMi41LTIyLjVjLTIuODAyLDAtNS40ODQsMC41MTktNy45NjEsMS40NTkJQzE1OS42NjUsNzAuNzIyLDE1MC41ODMsNjMsMTM5LjczMSw2M2MtMi45NDcsMC01Ljc2LDAuNTc1LTguMzQxLDEuNjFDMTI4LjY2Nyw1NS4xNjIsMTE5LjYyNCw0OCwxMDkuMjMxLDQ4CWMtMi43OTgsMC01LjQ5NiwwLjU0MS04LDEuNTE2VjIyLjVjMC0xMi40MDctMTAuMDk0LTIyLjUtMjIuNS0yMi41cy0yMi41LDEwLjA5My0yMi41LDIyLjV2NjYuMjU5CWMtMy45MzgtNS4wMjktOC42NzMtOS40MTItMTQuMTY5LTExLjY3MWMtNi4xMzMtMi41Mi0xMi41ODctMi4yMTktMTguNjY3LDAuODcyYy0xMS4xODIsNS42ODYtMTUuNzkyLDE5LjM4OS0xMC4yNzcsMzAuNTQ4CWwyNy45NSw1Ni41NjNjMC43OSwxLjU1MiwxOS43MzEsMzguMDA4LDU0LjAyMywzOC4wMDhoNDBjMzEuNTQsMCw1Ny4xOTktMjUuNzk0LDU3LjE5OS01Ny41MDZsLTAuMDMxLTQxLjQ5MUgxOTIuMjMxegkgTTEzNS4wOTIsMTg4LjA3OWgtNDBjLTI0LjcwMiwwLTQwLjA5MS0yOC43MzgtNDAuNjQ2LTI5Ljc5NmwtMjcuODgtNTYuNDJjLTEuOTI0LTMuODkzLTAuMzMtOC41MTksMy42MjktMTAuNTMyCWMyLjE4Mi0xLjExLDQuMDgxLTEuMjIzLDYuMTU4LTAuMzcyYzguMjgxLDMuMzk1LDE2LjQxLDE5Ljc1NiwxOS41ODYsMjkuMjY1bDIuNDEsNy4yNTlsMTIuODgzLTQuNTU5VjIyLjUJYzAtNC4xMzYsMy4zNjQtNy41LDcuNS03LjVzNy41LDMuMzY0LDcuNSw3LjVWMTA5aDAuMTM2aDE0Ljg2NGgwLjEzNlY3MWMwLTQuMTg3LDMuNzQ4LTgsNy44NjQtOGM0LjI2MiwwLDgsMy41MDUsOCw3LjV2MTV2MjZoMTUJdi0yNmMwLTQuMTM2LDMuMzY0LTcuNSw3LjUtNy41czcuNSwzLjM2NCw3LjUsNy41VjEwMnYxNi41aDE1VjEwMmMwLTQuMTM2LDMuMzY0LTcuNSw3LjUtNy41czcuNSwzLjM2NCw3LjUsNy41djEwLjcyN2gwLjAzNQlsMC4wMjUsMzIuODUyQzE3Ny4yOTEsMTY5LjAxNCwxNTguMzYsMTg4LjA3OSwxMzUuMDkyLDE4OC4wNzl6Ii8+PC9zdmc+'), pointer !important;   }
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
                <div class="fs-acc-item" data-key="currentTela" onclick="fs_accessibility.update('currentTela')">${icons.tela_1} ${lang.currentTela}</div>
                <div class="fs-acc-item" data-key="currentTelaZ" onclick="fs_accessibility.update('currentTelaZ')">${icons.tela_2} ${lang.currentTelaZ}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" onclick="fs_accessibility.update('zoom', 10)">${icons.textPlus_1} ${lang.increaseText}</div>
                <div class="fs-acc-item" onclick="fs_accessibility.update('zoom', -10)">${icons.textPlus_2} ${lang.decreaseText}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="fontReadable" onclick="fs_accessibility.update('fontReadable')">${icons.textPlus_3} ${lang.readableFont}</div>
                <div class="fs-acc-item" data-key="titleHighlight" onclick="fs_accessibility.update('titleHighlight')">${icons.title} ${lang.textTitle}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="contrast" onclick="fs_accessibility.update('contrast')">${icons.contrast_1} ${lang.highContrast}</div>
                <div class="fs-acc-item" data-key="grayscale" onclick="fs_accessibility.update('grayscale')">${icons.contrast_2} ${lang.grayscale}</div>
            </div>
            <div class="fs-acc-grid">
                <div class="fs-acc-item" data-key="linksHighlight" onclick="fs_accessibility.update('linksHighlight')">${icons.link_1} ${lang.linksHighlight}</div>
                <div class="fs-acc-item" data-key="imagesHighlight" onclick="fs_accessibility.update('imagesHighlight')">${icons.link_2} ${lang.imagesHighlight}</div>
                <div class="fs-acc-item" data-key="videosHighlight" onclick="fs_accessibility.update('videosHighlight')">${icons.videos} ${lang.videosHighlight}</div>
                <div class="fs-acc-item" data-key="iconsHighlight" onclick="fs_accessibility.update('iconsHighlight')">${icons.icon} ${lang.iconsHighlight}</div>
                <div class="fs-acc-item" data-key="buttonsHighlight" onclick="fs_accessibility.update('buttonsHighlight')">${icons.button} ${lang.buttonsHighlight}</div>
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
            <hr/>  <div style="padding: 20px; margin-top: auto;">
                <button class="fs-acc-item" style="width: 100%" onclick="fs_accessibility.reset()"> ${icons.reset} ${lang.reset} </button>
            </div>  <br/>  
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
        b.classList.toggle('fs-acc-videos', state.videosHighlight);
        b.classList.toggle('fs-acc-buttons', state.buttonsHighlight);
        b.classList.toggle('fs-acc-icons', state.iconsHighlight);
        b.classList.toggle('fs-acc-cursor', state.bigCursor);
        b.classList.toggle('fs-acc-tela_z', state.currentTela);
        b.classList.toggle('fs-acc-tela_d', state.currentTelaZ);
        b.classList.toggle('fs-acc-title', state.titleHighlight);
        
        // Ativar/Desativar
        
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
        state = { currentTela: false, currentTelaZ: false, zoom: 100, fontReadable: false, contrast: false, grayscale: false, titleHighlight: false, linksHighlight: false, imagesHighlight: false, noAnim: false, bigCursor: false, speech: false, libras: false, videosHighlight: false, iconsHighlight: false, buttonsHighlight: false };
        saveSettings();
        applyAll();
    }

    return { init, toggleModal, update, reset };
})();
