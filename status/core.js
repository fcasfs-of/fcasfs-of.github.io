       const statusesOptions = ['online', 'offline', 'maintenance'];

   const container = document.getElementById('statusContainer');

    function renderStatuses() {   if(container && statuses && statusesOptions){
      container.innerHTML = ''; 
      statuses.forEach((item) => {
      if(item){
        const card = document.createElement('div');
        card.className = 'status-card';

        const iconWrapper = document.createElement('div');
        iconWrapper.innerHTML = item.icon;

        const title = document.createElement('div');
        title.className = 'status-title';
        title.textContent = item.title;

        const statusText = document.createElement('div');
        statusText.className = `status ${statusesOptions[item.status]}`;
        
        let statusLabel = '';
        switch (statusesOptions[item.status]) {
          case 'online':
            statusLabel = 'Online';
            break;
          case 'offline':
            statusLabel = 'Offline';
            break;
          case 'maintenance':
            statusLabel = 'Maintenance';
            break;
          default:
            statusLabel = 'Unknown';
        }
        statusText.textContent = statusLabel;

        card.appendChild(iconWrapper);
        card.appendChild(title);
        card.appendChild(statusText);

        container.appendChild(card);
     }  });    }
    }



function is_renderStatuses() {    var is_renderStatusesdf="";
 if(statuses && statusesOptions){      
      statuses.forEach((item) => {
      if(item){
        is_renderStatusesdf=is_renderStatusesdf+'<div class="status-card">';
       is_renderStatusesdf=is_renderStatusesdf+'<div>'+ item.icon+'</div>';
       is_renderStatusesdf=is_renderStatusesdf+'<div class="status-title">'+ item.title+'</div>';
        let statusLabel = '';
        switch (statusesOptions[item.status]) {
          case 'online':
            statusLabel = 'Online';
            break;
          case 'offline':
            statusLabel = 'Offline';
            break;
          case 'maintenance':
            statusLabel = 'Maintenance';
            break;
          default:
            statusLabel = 'Unknown';
        }
       is_renderStatusesdf=is_renderStatusesdf+'<div class="status '+statusesOptions[item.status]+'">'+statusLabel+'</div>';
        is_renderStatusesdf=is_renderStatusesdf+'</div>';
     }  });     is_renderStatusesdf=is_renderStatusesdf+'<br/><br/>';   }
return is_renderStatusesdf;    }




const Incidente_TRADUCOES = {
    pt: {
        titulo: "Incidente com",
        investigando: "Investigando",
        atualizacao: "Atualização",
        identificado: "Identificado",
        monitorando: "Monitorando",
        resolvido: "Resolvido"
    },
    en: {
        titulo: "Incident with",
        investigando: "Investigating",
        atualizacao: "Update",
        identificado: "Identified",
        monitorando: "Monitoring",
        resolvido: "Resolved"
    }
};

const Incidente_ICONES_SVG = {
    alertaPrincipal: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    investigando: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    atualizacao: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 5h2M11 9h4M11 13h2M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>',
    identificado: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 0 7.94-7.94l-3.76 3.76z"/></svg>',
    monitorando: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    resolvido: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
};

const Incidente_estiloCSS = `
    :root {
        --bg-color: #fff;
        --card-bg: #11151c;
        --border-color: #21262d;
        --text-main: #e6edf3;
        --text-muted: #7d8590;
        --color-investigando: #f0883e;
        --color-atualizacao: #58a6ff;
        --color-identificado: #ff7b72;
        --color-monitorando: #d29922;
        --color-resolvido: #3fb950;
    }

   .incident-container {   user-select:none;  overflow:auto;
        background-color: var(--bg-color);
        color: var(--text-main);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        padding: 3rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;
        margin: 0;

    }

    .incident-card {     overflow:auto;
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 1.75rem;
        box-shadow: 0 8px 24px rgba(0,0,0,0.6);
    }

    .incident-header {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1.25rem;
        margin-bottom: 1.75rem;
        color: #ff7b72;
    }

    .incident-title {
        font-size: 1.35rem;
        font-weight: 600;
        letter-spacing: -0.25px;
    }

    .updates-list {
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
    }

    .update-item {
        display: flex;
        gap: 1.25rem;
        position: relative;
    }

    .update-item:not(:last-child)::after {
        content: '';
        position: absolute;
        left: 10px;
        top: 26px;
        bottom: -22px;
        width: 2px;
        background-color: var(--border-color);
    }

    .update-icon {
        margin-top: 3px;
        flex-shrink: 0;
        z-index: 1;
        background: var(--card-bg);
        display: inline-flex;
    }

    .update-content {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .update-text {
        font-size: 0.98rem;
        line-height: 1.6;
    }

    .update-status {
        font-weight: 600;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .status-investigando { color: var(--color-investigando); }
    .status-atualizacao { color: var(--color-atualizacao); }
    .status-identificado { color: var(--color-identificado); }
    .status-monitorando { color: var(--color-monitorando); }
    .status-resolvido { color: var(--color-resolvido); }

    .update-time {
        font-size: 0.85rem;
        color: var(--text-muted);
    }

    @media (max-width: 480px) {
        .incident-card { padding: 1.25rem; }
        .update-item::after { display: none; }
    }
`;


function gerarTemplateIncidente(nome="", lista=[], idDoContainer, idioma="pt") {
    const lang = (idioma === 'en' || idioma === 'pt') ? idioma : 'pt';
    const textos = Incidente_TRADUCOES[lang];

    const Incidente_executarGeral = function() {
        let container = null;

        if (idDoContainer) {
            container = document.getElementById(idDoContainer);
        }

        if (!container) {
            container = document.createElement('div');
            container.id = idDoContainer || 'incident-container-' + Math.floor(Math.random() * 1000);
            container.className = 'incident-container';
            document.body.appendChild(container);
        }

        const itensHTML = lista.map(function(item) {
            let iconeEscolhido = Incidente_ICONES_SVG[item.tipo] || Incidente_ICONES_SVG.atualizacao;
            const classeStatus = 'status-' + item.tipo;
            
            const statusTraduzido = textos[item.tipo] || item.status;
            const mensagemFinal = item.mensagem[lang] || item.mensagem;

            return `
                <div class="update-item">
                    <div class="update-icon ${classeStatus}">
                        ${iconeEscolhido}
                    </div>
                    <div class="update-content">
                        <div class="update-text">
                            <span class="update-status ${classeStatus}">${statusTraduzido}</span> - ${mensagemFinal}
                        </div>
                        <div class="update-time">${item.dataHora}</div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="incident-card">
                <div class="incident-header">
                    ${Incidente_ICONES_SVG.alertaPrincipal}
                    <h1 class="incident-title">${textos.titulo} '${nome}'</h1>
                </div>
                <div class="updates-list">
                    ${itensHTML}
                </div>
            </div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', Incidente_executarGeral);
    } else {
        Incidente_executarGeral();
    }
}




    const icons_status = {
        server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
        database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
        api: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`,
        storage: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
        admin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
        cdn: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    };

    const translations_staty = {
        pt: {
            title: "Status do Sistema",
            subtitle: "Acompanhe a estabilidade da nossa infraestrutura em tempo real.",
            noData: "Nenhum dado disponível.",
            operational: "Operacional",
            degraded: "Instabilidade",
            maintenance: "Manutenção",
            down: "Fora do Ar",
            bannerOperational: "Todos os sistemas estão operacionais",
            bannerDegraded: "Alguns sistemas estão instáveis",
            bannerMaintenance: "Realizando manutenção programada",
            bannerDown: "Estamos enfrentando interrupções no serviço"
        },
        en: {
            title: "System Status",
            subtitle: "Monitor the stability of our infrastructure in real time.",
            noData: "No data available.",
            operational: "Operational",
            degraded: "Degraded Performance",
            maintenance: "Maintenance",
            down: "Major Outage",
            bannerOperational: "All systems are operational",
            bannerDegraded: "Some systems are experiencing instability",
            bannerMaintenance: "Undergoing scheduled maintenance",
            bannerDown: "We are experiencing service interruptions"
        }
    };

    const statusIcons = {
        operational: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
        degraded: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
        maintenance: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
        down: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`
    };


    function injectRequiredCSS() {
        if (document.getElementById("dynamic-status-styles")) return;
        const styleTag = document.createElement("style");
        styleTag.id = "dynamic-status-styles";
        styleTag.textContent = `
        ${Incidente_estiloCSS}
        
           :root {
                --bg-color: #f8fafc; --card-bg: #ffffff; --text-main: #0f172a;
                --text-muted: #64748b; --border-color: #e2e8f0;
                --color-operational: #10b981; --color-degraded: #f59e0b;
                --color-maintenance: #3b82f6; --color-down: #ef4444;
            }
            .status-container-wrapper { font-family: system-ui, -apple-system, sans-serif; background-color: var(--bg-color); color: var(--text-main); margin: 0;   }
            .status-header-title { text-align: center; margin-bottom: 32px; }
            .status-header-title h1 { font-size: 24px; margin-bottom: 8px; margin-top: 0; }
            .status-banner { background: var(--card-bg); padding: 20px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 16px; margin-bottom: 24px; font-size: 18px; font-weight: 600; transition: all 0.3s ease; }
            .status-banner.operational { border-left: 6px solid var(--color-operational); color: var(--color-operational); }
            .status-banner.degraded { border-left: 6px solid var(--color-degraded); color: var(--color-degraded); }
            .status-banner.maintenance { border-left: 6px solid var(--color-maintenance); color: var(--color-maintenance); }
            .status-banner.down { border-left: 6px solid var(--color-down); color: var(--color-down); }
            .components-list { background: var(--card-bg); border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); border: 1px solid var(--border-color); padding: 8px 0; margin-bottom: 24px; }
            .component-item { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid var(--border-color); }
            .component-item:last-child { border-bottom: none; }
            .component-info { display: flex; align-items: center; gap: 12px; }
            .component-icon { color: var(--text-muted); display: flex; align-items: center; }
            .component-name { font-weight: 500; }
            .component-status { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; }
            .txt-operational { color: var(--color-operational); }
            .txt-degraded { color: var(--color-degraded); }
            .txt-maintenance { color: var(--color-maintenance); }
            .txt-down { color: var(--color-down); }
            .status-legend { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; font-size: 12px; color: var(--text-muted); margin-top: 32px; }
            .legend-item { display: flex; align-items: center; gap: 6px; }
            .status-container-wrapper svg { flex-shrink: 0; }
        `;
        document.head.appendChild(styleTag);
    }


    function renderStatusPage(componentsList, targetId = null, lang = 'pt') {
        injectRequiredCSS();

       const t = translations_staty[lang] || translations_staty['pt'];
        let rootElement;

        if (targetId) {
            rootElement = document.getElementById(targetId);
        } else {
            let autoContainer = document.getElementById("auto-status-container");
            if (!autoContainer) {
                autoContainer = document.createElement("div");
                autoContainer.id = "auto-status-container";
                document.body.appendChild(autoContainer);
            }
            rootElement = autoContainer;
        }

        rootElement.className = "status-container-wrapper";

        if (!componentsList || componentsList.length === 0) {
            rootElement.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">${t.noData}</p>`;
            return;
        }

        let globalStatus = "operational";
        let itemsHtml = "";

        componentsList.forEach(comp => {
            const statusText = t[comp.status] || t['down'];
            const statusIcon = statusIcons[comp.status] || statusIcons['down'];
            const typeIcon = icons_status[comp.type] || icons_status['server'];
            
            if (comp.status === "down") globalStatus = "down";
            else if (comp.status === "degraded" && globalStatus !== "down") globalStatus = "degraded";
            else if (comp.status === "maintenance" && globalStatus !== "down" && globalStatus !== "degraded") globalStatus = "maintenance";

            const displayName = (typeof comp.name === 'object') ? (comp.name[lang] || comp.name['pt']) : comp.name;

            itemsHtml += `
                <div class="component-item">
                    <div class="component-info">
                        <span class="component-icon">${typeIcon}</span>
                        <span class="component-name">${displayName}</span>
                    </div>
                    <span class="component-status txt-${comp.status}">
                        ${statusIcon}
                        ${statusText}
                    </span>
                </div>
            `;
        });

        let bannerText = "";
        if (globalStatus === "operational") bannerText = `${statusIcons.operational} ${t.bannerOperational}`;
        else if (globalStatus === "degraded") bannerText = `${statusIcons.degraded} ${t.bannerDegraded}`;
        else if (globalStatus === "maintenance") bannerText = `${statusIcons.maintenance} ${t.bannerMaintenance}`;
        else bannerText = `${statusIcons.down} ${t.bannerDown}`;

        rootElement.innerHTML = `
            <div class="status-header-title">
                <h1>${t.title}</h1>
                <p style="color: var(--text-muted); margin: 0;">${t.subtitle}</p>
            </div>
            <div class="status-banner ${globalStatus}">${bannerText}</div>
            <div class="components-list">${itemsHtml}</div>
            <div class="status-legend">
                <div class="legend-item"><span class="txt-operational">●</span> ${t.operational}</div>
                <div class="legend-item"><span class="txt-degraded">●</span> ${t.degraded}</div>
                <div class="legend-item"><span class="txt-maintenance">●</span> ${t.maintenance}</div>
                <div class="legend-item"><span class="txt-down">●</span> ${t.down}</div>
            </div>  <br/><br/> <div id="incidenteStatus"></div><br/><br/>
        `;
           if(incidenteSSite){  if(incidenteSSite.list && incidenteSSite[lang].text && incidenteSSite[lang].text!=""){   gerarTemplateIncidente(incidenteSSite[lang].text, incidenteSSite.list, "incidenteStatus", lang);   }   }
    }



