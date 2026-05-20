

var set_itend_cd={

mural:{
en:[
{  alvo: '.container .hero',  mensagem: "New look, same core. <br/> I’ve redesigned my digital space to highlight what truly matters: impactful projects. <br/> Explore the new experience.",  tipo: 'info',  exibirBotaoFechar:false,  fixo: true, duration: 1400 }
],
pt:[
{  alvo: '.container .hero',  mensagem: "Novo visual, mesma essência. <br/> Redesenhei meu espaço digital para destacar o que realmente importa: projetos de impacto. <br/> Explore a nova experiência.",  tipo: 'info',  exibirBotaoFechar:false,  fixo: true, duration: 1400  }
]
},
download:{
en:[
{ separate:true, info:{pos:"left",text:"App",color:"green", type:"d"}, icon:'<img src="/Icon/mdpl.png"/>',title:'Player: PDF, Audio, Imagem and Video ',desc:"Our innovative player recognizes your PDF files, videos, audio, and images. ", links:[{type:"a",link:"https://apkpure.com/fcas-tech-player/fcas.techplayer/download",text:"Android", icon:'android'},{type:"a",link:"/TECH-Free/downloads/TechPlayer-English.zip",text:"Windows", icon:'windows', disable: true }  ]}
],
pt:[
{ separate:true, info:{pos:"left",text:"App",color:"green", type:"d"}, icon:'<img src="/Icon/mdpl.png"/>',title:'Player: PDF, Audio, Imagem e Video ',desc:"Nosso player inovador reconhece seus arquivos PDF, vídeos, áudios e imagens. ", links:[{type:"a",link:"https://apkpure.com/fcas-tech-player/fcas.techplayer/download",text:"Android", icon:'android'},{type:"a",link:"/TECH-Free/downloads/TechPlayer-Portugues.zip",text:"Windows", icon:'windows', disable:true }  ]}
]
},
sidebar:{
en:[
     { label: 'Docs', desc: 'A modern, responsive, and standalone document manager and viewer.  ', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>', onClick: function(){  location.href="/docs/en"; } },
     { separate:true }, 
     { label: 'Notifications', desc: 'Notification Areas: Stay up-to-date with Important Notices, Alerts, Reminders, Messages, Security, Support, News, Updates, Recommendations, and Maintenance.  <span id="dnotify" style="display:none;"></span>', icon: '<svg width="24px" height="24px" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 448 512" xml:space="preserve"><g>	<path d="M222.987,510c31.418,0,57.529-22.646,62.949-52.5H160.038C165.458,487.354,191.569,510,222.987,510z"/>	<path d="M432.871,352.059c-22.25-22.25-49.884-32.941-49.884-141.059c0-79.394-57.831-145.269-133.663-157.83h-4.141c4.833-5.322,7.779-12.389,7.779-20.145c0-16.555-13.42-29.975-29.975-29.975s-29.975,13.42-29.975,29.975c0,7.755,2.946,14.823,7.779,20.145h-4.141C120.818,65.731,62.987,131.606,62.987,211c0,108.118-27.643,118.809-49.893,141.059C-17.055,382.208,4.312,434,47.035,434H398.93C441.568,434,463.081,382.269,432.871,352.059z"/></g></svg>', onClick: function(){  if(document.getElementById("dnotify")){  document.getElementById("dnotify").click();  } } },
     { separate:true }, 
     { label: 'SiteMap', desc: 'Explore our areas and pages to learn about our services, products, and essential information. Navigate through the subdomains to access specific content and stay well-informed.   <span id="sidebar-map" style="display:none;"></span>', icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4h4v4h-4zm0 12h4v4h-4zm-8 0h4v4H2zm16 0h4v4h-4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v-4m0 0h6a2 2 0 0 1 2 2v2m-8-4H6a2 2 0 0 0-2 2v2"/></svg>', onClick: function(){  if(document.getElementById("sidebar-map")){  document.getElementById("sidebar-map").click();  } } },
     { separate:true }, 
     { label: 'Blog', desc: 'Follow us here for the latest news and updates on our projects, keeping you informed and connected.  ', icon: '<svg width="24px" height="24px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14 5h-14v-2h14v2zM0 6v1h17v-1h-17zM14 10h-14v2h14v-2zM0 14h17v-1h-17v1z" /></svg>', onClick: function(){  location.href="/blog/en"; } },
     { separate:true }, 
     { label: 'Chat', desc: 'Chat area: an interactive space to chat, ask questions, and share information in real time.  ', icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>', onClick: function(){   if(document.querySelector(".fs-acc-btnch")){  document.querySelector(".fs-acc-btnch").click();  }  } },
     { label: 'Accessibility', desc: 'Accessibility Area: Resources and options to ensure easy and inclusive use of our website by all users.  ', icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>', onClick: function(){   if(document.querySelector(".fs-acc-btn")){  document.querySelector(".fs-acc-btn").click();  }  } },
     { separate:true }, 
     { label: 'Status', desc: 'Stay informed about how the system works.  <span id="statusu" style="display:none;"></span>', icon: '<svg width="24px" height="24px" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="3" transform="translate(52 27.52) rotate(180)" width="6" x="23" y="10.76"/><path d="M27,41.24a2,2,0,0,1-2-2v-13H23a2,2,0,0,1,0-4h4a2,2,0,0,1,2,2v15A2,2,0,0,1,27,41.24Z"/><path d="M26,52A26,26,0,1,1,52,26,26,26,0,0,1,26,52ZM26,4A22,22,0,1,0,48,26,22,22,0,0,0,26,4Z"/></svg>', onClick: function(){   if(document.getElementById("statusu")){  document.getElementById("statusu").click();  } }  }
   ],
pt:[
     { label: 'Docs', desc: 'Um gerenciador e visualizador de documentos moderno, responsivo e autônomo.  ', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>', onClick: function(){  location.href="/docs"; } },
     { separate:true }, 
     { label: 'Notificações', desc: 'Áreas de Notificações: mantenha-se atualizado com Avisos Importantes, Alertas, Lembretes, Mensagens, Segurança, Suporte, Novidades, Atualizações, Recomendações e Manutenção.  <span id="dnotify" style="display:none;"></span>', icon: '<svg width="24px" height="24px" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 448 512" xml:space="preserve"><g>	<path d="M222.987,510c31.418,0,57.529-22.646,62.949-52.5H160.038C165.458,487.354,191.569,510,222.987,510z"/>	<path d="M432.871,352.059c-22.25-22.25-49.884-32.941-49.884-141.059c0-79.394-57.831-145.269-133.663-157.83h-4.141c4.833-5.322,7.779-12.389,7.779-20.145c0-16.555-13.42-29.975-29.975-29.975s-29.975,13.42-29.975,29.975c0,7.755,2.946,14.823,7.779,20.145h-4.141C120.818,65.731,62.987,131.606,62.987,211c0,108.118-27.643,118.809-49.893,141.059C-17.055,382.208,4.312,434,47.035,434H398.93C441.568,434,463.081,382.269,432.871,352.059z"/></g></svg>', onClick: function(){  if(document.getElementById("dnotify")){  document.getElementById("dnotify").click();  } } },
     { separate:true }, 
     { label: 'SiteMap', desc: 'Explore nossas áreas e páginas para conhecer nossos serviços, produtos e informações essenciais. Navegue pelos subdomínios para acessar conteúdos específicos e manter-se bem informado.  <span id="sidebar-map" style="display:none;"></span>', icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4h4v4h-4zm0 12h4v4h-4zm-8 0h4v4H2zm16 0h4v4h-4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v-4m0 0h6a2 2 0 0 1 2 2v2m-8-4H6a2 2 0 0 0-2 2v2"/></svg>', onClick: function(){  if(document.getElementById("sidebar-map")){  document.getElementById("sidebar-map").click();  } } },
     { separate:true }, 
     { label: 'Blog', desc: 'Acompanhe aqui as últimas novidades e atualizações dos nossos projetos, mantendo você sempre informado e conectado.  ', icon: '<svg width="24px" height="24px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M14 5h-14v-2h14v2zM0 6v1h17v-1h-17zM14 10h-14v2h14v-2zM0 14h17v-1h-17v1z" /></svg>', onClick: function(){  location.href="/blog"; } },
     { separate:true }, 
     { label: 'Chat', desc: 'Área do chat: um espaço interativo para conversar, tirar dúvidas e compartilhar informações em tempo real.  ', icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>', onClick: function(){   if(document.querySelector(".fs-acc-btnch")){  document.querySelector(".fs-acc-btnch").click();  }  } },
     { label: 'Acessibilidade', desc: 'Área de Acessibilidade: Recursos e opções para garantir uso fácil e inclusivo do nosso site por todos os usuários.  ', icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>', onClick: function(){   if(document.querySelector(".fs-acc-btn")){  document.querySelector(".fs-acc-btn").click();  }  } },
     { separate:true }, 
     { label: 'Status', desc: 'Mantenha-se informado sobre o funcionamento do sistema.  <span id="statusu" style="display:none;"></span>', icon: '<svg width="24px" height="24px" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="3" transform="translate(52 27.52) rotate(180)" width="6" x="23" y="10.76"/><path d="M27,41.24a2,2,0,0,1-2-2v-13H23a2,2,0,0,1,0-4h4a2,2,0,0,1,2,2v15A2,2,0,0,1,27,41.24Z"/><path d="M26,52A26,26,0,1,1,52,26,26,26,0,0,1,26,52ZM26,4A22,22,0,1,0,48,26,22,22,0,0,0,26,4Z"/></svg>', onClick: function(){   if(document.getElementById("statusu")){  document.getElementById("statusu").click();  } }  }
   ]
},
project:{
en:[
{ separate:true, new:{type:"blue"}, info:{pos:"right",text:"Web",color:"blue", type:"d"}, icon:'<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent); filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));">                <path d="M12 2v20M17 5v14M22 9v6M7 7v10M2 10v4"/>            </svg>',title:"AudioMeta Pro",desc:'This page is an "MP3 file metadata extractor". <br/><br/> It allows you to: <br/>- Load a local MP3 file (by dragging or clicking to browse). <br/>- Enter a URL of an online audio file to load it. <br/>- View information such as title, artist, album, year, genre, track, lyrics, and technical properties (bitrate, frequency, channels). <br/>- View the featured album art. <br/>- Download the extracted data to a file. <br/>- Switch between light/dark themes and languages ​​(PT/EN).', links:[{type:"a",link:"/mp3_mp/",text:"Visit the Page", icon:'page'} ]},
{ separate:true, new:{type:"blue"}, info:{pos:"right",text:"Web",color:"blue", type:"d"}, icon:'<svg viewBox="0 0 24 24" width="26" height="26" fill="none" style="color: var(--accent); filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));">      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM12 14L9.75 11l-1.5 2L7 10l-3 4h14l-3-4-3 4z"/>         </svg>',title:"MP4 Quality Analyzer",desc:'Professional MP4 quality analyzer for technical diagnostics. <br/> Performs full video and audio analysis, with options to save thumbnails and diagnostic reports.', links:[{type:"a",link:"/mp4_qa/",text:"Visit the Page", icon:'page'} ]},
{ separate:true, info:{pos:"left",text:"Web",color:"blue", type:"d"}, icon:'<img src="/Icon/mdpl.png"/>',title:'Player: PDF, Audio, Imagem and Video  <span id="versionplayer"></span>',desc:"Our player offers an immersive and intuitive media experience designed to meet all your digital entertainment needs. <br/>With a modern and functional design, it allows you to play, pause and control your favorite tracks and videos with ease. ", links:[{type:"a",link:"https://fcasfs-of.cloud-fs.net/player/search",text:"Search Page", icon:'page'}, {type:"a",link:"/TECH-Free/en",text:"Access Website", icon:'site'},{type:"a",link:"/TECH-Free/support-en",text:"Visit the Support Page", icon:'page'},{type:"button",id:"prev2",text:"View Preview", icon:'preview'} ]},
{ separate:true, info:{pos:"left",text:"Web",color:"blue", type:"d"}, icon:'<img src="/Icon/lightbox1.png"/>',title:'LightBox: Text, Link, Video, Image and Audio   <span id="versionlightbox"></span>',desc:"Lightbox is an innovative app that offers an integrated experience for viewing and interacting with text, links, images, audio, and videos in an intuitive and modern way. <br/>With a clean and responsive interface, the app allows users to explore multimedia content efficiently, providing fluid and engaging navigation. ", links:[{type:"a",link:"/TECH-LightBox/en",text:"Access Website", icon:'site'},{type:"button",id:"prev3",text:"View Preview", icon:'preview', icon:'preview'} ]},
{ separate:true, info:{pos:"right",text:"Web",color:"blue", type:"d"}, icon:'<img src="/Icon/1000040667.png"/>',title:'Sidebar Navigation   <span id="versionsidebar"></span>',desc:"The Sidebar Navigation web application offers a customizable and intuitive solution for improving website navigation. <br/> It allows you to adjust the visual appearance with light and dark themes, and offers flexible positioning options (left, right, center, or full screen). <br/> Easy to configure and compatible with various projects, it's ideal for creating modern, functional, and personalized interfaces. ", links:[{type:"a",link:"/TECH-SideBar/",text:"Access Website", icon:'site'} ]},
{ separate:true, disable:false, tip:{pos:"top",visible:true,text:"In Development"}, info:{pos:"right",text:"Windows",color:"disabled", type:"d"}, remove_efect:true, icon:'<img src="/Icon/i-app.png"/>',title:'Search Files in Folders   <span id="versionlfoldfdf"></span>',desc:"The app allows selecting a folder, choosing the file format, entering text, and searching files in the folder. ", links:[{type:"a",link:"/Search-Files-in-Folders/",disable:true,text:"Access Website", icon:'site'},{type:"button",id:"prev1",text:"Screenshot", icon:'preview'} ]},
],
pt:[
{ separate:true, new:{type:"blue"}, info:{pos:"right",text:"Web",color:"blue", type:"d"}, icon:'<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent); filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));">                <path d="M12 2v20M17 5v14M22 9v6M7 7v10M2 10v4"/>            </svg>',title:"AudioMeta Pro",desc:'Esta página é um "extrator de metadados de arquivos MP3".  <br/><br/>Ela permite que você: <br/>- "Carregue um arquivo MP3" local (arrastando ou clicando para buscar).<br/>- "Insira uma URL" de um áudio online para carregá-lo.<br/>- "Visualize informações" como título, artista, álbum, ano, gênero, faixa, letras e propriedades técnicas (taxa de bits, frequência, canais).<br/>- "Veja a capa do álbum" (cover art) em destaque.<br/>- "Baixe os dados extraídos" em um arquivo.<br/>- "Alterne entre temas claro/escuro" e "idiomas (PT/EN)".', links:[{type:"a",link:"/mp3_mp/",text:"Visite a Página", icon:'page'} ]},
{ separate:true, new:{type:"blue"}, info:{pos:"right",text:"Web",color:"blue", type:"d"}, icon:'<svg viewBox="0 0 24 24" width="26" height="26" fill="none" style="color: var(--accent); filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));">      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM12 14L9.75 11l-1.5 2L7 10l-3 4h14l-3-4-3 4z"/>         </svg>',title:"Analisador de Qualidade MP4",desc:'Analisador profissional de qualidade técnica para arquivos MP4. <br/> Realiza diagnóstico completo de vídeo e áudio, com opções para salvar miniatura e relatório detalhado.', links:[{type:"a",link:"/mp4_qa/",text:"Visite a Página", icon:'page'} ]},
{ separate:true, info:{pos:"left",text:"Web",color:"blue", type:"d"}, icon:'<img src="/Icon/mdpl.png"/>',title:'Player: PDF, Audio, Imagem e Video  <span id="versionplayer"></span>',desc:"Nosso player oferece uma experiência de mídia imersiva e intuitiva, projetada para atender a todas as suas necessidades de entretenimento digital. <br/>Com um design moderno e funcional, ele permite que você reproduza, pause e controle suas faixas e vídeos favoritos com facilidade.  ", links:[{type:"a",link:"https://fcasfs-of.cloud-fs.net/player/search",text:"Página de Busca", icon:'page'}, {type:"a",link:"/TECH-Free/",text:"Acesse o Site", icon:'site'},{type:"a",link:"/TECH-Free/support-br",text:"Visite a Página de Suporte", icon:'page'},{type:"button",id:"prev2",text:"Ver Pré-visualização", icon:'preview'} ]},
{ separate:true, info:{pos:"left",text:"Web",color:"blue", type:"d"}, icon:'<img src="/Icon/lightbox1.png"/>',title:'LightBox: Texto, Link, Video, Imagem e Audio   <span id="versionlightbox"></span>',desc:"Lightbox é inovador que oferece uma experiência integrada para visualizar e interagir com textos, links, imagens, áudios e vídeos de forma intuitiva e moderna. <br/>Com uma interface limpa e responsiva, o aplicativo permite aos usuários explorar conteúdos multimídia de maneira eficiente, proporcionando uma navegação fluida e envolvente. ", links:[{type:"a",link:"/TECH-LightBox/",text:"Acesse o Site", icon:'site'},{type:"button",id:"prev3",text:"Ver Pré-visualização", icon:'preview', icon:'preview'} ]},
{ separate:true, info:{pos:"right",text:"Web",color:"blue", type:"d"}, icon:'<img src="/Icon/1000040667.png"/>',title:'Sidebar Navigation   <span id="versionsidebar"></span>',desc:"O aplicativo web de Sidebar Navigation oferece uma solução personalizável e intuitiva para melhorar a navegação de sites. <br/> Ele permite ajustar o visual com temas claro e escuro, além de oferecer opções de posicionamento flexíveis (lateral esquerda, direita, centro ou tela cheia). <br/> Fácil de configurar e compatível com diversos projetos, é ideal para criar interfaces modernas, funcionais e personalizadas. ", links:[{type:"a",link:"/TECH-SideBar/",text:"Acesse o Site", icon:'site'} ]},
{ separate:true, disable:false, tip:{pos:"top",visible:true,text:"Em Desenvolvimento"}, info:{pos:"right",text:"Windows",color:"disabled", type:"d"}, remove_efect:true, icon:'<img src="/Icon/i-app.png"/>',title:'Buscar Arquivo em Pastas   <span id="versionlfoldfdf"></span>',desc:"O aplicativo permite selecionar uma pasta, escolher o formato do arquivo, inserir um texto e buscar os arquivos correspondentes na pasta. ", links:[{type:"a",link:"/Search-Files-in-Folders/",disable:true,text:"Acesse o Site", icon:'site'},{type:"button",id:"prev1",text:"Captura de Tela", icon:'preview'} ]},
]
},
home:{
pt:[
{ separate:true, info:{pos:"right",text:"Site",color:"orange", type:"d"}, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>            </svg>',title:"Portfólio",desc:"Conheça mais sobre minha experiência profissional e habilidades.", links:[{type:"a",link:"/info-profile/",text:"Acesse o Site", icon:'site'} ]},
{ separate:true, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">                        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>           </svg>',title:"Projetos",desc:"Explore meus projetos desenvolvidos em diferentes tecnologias e linguagens de programação.", links:[{type:"a",link:"/projects-pt",text:"Visite a Página", icon:'page'} ]},
{ separate:true, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">                          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>                    </svg>',title:"Download dos Projetos",desc:"Faça download dos meus projetos completos.", links:[{type:"a",link:"/downloads",text:"Visite a Página", icon:'page'} ]}
],
en:[
{ separate:true, info:{pos:"right",text:"WebSite",color:"orange", type:"d"}, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>            </svg>',title:"Portfolio",desc:"Learn more about my professional experience and skills.", links:[{type:"a",link:"/info-profile-en/",text:"Access Website", icon:'site'} ]},
{ separate:true, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">                        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>           </svg>',title:"Projects",desc:"Explore my projects developed in different technologies and programming languages.", links:[{type:"a",link:"/projects-en",text:"Visit the Page", icon:'page'} ]},
{ separate:true, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">                          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>                    </svg>',title:"Download Projects",desc:"Download my complete projects.", links:[{type:"a",link:"/downloads-en",text:"Visit the Page", icon:'page'} ]}
]
}

};


function loaded_listff(tp, lag){
var ddloaded_listff="";
if(tp && tp!=""){

if(tp=="skin"){
ddloaded_listff={ class:"card", class_b:"page-link", class_icon:"svg" };
} else if (tp=="home" && lag && lag!=""){
if(set_itend_cd[tp]){
if(set_itend_cd[tp][lag]){
ddloaded_listff=set_itend_cd[tp][lag]; 
}  }
} else if (tp=="mural" && lag && lag!=""){
if(set_itend_cd[tp]){
if(set_itend_cd[tp][lag]){
ddloaded_listff=set_itend_cd[tp][lag]; 
}  }
} else if (tp=="sidebar" && lag && lag!=""){
if(set_itend_cd[tp]){
if(set_itend_cd[tp][lag]){
ddloaded_listff=set_itend_cd[tp][lag]; 
}  }
} else if (tp=="project" && lag && lag!=""){
if(set_itend_cd[tp]){
if(set_itend_cd[tp][lag]){
ddloaded_listff=set_itend_cd[tp][lag]; 
}  }
} else if (tp=="download" && lag && lag!=""){
if(set_itend_cd[tp]){
if(set_itend_cd[tp][lag]){
ddloaded_listff=set_itend_cd[tp][lag]; 
}  }
}

}
return ddloaded_listff;   }



