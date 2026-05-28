
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
       var paramName = decodeURIComponent(sParameterName[0]);
        var paramValue = sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        if (paramName === sParam) {            return paramValue;        }
    }    
return "";   }


function fs_pagination(config) {
  const listaContainerId = config.listaId;
  const paginacaoContainerId = config.paginacaoId || 'fs-paginacao-default';
  const itemClasse = config.itens || 'item';
  const itensPorPagina = config.itensPorPagina || 5;
  const idioma = config.idioma || 'pt';

  const listaContainer = document.getElementById(listaContainerId);
  if (!listaContainer) return;

  let pagContainer = document.getElementById(paginacaoContainerId);
  
  if (!pagContainer) {
    pagContainer = document.createElement('div');
    pagContainer.id = paginacaoContainerId; 
    document.body.appendChild(pagContainer);
  }

  const itens = Array.from(listaContainer.getElementsByClassName(itemClasse));
  const totalItens = itens.length;
  const totalPaginas = Math.ceil(totalItens / itensPorPagina) || 1;
  let paginaAtual = 1;

  const textos = {
    pt: { info: `Exibindo <strong>${itensPorPagina}</strong> itens por página de um total de <strong>${totalItens}</strong>` },
    en: { info: `Showing <strong>${itensPorPagina}</strong> items per page out of <strong>${totalItens}</strong> total` }
  };
  const txt = textos[idioma] || textos['pt'];

  const svgAnterior = `<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="pag-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>`;
  const svgProximo = `<svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="pag-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>`;

  if (!document.getElementById('style-paginacao-dinamica')) {
    const style = document.createElement('style');
    style.id = 'style-paginacao-dinamica';
    style.innerHTML = `
      .pag-wrapper {  transition: all 0.1s linear;    user-select:none;   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 24px 0; display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; box-sizing: border-box; }
      .pag-info { font-size: 13.5px; color: #64748b; text-align: center; font-weight: 400; line-height: 1.5; }
      .pag-info strong { color: #0f172a; font-weight: 600; }
      .pag-nav { display: flex; justify-content: center; align-items: center; gap: 6px; flex-wrap: wrap; width: 100%; max-width: 100%; padding: 0 4px; box-sizing: border-box; }
      .pag-btn { background-color: #ffffff; color: #334155; border: 1px solid #e2e8f0; padding: 0 12px; min-width: 38px; height: 38px; font-size: 14px; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); display: inline-flex; align-items: center; justify-content: center; user-select: none; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
      .pag-btn:hover:not(:disabled) { background-color: #f8fafc; border-color: #cbd5e1; color: #0f172a; }
      .pag-btn:active:not(:disabled) { transform: scale(0.96); }
      .pag-btn:disabled { color: #cbd5e1; background-color: #f8fafc; border-color: #f1f5f9; cursor: not-allowed; box-shadow: none; }
      .pag-btn.ativo { background-color: #0f172a; color: #ffffff; border-color: #0f172a; font-weight: 600; box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.15), 0 2px 4px -2px rgba(15, 23, 42, 0.15); }
      .pag-icon { width: 16px; height: 16px; display: block; stroke-linecap: round; stroke-linejoin: round; }

	  .dark-mode .pag-info {   color: #94a3b8;  }
	  .dark-mode .pag-info strong {   color: #f8fafc; }
	  .dark-mode .pag-btn {  background-color: #1e293b;   color: #cbd5e1;   border: 1px solid #334155;  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);   transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);   }
	  .dark-mode .pag-btn:hover:not(:disabled) {   background-color: #334155;   border-color: #475569;   color: #f8fafc;  }
	  .dark-mode .pag-btn:disabled {   color: #475569;   background-color: #0f172a;   border-color: #1e293b;    }
	  .dark-mode .pag-btn.ativo {   background-color: #38bdf8;   color: #0f172a;   border-color: #38bdf8;     box-shadow: 0 4px 6px -1px rgba(56, 189, 248, 0.2), 0 2px 4px -2px rgba(56, 189, 248, 0.2);  }

      
      @media (max-width: 480px) {
        .pag-wrapper { gap: 10px; margin: 16px 0; }
        .pag-info { font-size: 12px; }
        .pag-nav { gap: 4px; }
        .pag-btn { min-width: 32px; height: 32px; font-size: 13px; padding: 0 8px; border-radius: 6px; }
        .pag-icon { width: 14px; height: 14px; }
      }
      @media (max-width: 350px) {
        .pag-nav { gap: 3px; }
        .pag-btn { min-width: 28px; height: 28px; font-size: 12px; padding: 0 6px; }
      }
    `;
    document.head.appendChild(style);
  }

  pagContainer.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'pag-wrapper';

  const infoDiv = document.createElement('div');
  infoDiv.className = 'pag-info';
  infoDiv.innerHTML = txt.info;
  wrapper.appendChild(infoDiv);

  const nav = document.createElement('nav');
  nav.className = 'pag-nav';
  wrapper.appendChild(nav);
  pagContainer.appendChild(wrapper);

  function atualizar() {  
	const pagCdsearchpgg = document.getElementById("filtroInputB");
	if(pagCdsearchpgg){   pagCdsearchpgg.value="";    }
	  
    itens.forEach((item, index) => {
      const inicio = (paginaAtual - 1) * itensPorPagina;
      const fim = inicio + itensPorPagina;
      item.style.display = (index >= inicio && index < fim) ? '' : 'none';
    });

    nav.innerHTML = '';

    const btnAnterior = document.createElement('button');
    btnAnterior.className = 'pag-btn';
    btnAnterior.innerHTML = svgAnterior;
    btnAnterior.disabled = paginaAtual === 1;
    btnAnterior.onclick = () => { paginaAtual--;  listaContainer.scrollIntoView({ behavior: "smooth", block: "start" });  atualizar();  };
    nav.appendChild(btnAnterior);

    for (let i = 1; i <= totalPaginas; i++) {
      const btnNum = document.createElement('button');
      btnNum.className = `pag-btn ${i === paginaAtual ? 'ativo' : ''}`;
      btnNum.innerText = i;
	  btnNum.id = `sh_page_${i}`;
      btnNum.onclick = () => { paginaAtual = i;  listaContainer.scrollIntoView({ behavior: "smooth", block: "start" });  atualizar();  };
      nav.appendChild(btnNum);
    }

    const btnProximo = document.createElement('button');
    btnProximo.className = 'pag-btn';
    btnProximo.innerHTML = svgProximo;
    btnProximo.disabled = paginaAtual === totalPaginas;
    btnProximo.onclick = () => { paginaAtual++;  listaContainer.scrollIntoView({ behavior: "smooth", block: "start" });  atualizar();  };
    nav.appendChild(btnProximo);

  }

  atualizar();  
	
	  let pagConIshd = getUrlParameter("p");
	  if(pagConIshd && pagConIshd!=""){
        let pagConId = document.getElementById(`sh_page_${pagConIshd}`);
	     if(pagConId){   pagConId.click();   }
	  }
	
}



function getObj_nInfo(obj) {  
const igetObj_nInfonfo = { element: null,innerHTML: "",innerText: "",onclickProperty: function(){} };
  if(obj){
     if (obj.text && obj.text!="" && obj.local && obj.local!=""){  
   const sdbutton = document.querySelector(""+obj.local+""+obj.text+"");
    if (!sdbutton) {        return igetObj_nInfonfo;    }
     igetObj_nInfonfo = {
        element: sdbutton,
        innerHTML: sdbutton.innerHTML,
        innerText: sdbutton.innerText || sdbutton.textContent,
        onclickProperty: sdbutton.onclick,
    };     return igetObj_nInfonfo;
}    }       }



function filtrarListda() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("filtroInputB");
  filter = input.value.toUpperCase();
  ul = document.getElementById("listr");
  li = ul.querySelectorAll(".card");
  for (i = 0; i < li.length; i++) {
    if (li[i].innerText.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {      li[i].style.display = "none";    }
  }
}


document.addEventListener("DOMContentLoaded", function(){
	const searchpgg = getUrlParameter("s");
	  if(searchpgg && searchpgg!=""){
        const pagCsearchpgg = document.getElementById("filtroInputB");
	     if(pagCsearchpgg){   pagCsearchpgg.value=searchpgg;    }
	  const botapaimo = document.querySelector('.busca button');
     if (botapaimo) {  botapaimo.click();   }
	  }
});


function carregarTudo(listaRecursos) {   if(listaRecursos){
    listaRecursos.forEach(item => {
        const destinoStr = item.destino; 
        const tag = item.tag;           
        const atributos = item.atributos; 
        const elementoPai = document.getElementsByTagName(destinoStr)[0];
        if (!elementoPai) {            return;        }
        const elemento = document.createElement(tag);
        for (const chave in atributos) {
            if (atributos.hasOwnProperty(chave)) {                elemento.setAttribute(chave, atributos[chave]);            }
        }
        elementoPai.appendChild(elemento);
    });     }
}



function check_utt(eww){    
 if(eww==true){
  if (location.href!="https://fcasfs-of.cloud-fs.net/maintenance"){   location.href="https://fcasfs-of.cloud-fs.net/maintenance";   }
 }   
 else { 
  if (location.href=="https://fcasfs-of.cloud-fs.net/maintenance" || location.href=="https://fcasfs-of.cloud-fs.net/maintenance.html"){   location.href="/";   }
 }
   }


var cokk_plu=true;
function loaded_maut(){    if(manut){
 if(manut==true){  cokk_plu=false;  check_utt(true);    }   
 else  {    check_utt(false);    }
 }   else  {    check_utt(false);    }    }


const newDilofv = document.createElement("div");
newDilofv.id = "loaderfs";    newDilofv.className = "loaderffs";
//document.getElementsByTagName('main')[0].appendChild(newDilofv);
 
//if(document.getElementById("loaderfs")){   document.body.style.pointerEvents = "none";   }



function loaded_menus(){
if(Contextmenu && options_menu && options_menu[location.href]){
//const contextmenu = Contextmenu(document.getElementsByTagName("body")[0], {    options: options_menu[location.href]  });  
}
 else {  if(options_menu && options_menu["*"]){
//const contextmenu = Contextmenu(document.getElementsByTagName("body")[0], {    options: options_menu["*"]  }); 
 }   }
}


function showPage() {
   // document.getElementById("loaderfs").style.display = "none";
 //if(document.getElementById("loaderfs")){  document.body.style.pointerEvents = "auto";    }
}



function laoded_call_ff(){   loaded_maut();   initAvisos(initAvisos_onload);    }

carregarTudo([
    {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'onload': 'laoded_call_ff(); ',
            'src': 'https://fcasfs-of.cloud-fs.net/av_man.js'
        }
    },
	{
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/btn_top.js'
        }
    }
]);

  
function share_btsD(att, listd, listdld, opti, id){
var add_vjif = document.getElementsByTagName("main")[0];
if(id){   var addd_vjif = document.getElementById(id);   if(addd_vjif){  add_vjif=addd_vjif;  }   }

var share_btsD_vars={ icon:true, text:false };
if(opti){ 
if(opti.icon && opti.icon==="false"){  share_btsD_vars.icon=false;  }
if(opti.text && opti.text==="true"){  share_btsD_vars.text=true;  }
}

if(share_btsD_vars.text===false && share_btsD_vars.icon===false){  share_btsD_vars.icon=true;   share_btsD_vars.text=false;  }

var share_btsD_al="";
if(listd){
for(var jdd=0; jdd<listd.length; jdd++){
var share_btsDdf_al="";
if(listdld){  if(listdld[listd[jdd]]){ 
for(var gfff=0; gfff<listdld[listd[jdd]].length; gfff++){
share_btsDdf_al=share_btsDdf_al+" "+listdld[listd[jdd]][gfff][0]+"=\'"+listdld[listd[jdd]][gfff][1]+"\' "; 
}    }    }

var share_btsD_al_tectf="";   var shaicon_btsD_al_tectf="";  
if(share_btsD_vars.icon===false){  shaicon_btsD_al_tectf=" icon_none";    }
if(share_btsD_vars.text===true){  share_btsD_al_tectf=listd[jdd].toUpperCase();   }

 var object_shre='<a class="'+listd[jdd]+shaicon_btsD_al_tectf+'"'+share_btsDdf_al+'>'+share_btsD_al_tectf+'</a>';
 if(listd[jdd]=="separate"){  object_shre="<span class='separte'></span>";  }
share_btsD_al=share_btsD_al+object_shre;
}  }

const scripjkshd = document.createElement("div");
const scriptfd_shd = document.createElement("div");
scriptfd_shd.className="shareon";
scriptfd_shd.innerHTML = ""+share_btsD_al+"";
 scripjkshd.style.padding="5px";     scripjkshd.style.width="94%";
scripjkshd.style.margin="0 auto";
 scripjkshd.innerHTML = "<br/>";


if(att){
for(var jdsdd=0; jdsdd<att.length; jdsdd++){
if(att[jdsdd]){  
for(var jddsdd=0; jddsdd<att[jdsdd].length; jddsdd++){   
  if(att[jdsdd][0] && att[jdsdd][0]!=""){  
scriptfd_shd.setAttribute(att[jdsdd][0], att[jdsdd][1]);     
}   }   }   }   }   

if(scriptfd_shd){  add_vjif.appendChild(scripjkshd);  
  scripjkshd.appendChild(scriptfd_shd);   
 scripjkshd.innerHTML = scripjkshd.innerHTML+"<br/><br/>";               
 }

}


function share_btsD_all(){   
 share_btsD([["data-via","website"],["data-title",""],["data-media",""],["data-url",""],["data-hashtags","fcasfs-of"]], [ "bluesky","facebook","fediverse","hackernews","linkedin","lobsters","mastodon","messenger","odnoklassniki","pinterest","pocket","reddit","teams","telegram","tumblr","twitter","threads","viber","vkontakte","whatsapp","separate","copy-url","email","print","separate","web-share" ], { messenger:[["data-fb-app-id",""]] }, { icon:"true", text:"false" }, "");    
 if(Shareon){  Shareon.init();   }
}

function micAccessTool_run(cokk_plu_esdnf){ 
	if(cokk_plu_esdnf && fs_accessibility){   fs_accessibility.init({ 
    lang: cokk_plu_esdnf, 
    position: 'left',  modalPos: 'full',
    customButtons: []
 });    }
}


function execr_runff(ff){   if (typeof ff === 'function') {  ff();  }     }


var cokk_plu_esdnf="pt";
if(cokk_plu && cokk_plu==true){   

 var cokk_plu_enf="/en";    var cokk_plu_enfdd="-en";  cokk_plu_esdnf="pt";
 if (location.href.toUpperCase().indexOf(cokk_plu_enf.toUpperCase()) > -1) {    cokk_plu_esdnf="en";    }
 if (location.href.toUpperCase().indexOf(cokk_plu_enfdd.toUpperCase()) > -1) {    cokk_plu_esdnf="en";    }


carregarTudo([
    {
        destino: 'head',    tag: 'link',
        atributos: {
            'href': 'https://fcasfs-of.cloud-fs.net/notify/theme2.css',
            'rel': 'stylesheet'
        }
    }, {
        destino: 'head',    tag: 'link',
        atributos: {
            'href': 'https://fcasfs-of.cloud-fs.net/notify/theme.css',
            'rel': 'stylesheet'
        }
    }, {
        destino: 'head',    tag: 'link',
        atributos: {
            'href': 'https://fcasfs-of.cloud-fs.net/core_l.css',
            'rel': 'stylesheet'
        }
    }, {
        destino: 'head',    tag: 'link',
        atributos: {
            'href': 'https://fcasfs-of.cloud-fs.net/iframe/manager.css',
            'rel': 'stylesheet'
        }
    }, {
        destino: 'head',    tag: 'link',
        atributos: {
            'href': 'https://fcasfs-of.cloud-fs.net/share/theme.css',
            'rel': 'stylesheet'
        }
    }, {
        destino: 'head',    tag: 'link',
        atributos: {
            'href': 'https://fcasfs-of.cloud-fs.net/status/theme.css',
            'rel': 'stylesheet'
        }
    }, {
        destino: 'head',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/status/list.js'
        }
    }, {
        destino: 'head',    tag: 'link',
        atributos: {
            'href': 'https://fcasfs-of.cloud-fs.net/cookies/consent.css',
            'rel': 'stylesheet'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/cookies/langs.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/iframe/langs.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/notify/list.js'
        }
    },  {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/status/core.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/notify/core2.js'
        }
    }, {
        destino: 'head',  tag: 'script',   
        atributos: {    
            'onload': "micAccessTool_run('"+cokk_plu_esdnf+"');",
            'src': 'https://fcasfs-of.cloud-fs.net/accessibility/core.js'
        }
    }, {
        destino: 'head',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/menu_exec.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/cmenu.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/core_ds.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
		    'onload': "setup_CookieBadr();",
            'src': 'https://fcasfs-of.cloud-fs.net/cookies/consent.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
		    'onload': "loaded_menus();",
            'src': 'https://fcasfs-of.cloud-fs.net/iframe/manager.js'
        }
    },  {
        destino: 'body',  tag: 'script',   
        atributos: {    
			  'src': 'https://fcasfs-of.cloud-fs.net/TECH-SideBar/app/api.js'
        },
                    'defer': "",
                    'init': "",
'onload': "initSidebar_start(loadedsiders);"
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
		    'type': "text/javascript",
		    'defer': "",
		    'init': "",
		    'onload': "share_btsD_all();",
            'src': 'https://fcasfs-of.cloud-fs.net/share/core.js'
        }
    }
]);

}



function create_tooltipr(op){    var create_infoxrs="";   
 if (op){
   if (op.text && op.text!=""){  
    var create_infoxrcolor="";    var dcreate_infoxrcolor="top"; 
     if (op.visible && op.visible==true){   create_infoxrcolor=' data-ver="true"';   }
     if (op.pos && op.pos!=""){   dcreate_infoxrcolor=""+op.pos;   }
   create_infoxrs=' data-tooltip="'+op.text+'" data-flow="'+dcreate_infoxrcolor+'"'+create_infoxrcolor;
   }
 }
return create_infoxrs;  }

function create_tdestque(op){    var create_infoxrs="";       
 if (op){
   if (op.type && op.type!=""){  
   create_infoxrs=' card-destaque card-'+op.type;
   }
 }
return create_infoxrs;  }

function create_tbadge(op, jh){    var create_infoxrs="";    var create_infoxratts="";    var sscreate_infoxrs="Novo";    
  if(jh && jh=="en"){   sscreate_infoxrs="New";  }	
 if (op){
  if (op.align && op.align===true){   create_infoxratts='align_ob ';   }
   if (op.type && op.type!=""){  
   create_infoxrs='  <span class="badge '+create_infoxratts+'badge-'+op.type+'">'+sscreate_infoxrs+'</span>  ';
   }
 }
return create_infoxrs;  }

function create_tbadge_status(op, jh){    var create_infoxrs="";    var create_infoxratts={ planejado:"Planejado", desenvolvimento:"Em Desenvolvimento", testes:"Em Testes", versao:"Nova Versão", manutencao:"Em Manutenção", concluido:"Concluído", pausado:"Pausado", descontinuado:"Descontinuado" };  
   if(jh && jh=="en"){  create_infoxratts={ planejado:"Planned", desenvolvimento:"In Development", testes:"Testing", versao:"New Version", manutencao:"Maintenance", concluido:"Completed", pausado:"Paused", descontinuado:"Deprecated" };   }
 if (op){
   if (op.type && op.type!=""){  
   create_infoxrs='  <span>  <span class="badge-status status-'+op.type+'">'+create_infoxratts[op.type]+'</span>  <br/><br/>  </span>';
   }
   }
return create_infoxrs;  }



function create_infoxr(op){    var create_infoxrs="";   
 if (op){
   if (op.text && op.text!=""){  
   var create_infoxrcolorid="";    var create_infoxvw="";   var create_infoxrcolor="";   var create_infsixeolor="10px";    var dcreate_infoxrcolor=""; 
     if (op.color && op.color!=""){   create_infoxrcolor=" "+op.color;   }
     if (op.pos && op.pos!=""){   dcreate_infoxrcolor=" "+op.pos;   }
     if (op.size && op.size!=""){   create_infsixeolor=" "+op.size;   }
     if (op.id && op.id!=""){   create_infoxrcolorid=" id='"+op.id+"'";    }
	   var create_infoxpadrd='<span'+create_infoxrcolorid+' style="font-size: '+create_infsixeolor+';">'+op.text+'</span>';
	  if (op.type && op.type!=""){   create_infoxvw=""+op.type;    create_infoxpadrd=' '+op.text+' <span'+create_infoxrcolorid+' style="font-size: '+create_infsixeolor+';"></span>';    }
   create_infoxrs='<div class="ribbon'+create_infoxvw+dcreate_infoxrcolor+create_infoxrcolor+'">'+create_infoxpadrd+'</div>';
   }
 }
return create_infoxrs;  }


function add_itens_fr(id, op, conn, objsd){  
var dadd_itens_ocu="";   var dadd_itens_efect="";     var dadd_itens_fra="";   var dadd_itens_fra_co = { class:"", class_b:"" };
if (id && id!="" && op){
const idfadd_itens_fr = document.getElementById(id);
 var dad_icond_itens_fra="";    var dalickstens_fra=""; 
    
if(op.config){
if (op.config.class_icon && op.config.class_icon!=""){   dadd_itens_fra_co["type_icon"]=op.config.class_icon;   }
   if (op.config.class && op.config.class!=""){   dadd_itens_fra_co["class"]=op.config.class;   }
   if (op.config.class_b && op.config.class_b!=""){   dadd_itens_fra_co["class_b"]=op.config.class_b;   }
}

if(op.itens){
    if(op.itens.length>=1){  
 for (let is = 0; is < op.itens.length; is++) {
 dalickstens_fra="";  

 if (op.itens[is].disable && op.itens[is].disable==true){    dadd_itens_ocu=" style='pointer-events:none;  opacity:0.6;  ' ";  }


 if(op.itens[is].links){
    if(op.itens[is].links.length>=1){
    dalickstens_fra='<div class="'+dadd_itens_fra_co["class"]+'-links">'; 
    for (let i = 0; i < op.itens[is].links.length; i++) {
        if(op.itens[is].links[i] && op.itens[is].links[i]){ 
         if (op.itens[is].links[i].type && op.itens[is].links[i].type!="" && op.itens[is].links[i].text && op.itens[is].links[i].text!=""){  
         var hredadd_itens_fradd="";  var hredadd_itens_ocul="";  var hredaiconns_octyoeul="";   var hredaiconns_ocul="";

if(dadd_itens_fra_co["type_icon"] && dadd_itens_fra_co["type_icon"]!=""){  hredaiconns_octyoeul=" "+dadd_itens_fra_co["type_icon"];  }

if(op.itens[is].links[i].icon && op.itens[is].links[i].icon!=""){   hredaiconns_ocul="<span class='icon "+op.itens[is].links[i].icon+"'></span>";  } 
         if(op.itens[is].links[i].link && op.itens[is].links[i].link!=""){         hredadd_itens_fradd=" href='"+op.itens[is].links[i].link+"'";         }
         if(op.itens[is].links[i].id && op.itens[is].links[i].id!=""){         hredadd_itens_fradd=" id='"+op.itens[is].links[i].id+"'";         }
       
if (op.itens[is].links[i].disable && op.itens[is].links[i].disable==true){  hredadd_itens_fradd=""; hredadd_itens_ocul=" style='pointer-events:none;  opacity:0.6;  ' "; }


 dalickstens_fra=dalickstens_fra+"<"+op.itens[is].links[i].type+hredadd_itens_ocul+" class='"+dadd_itens_fra_co["class_b"]+hredaiconns_octyoeul+"' "+hredadd_itens_fradd+">"+hredaiconns_ocul+"  "+op.itens[is].links[i].text+"  <"+"/"+op.itens[is].links[i].type+">";  
        }
        }
    }
    dalickstens_fra=dalickstens_fra+"</div>";
    }
}

    dad_icond_itens_fra="";   dadd_itens_efect=" ef";   var dad_descnd_itens_fra="";  var dad_titlend_itens_fra="";
    
    if (op.itens[is].icon && op.itens[is].icon!=""){      dad_icond_itens_fra='<div class="'+dadd_itens_fra_co["class"]+'-icon">'+op.itens[is].icon+'</div>';     } 
    
    
      if(op.itens[is].title && op.itens[is].title!=""){  dad_titlend_itens_fra='<h2>'+op.itens[is].title+create_tbadge(op.itens[is].new, cokk_plu_esdnf)+'</h2>';   }
  if(op.itens[is].desc && op.itens[is].desc!=""){   dad_descnd_itens_fra='<p>'+op.itens[is].desc+'</p>';   }

  var dad_icond_itens_fra_odfd="";
  if(op.itens[is].separate && op.itens[is].separate==true){   if(dalickstens_fra!=""){   dad_icond_itens_fra_odfd="<div class='separate'></div>";  }   }

    if(op.itens[is].remove_efect && op.itens[is].remove_efect==true){   dadd_itens_efect="";   }

    dadd_itens_fra=dadd_itens_fra+'<div'+create_tooltipr(op.itens[is].tip)+' class="'+dadd_itens_fra_co["class"]+dadd_itens_efect+create_tdestque(op.itens[is].topo)+'" '+dadd_itens_ocu+'>'+create_infoxr(op.itens[is].info)+dad_icond_itens_fra+dad_titlend_itens_fra+create_tbadge_status(op.itens[is].status, cokk_plu_esdnf)+dad_descnd_itens_fra+dad_icond_itens_fra_odfd+dalickstens_fra+'</div>';       
  
  } }

idfadd_itens_fr.innerHTML=dadd_itens_fra;
if(conn && conn==true){   idfadd_itens_fr.innerHTML='<div class="'+dadd_itens_fra_co["class"]+'-container">'+dadd_itens_fra+"<div>";   }

}   }

 if(objsd){
  if(objsd.length>=1){  
 for (let sis = 0; sis < objsd.length; sis++) {
  if(objsd[sis].id && objsd[sis].id!="" && objsd[sis].value && objsd[sis].value!=""){
if(document.getElementById(objsd[sis].id)){ document.getElementById(objsd[sis].id).innerHTML=objsd[sis].value;  }
  }
 }
  }     }
 
}


var cookies_pre = { title: "Cookies", desc: "", icon:'', open: null };

function setup_CookieBadr(){     if(CookieConsent && cokk_plu_esdnf && langs_cokkiesd){
 
 if (document.body.classList.contains('dark-mode')) {      document.documentElement.classList.add('cc--darkmode');     }
 
 CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {  enabled: true, readOnly: true },
        functionality: { enabled: true },
        analytics: { enabled: false },
		performance: { enabled: true },
		security: { enabled: true },
        marketing: { enabled: false }
    },
    language: {
        default: cokk_plu_esdnf,
        translations: langs_cokkiesd,
        autoDetect: "document"
    }
});   
	
cookies_pre = { title: "Cookies: "+langs_cokkiesd[cokk_plu_esdnf].consentModal.showPreferencesBtn, desc: langs_cokkiesd[cokk_plu_esdnf].preferencesModal.title, icon:' ', open: CookieConsent.showPreferences };
}   }


function update_Pagination(asdd){
if(asdd){
  if(asdd.contItems && asdd.paginationNumbers && asdd.paginatedList && asdd.listItems && asdd.prevButton && asdd.nextButton && asdd.paginationLimit && asdd.paginationNumberp && asdd.paginationLindex && asdd.paginationclass){  

const contdstItems = document.getElementById(asdd.contItems);

const paginationNumberp = asdd.paginationNumberp;
const paginationLindex = asdd.paginationLindex;
const paginationclass = asdd.paginationclass;

const paginationNumbers = document.getElementById(asdd.paginationNumbers);
const paginatedList = document.getElementById(asdd.paginatedList);
const listItems = paginatedList.querySelectorAll(asdd.listItems);
const nextButton = document.getElementById(asdd.nextButton);
const prevButton = document.getElementById(asdd.prevButton);

paginationNumbers.innerHTML="";
contdstItems.innerHTML="";
contdstItems.classList.remove("notpop");

const paginationLimit = asdd.paginationLimit;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;


const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {    disableButton(prevButton);  } else {    enableButton(prevButton);  }
  if (pageCount === currentPage || pageCount < 2 ) {    disableButton(nextButton);  }  else {    enableButton(nextButton);  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(paginationNumberp).forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute(paginationLindex));   
    enableButton(button);   
    if (pageIndex == currentPage) {      button.classList.add("active");   disableButton(button);       }
  });
};

const appendPageNumber = (index) => { 
  const pageNumber = document.createElement("button");
  pageNumber.className = paginationclass;
  var fdappendPageNumber=index;
  if(pageCount>=10){     if(index<=9){   fdappendPageNumber="0"+index;   }    }
  pageNumber.innerHTML = fdappendPageNumber;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + fdappendPageNumber);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {      item.classList.remove("hidden");    }
  });
};

contdstItems.classList.add("notpop");
contdstItems.innerHTML="<hr/>"+listItems.length.toLocaleString('en-US').replace(/,/g, ".");
if(listItems.length<1){
contdstItems.classList.remove("notpop");
contdstItems.innerHTML="Lista de \"Histórico\" está Vazia.";
}

  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {    setCurrentPage(currentPage - 1);  });

  nextButton.addEventListener("click", () => {    setCurrentPage(currentPage + 1);  });

  document.querySelectorAll(paginationNumberp).forEach((button) => {
    const pageIndex = Number(button.getAttribute(paginationLindex));
    if (pageIndex) {
      button.addEventListener("click", () => {        setCurrentPage(pageIndex);      });
    }
  });
}
}

}


const criarRating = (containerId, dados) => {
if(containerId && dados){
  const container = document.getElementById(containerId);
  const lang = dados.idioma === 'en' ? { t: 'Total:', p: 'people' } : { t: 'Total:', p: 'pessoas' };
  
  const totalPessoas = Object.values(dados.estrelas).reduce((a, b) => a + b, 0);

  const style = document.createElement('style');
  style.textContent = `
    #${containerId} .rating {  font-family: sans-serif;  width: 95%;  margin:0 auto;  padding: 10px;  overflow: auto;   }
    #${containerId} .rating .row {   display: flex; align-items: center; margin-bottom: 5px; }
    #${containerId} .rating .row span {  margin-right:3px;  }
    #${containerId} .rating .bar-bg { flex-grow: 1; background: #eee; height: 10px; margin: 0 10px; border-radius: 5px; overflow: hidden; }
    #${containerId} .rating .bar-fill { background: #fbc02d; height: 100%; }
    #${containerId} .rating .count { width: 30px; text-align: right; font-size: 14px; }
    #${containerId} .rating .total { text-align:center;  margin-top: 15px; font-weight: bold; border-top: 1px solid #ddd; pt-10px; }
     #${containerId} .rating svg { width: 16px; height: 16px; fill: #fbc02d; }
  `;
  document.head.appendChild(style);

  const iconRating = `<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;

  const htmlRatin = Object.entries(dados.estrelas).reverse().map(([estrela, qtd]) => {
    const percRatin = (qtd / totalPessoas) * 100;
    return `  <div class="row">
        <span>${estrela} </span> ${iconRating}
        <div class="bar-bg"><div class="bar-fill" style="width: ${percRatin}%"></div></div>
        <span class="count">${qtd}</span>
      </div>`;
  }).join('');

  if(container){   container.innerHTML = `<div class="rating">  ` + htmlRatin + `  <div class="total"><br/> ${lang.t} ${totalPessoas} ${lang.p}</div>  <br/>  </div>  `;   }  
  }
};


const body = document.body;
body.oncontextmenu=function() { return false; };



    const toggleThemeBtn = document.getElementById('toggle-theme');
    
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
	  var chech_darrk=false;     

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-mode');
      toggleThemeBtn.querySelector('span').textContent = 'Claro';
		chech_darrk=true;
    }   
    
    toggleThemeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      document.documentElement.classList.toggle('cc--darkmode');    
		
    if(MainContextMenu){   MainContextMenu.dark();   }

      if (document.body.classList.contains('dark-mode')) {
        toggleThemeBtn.querySelector('span').textContent = 'Claro';
        localStorage.setItem('theme', 'dark');
	  if(MainContextMenu){   MainContextMenu.dark(true);   }
      } else {
        toggleThemeBtn.querySelector('span').textContent = 'Escuro';
        localStorage.setItem('theme', 'light');
      }

		 //if (typeof initSidebar_theme === 'function') {  		}
		
    });
    
    if (typeof run_inruff === 'function') {

    }


   document.body.onload=function(){       loaded_maut();       showPage();   	  	if(MainContextMenu){   MainContextMenu.dark(chech_darrk);   }       };

    window.addEventListener('load', function() {
      document.body.style.opacity = '0';
      document.body.style.transition = 'all 0.1s linear';

      setTimeout(function() {   
        document.body.style.opacity = '1';   
      }, 100);
    });



