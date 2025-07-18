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

#### ![](https://fcasfs-of.cloud-fs.net/Icon/mdpl.png) <br/> Media Player: ***<span id="mpt"></span>***

<div id="mpl"></div>


<script>
  var amptar = document.getElementById('mpt');      var ampmpl = document.getElementById('mpl');

  var getfval_tyget=getUrlParameter("fileID");
if (getfval_tyget!="") {

  var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent('function onstart_file(){  if(typeof run_file==\'function\'){    amptar.innerHTML=run_file().file_title;   ampmpl.innerHTML=\'<iframe allowfullscreen width="100%" height="350" allow="Access-Control-Allow-Origin *; accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" scrolling="no" src="https://player.fcasfs-of.cloud-fs.net/en?fileID=\'+getfval_tyget+\'&fileView=true" style="border: 1px solid black"></iframe>\'; }   }  onstart_file();  '));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file();   };

}
  
</script>
  
<br/><br/>
