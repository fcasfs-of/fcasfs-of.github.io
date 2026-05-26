const incidenteSSite = { 
        en:{ text: "Main WebSite" },
        pt:{ text: "Site Principal" },
        list:[
        {
        status: "Monitorando",
        mensagem: {
            pt: "O site principal voltou a carregar após a correção nos servidores. Seguimos acompanhando os acessos.",
            en: "The main website is loading normally following a fix on the servers. We continue monitoring traffic."
        },
        dataHora: "26 de maio de 2026 - 10:35 UTC",
        tipo: "monitorando"
    },
    {
        status: "Investigando",
        mensagem: {
            pt: "Estamos investigando relatos de lentidão extrema e erro 502 ao tentar acessar o site principal.",
            en: "We are investigating reports of extreme slowness and 502 errors when trying to access our main website."
        },
        dataHora: "26 de maio de 2026 - 10:10 UTC",
        tipo: "investigando"
    }
]  
};


const meusSistemas = [
        { 
            name: { pt: "Servidor Web Principal", en: "Main Web Server" }, 
            type: "server", 
            status: "operational" 
        },
        { 
            name: { pt: "Banco de Dados", en: "Database Cluster" }, 
            type: "database", 
            status: "maintenance" 
        },
        { 
            name: { pt: "APIs Externas", en: "External APIs" }, 
            type: "api", 
            status: "maintenance" 
        },
        { 
            name: { pt: "Rede de Distribuição (CDN)", en: "Content Delivery Network (CDN)" }, 
            type: "cdn", 
            status: "operational" 
        }
    ];

