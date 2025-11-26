

function voltarAoTopo() {  window.scrollTo({top: 0,behavior: 'smooth'});  }


var arquivos = [];
var arquivos_al="";    var idarquivo="";

function onfdstart_file(run_file,gg){    
if(typeof run_file=='function' && gg && gg!=""){  
  
var arquivos_listr=[];   var arquivos_lisgtr=0;
  if(run_file().list){
    arquivos_lisgtr=run_file().list.length;
for(var j=0; j<run_file().list.length; j++){
  arquivos_listr[j]={
dark: run_file().pg_dark, miniatura: run_file().list[j].poster, titulor:run_file().file_title, titulo:run_file().list[j].title, descricao:"", 
link: "https://fcasfs-of.cloud-fs.net/player/?fileID="+gg+"&select="+(j+1), playlist:[], listtotl:0, id:gg, select:""+(j+1)
  };
}  }
  
arquivos.push({
dark: run_file().pg_dark, miniatura: run_file().cover, titulo:run_file().file_title, descricao:run_file().file_desc, 
link: "https://fcasfs-of.cloud-fs.net/player/?fileID="+gg+"",
playlist:arquivos_listr, listtotl:arquivos_lisgtr, id:gg, select:"1"
});
}   }


 const listaContainer = document.getElementById('listaArquivos');
   const listtitlr = document.getElementById('mpt');

  const listpreview_fleer = document.getElementById('preview_fle');


  function deleteite() {  listpreview_fleer.innerHTML="";   }   
  
  function criarItem(arquivo) {    
    const div = document.createElement('div');
    div.className = 'arquivo';
    div.innerHTML = `     <img src="${arquivo.miniatura}" class="miniatura" />      <div class="titulo">${arquivo.titulo}</div>    `;
    div.onclick = () => {    
      var darkthevv="";          if(arquivo.dark==true){ darkthevv=" dark"; }
    listpreview_fleer.innerHTML="";     var styelcopsdsd="";
var contednfgile= `  ` ;
     if(arquivo.playlist && arquivo.listtotl == 1 || arquivo.listtotl == 0){     getfval_tyget=arquivo.id; 	 getfvald_tygetsle=arquivo.select;  getfvalddd_tyget="0";  
																			
  var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
	scriptfd.setAttribute("id", "fileplayer_fd");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getfval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);

  function remover_id_playerfile(){  var infilefaz = document.getElementById("fileplayer_fd");     if(infilefaz){   infilefaz.remove();   }    		  }

 voltarAoTopo();

  var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent('    onstart_file(run_file);  remover_id_playerfile();   '));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file(run_file);   remover_id_playerfile();     };

 }
     else if(arquivo.playlist && arquivo.listtotl > 1){ 
    styelcopsdsd=' style=" overflow: auto;  "';
    listtitlr.innerHTML=''+arquivo.titulo+''; 
  listaContainer.innerHTML = '<div class="lista-arquivos" id="listaAffrquivos"></div>';}
    listpreview_fleer.innerHTML="";     
      if(arquivo.playlist && arquivo.listtotl > 1){  
    const llistaAffrquivosfleer = document.getElementById('listaAffrquivos');
   arquivo.playlist.forEach(arqudivo => {  llistaAffrquivosfleer.appendChild(criarItem(arqudivo));   });    

voltarAoTopo();

	  listpreview_fleer.innerHTML='<button class="botao-voltar" onclick="restart_itendf();">  <svg class="icone-voltar" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15 18l-6-6 6-6v12z"/></svg>  </button>';     }   
      
    };
    return div;
  }

  function renderizarLista(lista) {
    listaContainer.innerHTML = '';     
    if(lista){
     lista.forEach(arquivo => {  listaContainer.appendChild(criarItem(arquivo));   });   
    }
  }


function restart_itendf(){    arquivos = [];
	listaContainer.innerHTML = '';     listpreview_fleer.innerHTML="";     
	listtitlr.innerHTML='<div class="search-container">  <input type="text" id="searchInput" placeholder="Buscar por título..."/>   </div>'; 
	loaded_itenf(mdpl_fielsd);     	loaded_filesa();
}


function loaded_itenf(mdpl_fielsd){  
  if(mdpl_fielsd){
    for (var i = 0; i < mdpl_fielsd.length; i++) {
idarquivo=mdpl_fielsd[i];
 
var scriptfd = document.createElement("script");
    scriptfd.setAttribute("id", "fileplffayer_fd");
    scriptfd.setAttribute("onload", "onfdstart_file(run_file,\""+idarquivo+"\");renderizarLista(arquivos);  run_file=\"\";    ");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+idarquivo+".js");
document.getElementsByTagName("head")[0].appendChild(scriptfd);

var infilefaz = document.getElementById("fileplffayer_fd");     if(infilefaz){   infilefaz.remove();   }   
     
    }
  }   
     var infiddlefdaz = document.getElementById("fileplffggayer_fd");     if(infiddlefdaz){   infiddlefdaz.remove();   }   

}

function loaded_filesa(){

  const inputBusca = document.getElementById('searchInput');
  inputBusca.addEventListener('input', () => {
    const termo = inputBusca.value.toLowerCase();
    const filtrados = arquivos.filter(arquivo =>  arquivo.titulo.toLowerCase().includes(termo));
    renderizarLista(filtrados);
  });

}



var link = document.createElement('link');
    link.rel = 'icon';    link.href = 'https://fcasfs-of.cloud-fs.net/Icon/mdpl.png';     link.type = 'image/png';
    document.head.appendChild(link);


 var scrlipftfd2 = document.createElement("link");
    scrlipftfd2.setAttribute("rel", "stylesheet");
    scrlipftfd2.setAttribute("href", "theme.css");
document.getElementsByTagName("head")[0].appendChild(scrlipftfd2);




function closemofl() {       var momocsifipsl = document.getElementById("custimmdf");  momocsifipsl.innerHTML = "";      
 document.body.style.overflow="auto";
  }
function copenemofl(dsds,dsdds,mm,ll) {       var momocsifipsl = document.getElementById("custimmdf");  momocsifipsl.innerHTML = "";    if(dsdds && dsdds!="" && dsds && dsds!=""){ momocsifipsl.innerHTML = ' <div class="modal" style="display:block;color:#000;">  <span class="bngd">  <span style="margin-left:4px;" class="ssclose" onclick="'+dsdds+'closemofl();" data-tooltip="'+mm+'" data-flow="left"><span class="icon"></span></span></span>       <div style="overflow:auto;" class="modal-content" id="imdsdsfg01">'+dsds+'</div><br/><br/></div>';   
if(ll && ll=="yes") {  document.body.style.overflow="hidden";  }                                                                                                                                                                  
 }
  }

function dmodal(dsds,dsdds,mm,kk,pp) {
    if(dsdds && dsdds!="" && dsds && dsds!=""){
copenemofl(`<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;" class="">${dsds}</h1>  <div style="text-align:center;  color:#fff; "><br/>${dsdds}</div><br/><br/><br/>`,"  ",mm,pp); 
}   }

function cmodal(dsds,dsdds,mm,kk,pp) {
    if(dsdds && dsdds!="" && dsds && dsds!=""){
copenemofl(`<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;" class="">${dsds}</h1>  <div style="text-align:center;  color:#fff; "><br/><iframe allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation"  frameborder="0" allowfullscreen src="${dsdds}" style="width:100%; height:${Number(kk)}px;"></iframe></div><br/><br/><br/>`,"  ",mm,pp); 
}   }



  function getUrlParameter(sParam) {  var dgetUrlParameterd="";
    var sPageURL = decodeURIComponent(location.href);//window.location.search.substring(1));
   if(sPageURL.split('?')){
       var sURLVariables = sPageURL.split('?')[1].split('&');
       if(sPageURL.split('?')[1].split('&')){
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if(sURLVariables[i].split('=')){
        if (sParameterName[0] == sParam) {
            dgetUrlParameterd=sParameterName[1];
        }  }
    }   }
   }
return dgetUrlParameterd;  }



function openlinkf(title,url,mn){    cmodal('<span class=\'adsrow\'> '+title+'</span>',url,'Close',mn,'yes');  } 


function listaFiles(arrayInterno, link){   var arrayIntfferno="";  

if(link!=""){
if(arrayInterno){

if(arrayInterno.length > 1){  arrayIntfferno=arrayIntfferno+"<br/><hr/>";  }

for(var j=0; j<arrayInterno.length; j++){
		if(arrayInterno.length > 1){ 

var thumfer="";   
if(arrayInterno[j].poster!=""){
thumfer='<img width="150px" src="'+arrayInterno[j].poster+'"/>  ';
}

arrayIntfferno=arrayIntfferno+'<li style="user-select:none;"  onclick="openlinkf(\''+arrayInterno[j].title+'\',\''+link+'&fileSelect='+(j+1)+'\',\'360\');"> '+thumfer+" >  "+arrayInterno[j].title+"  </li>";
			
         }        } 
    }
}  

return arrayIntfferno;  }



loaded_filesa();  

  var getfval_tyget=getUrlParameter("fileID");
	
if (getfval_tyget!="") {
	
  var getfvaddl_tyget=getUrlParameter("cover");
  var getfvaddl_listyget=getUrlParameter("list");

var getfvadinf_listyget=getUrlParameter("info");


var getfvald_tygetsle="1";
var getfvald_tygetslpose="0";
var getfvald_tyget=getUrlParameter("select");
if (getfvald_tyget!="") {
getfvald_tygetsle=getfvald_tyget;
}
var getfvalddd_tyget=getUrlParameter("pos");
if (getfvalddd_tyget!="") {
getfvald_tygetslpose=getfvalddd_tyget;
}


  var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
	scriptfd.setAttribute("id", "fileplayer_fd");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getfval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);

  function remover_id_playerfile(){  var infilefaz = document.getElementById("fileplayer_fd");     if(infilefaz){   infilefaz.remove();   }    		  }

 
  var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent('    onstart_file(run_file);  remover_id_playerfile();   '));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file(run_file);   remover_id_playerfile();     };

}   


