<script>
  var link = link = document.createElement('link');
    link.rel = 'icon';    link.href = 'https://fcasfs-of.cloud-fs.net/Icon/mdpl.png';     link.type = 'image/png';
    document.head.appendChild(link);

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

</script>

## ![](https://fcasfs-of.cloud-fs.net/Icon/mdpl.png)    Media Player

<div style="text-align:center;font-weight:bold;"><h3 id="mpt">Error</h3></div>

<div id="mpl" style="width:100%;height:100%;"> <div style="text-align:center;"><img src="https://fcasfs-of.cloud-fs.net/404.png"/></div> </div>

> <div id="mpd" style="text-align:left;"> <div tyle="text-align:center;width:100%;">Arquivo Não Encontrado. </div></div>

<div id="custimmdf"></div>

<div id="cuspl"></div>


<br/><br/>

<script>

var acusttssr = document.getElementById('cuspl');
acusttssr.innerHTML="";  acusttssr.style.display="none";



var plcustom;

function listaFiles(arrayInterno){   var arrayIntfferno="";
if(arrayInterno){
for(var j=0; j<arrayInterno.length; j++){
		if(arrayInterno.length > 1){ 

var thumfer="";  
if(arrayInterno[j].poster!=""){
thumfer='<img width="150px" src="'+arrayInterno[j].poster+'"/>  ';
}


plcustom = fs_Playerjs({ OSD:false, id:"cuspl", config:{}, nocontrols:1, autoplay:1, loop:0, title:arrayInterno[j].title, file:arrayInterno[j].file });
plcustom.OnEvents("init",function(){
arrayIntfferno=arrayIntfferno+'<li> '+thumfer+"  >  "+arrayInterno[j].title+"  ("+convertSecondsDurationto(plcustom.api("duration"))+") </li>";
});


acusttssr.innerHTML="";  acusttssr.style.display="none";

         }        
    }
}  

acusttssr.innerHTML="";  acusttssr.style.display="none";

return arrayIntfferno;  }


var scriptfddd = document.createElement("script");
    scriptfddd.setAttribute("type", "text/javascript");
    scriptfddd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/app/api.js");
document.getElementsByTagName("head")[0].appendChild(scriptfddd);



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
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent(' function onstart_file(){   var acssr = document.getElementById(\'custimmdf\');  var amptar = document.getElementById(\'mpt\');     var ammpdr = document.getElementById(\'mpd\');     var ampmpl = document.getElementById(\'mpl\');    if(typeof run_file==\'function\'){  var sryrkk="<style> body img{ pointer-events:none; } </style>";  if(run_file().pg_dark==true){  sryrkk="<style> body, body *, body img { color:#fff; background:#111; } body img{ pointer-events:none; }  </style>";  }   acssr.innerHTML=sryrkk;  document.title=\'Player: \'+run_file().file_title+\' - \'+document.title;  ammpdr.innerHTML=run_file().file_desc;  amptar.innerHTML=run_file().file_title;  var linkfroplauemd="https://fcasfs-of.cloud-fs.net/player/?fileID="+getfval_tyget+"";   var linkfrarromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true";   var linkfromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true&fileSelect="+getfvald_tygetsle+"&pos="+getfvald_tygetslpose;  if(getfvaddl_tyget=="true"){   linkfromd=run_file().cover;  ammpdr.innerHTML="";    }  ampmpl.innerHTML=\'<iframe allowfullscreen width="100%" height="350" allow="Access-Control-Allow-Origin *; accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" scrolling="no" src="\'+linkfromd+\'" style="border: 1px solid black"></iframe>\';  amptar.innerHTML="<a href=\'"+linkfrarromd+"\'>"+run_file().file_title+"</a>";   }   if(getfvaddl_tyget=="true"){  ampmpl.innerHTML=\'<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="\'+linkfromd+\'"/></div>\';  }  if(getfvaddl_listyget=="true"){  ampmpl.innerHTML="";  ammpdr.innerHTML=""+listaFiles(run_file().list);  } if(getfvadinf_listyget=="true"){  ampmpl.innerHTML=\'<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="\'+run_file().cover+\'"/></div>\';  amptar.innerHTML="<a href=\'"+linkfroplauemd+"\'>"+run_file().file_title+"</a>";  ammpdr.innerHTML=ammpdr.innerHTML+"<br/><br/>"+listaFiles(run_file().list);  }   }  onstart_file();  '));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file();   };

}
  
</script>

<br/><br/>
