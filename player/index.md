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

<div style="text-align:center;font-weight:bold;"><h3 id="mpt"></h3></div>

<div id="mpl" style="width:100%;height:100%;"></div>

> <div id="mpd" style="text-align:left;"></div>

<div id="custimmdf"></div>

<br/><br/>

<script>

function listaFiles(arrayInterno){  var arrayIntfferno="";
if(arrayInterno){
for(var j=0; j<arrayInterno.length; j++){
		if(arrayInterno.length > 1){ arrayIntfferno=arrayIntfferno+"<li>"+arrayInterno[j].title+"</li><br/>";
         }        
    }
}  
return arrayIntfferno;  }


  var getfval_tyget=getUrlParameter("fileID");
if (getfval_tyget!="") {
  
  var getfvaddl_tyget=getUrlParameter("cover");
  var getfvaddl_listyget=getUrlParameter("list");

  var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getfval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);

  
  var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent(' function onstart_file(){   var amptar = document.getElementById(\'mpt\');     var ammpdr = document.getElementById(\'mpd\');     var ampmpl = document.getElementById(\'mpl\');    if(typeof run_file==\'function\'){   document.title=\'Player: \'+run_file().file_title+\' - \'+document.title;  ammpdr.innerHTML=run_file().file_desc;  amptar.innerHTML=run_file().file_title;    var linkfromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true";  if(getfvaddl_tyget=="true"){   linkfromd=run_file().cover;  ammpdr.innerHTML="";    }  ampmpl.innerHTML=\'<iframe allowfullscreen width="100%" height="350" allow="Access-Control-Allow-Origin *; accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" scrolling="no" src="\'+linkfromd+\'" style="border: 1px solid black"></iframe>\'; }   if(getfvaddl_tyget=="true"){  ampmpl.innerHTML=\'<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="\'+linkfromd+\'"/></div>\';  }  if(getfvaddl_listyget=="true"){  ampmpl.innerHTML="";  ammpdr.innerHTML=""+listaFiles(run_file().list);  }  }  onstart_file();  '));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file();   };

}
  
</script>

<br/><br/>
