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
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getfval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);

  
 
  var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent(' onstart_file(run_file);  '));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file(run_file);   };

}


