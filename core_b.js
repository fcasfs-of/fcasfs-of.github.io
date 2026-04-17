
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



carregarTudo([
    {
        destino: 'body',  tag: 'script',   
        atributos: {    
            'type': 'text/javascript',
            'onload': 'loaded_maut();',
            'src': 'https://fcasfs-of.cloud-fs.net/av_man.js'
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
 share_btsD([["data-via","website"],["data-title",""],["data-media",""],["data-url",""],["data-hashtags","fcasfs-of"]], [ "bluesky","facebook","fediverse","hackernews","linkedin","lobsters","mastodon","messenger","odnoklassniki","pinterest","pocket","reddit","teams","telegram","tumblr","twitter","viber","vkontakte","whatsapp","separate","copy-url","email","print","separate","web-share" ], { messenger:[["data-fb-app-id",""]] }, { icon:"true", text:"false" }, "");    
 if(Shareon){  Shareon.init();   }
}

function micAccessTool_run(cokk_plu_esdnf){ 
	if(cokk_plu_esdnf && MicAccessTool){    var micAccessTool = new MicAccessTool({  link: '',  contact: '',   buttonPosition: '',  forceLang: cokk_plu_esdnf   });     }
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
            'src': 'https://fcasfs-of.cloud-fs.net/notify/core2.js'
        }
    }, {
        destino: 'head',  tag: 'script',   
        atributos: {    
            'onload': "micAccessTool_run('"+cokk_plu_esdnf+"');",
            'src': 'https://fcasfs-of.cloud-fs.net/accessibility.js'
        }
    }, {
        destino: 'head',  tag: 'script',   
        atributos: {    
            'src': 'https://fcasfs-of.cloud-fs.net/menu_exec.js'
        }
    }, {
        destino: 'body',  tag: 'script',   
        atributos: {    
			'onload': "initSidebar_start();",
            'src': 'https://fcasfs-of.cloud-fs.net/sidebar/core.js'
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


function create_infoxr(op){    var create_infoxrs="";   
 if (op){
   if (op.text && op.text!=""){  
   var create_infoxrcolorid="";    var create_infoxrcolor="";   var create_infsixeolor="10px";    var dcreate_infoxrcolor=""; 
     if (op.color && op.color!=""){   create_infoxrcolor=" "+op.color;   }
     if (op.pos && op.pos!=""){   dcreate_infoxrcolor=" "+op.pos;   }
     if (op.size && op.size!=""){   create_infsixeolor=" "+op.size;   }
     if (op.id && op.id!=""){   create_infoxrcolorid=" id='"+op.id+"'";    }
   create_infoxrs='<div class="ribbon'+dcreate_infoxrcolor+create_infoxrcolor+'"><span'+create_infoxrcolorid+' style="font-size: '+create_infsixeolor+';">'+op.text+'</span></div>';
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
    
    
      if(op.itens[is].title && op.itens[is].title!=""){  dad_titlend_itens_fra='<h2>'+op.itens[is].title+'</h2>';   }
  if(op.itens[is].desc && op.itens[is].desc!=""){   dad_descnd_itens_fra='<p>'+op.itens[is].desc+'</p>';   }

  var dad_icond_itens_fra_odfd="";
  if(op.itens[is].separate && op.itens[is].separate==true){   dad_icond_itens_fra_odfd="<div class='separate'></div>";   }

    if(op.itens[is].remove_efect && op.itens[is].remove_efect==true){   dadd_itens_efect="";   }

    dadd_itens_fra=dadd_itens_fra+'<div'+create_tooltipr(op.itens[is].tip)+' class="'+dadd_itens_fra_co["class"]+dadd_itens_efect+'" '+dadd_itens_ocu+'>'+create_infoxr(op.itens[is].info)+dad_icond_itens_fra+dad_titlend_itens_fra+dad_descnd_itens_fra+dad_icond_itens_fra_odfd+dalickstens_fra+'</div>';       
  
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



function setup_CookieBadr(){     if(CookieConsent && cokk_plu_esdnf && langs_cokkiesd){
 
 if (document.body.classList.contains('dark-mode')) {      document.documentElement.classList.add('cc--darkmode');     }
 
 CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud inline",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar wide",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: { enabled: true },
        analytics: { enabled: false },
        marketing: { enabled: false }
    },
    language: {
        default: cokk_plu_esdnf,
        translations: langs_cokkiesd,
        autoDetect: "document"
    }
});    }
}




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
      document.body.style.transition = 'opacity 0.5s';

      setTimeout(function() {   
        document.body.style.opacity = '1';   
      }, 100);
    });



