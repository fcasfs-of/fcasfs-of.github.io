function onstart_file(run_file){    
  var acssr = document.getElementById('cutompll');   
  var amptar = document.getElementById('mpt'); 
  var ammpdr = document.getElementById('mpd'); 
  var ampmpl = document.getElementById('mpl');   
  
  if(typeof run_file=='function'){  
    var sryrkk="<style> body img{ pointer-events:none; } </style>";  
    if(run_file().pg_dark==true){  
      sryrkk="<style> body, body img, .markdown-body { color:#fff; background:#111; }  .markdown-body h2 img, .markdown-body h2{   color:#fff;  background:#111;  background-color:#111;   } body img{ pointer-events:none; }  </style>";  
    }  
    acssr.innerHTML=sryrkk;  
    document.title='Player: '+run_file().file_title+' - '+document.title;  
    ammpdr.innerHTML=run_file().file_desc;  
    amptar.innerHTML=run_file().file_title;  
    var linkfroplauemd="https://fcasfs-of.cloud-fs.net/player/?fileID="+getfval_tyget+"";   
    var linkfrarromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true";  
    var linkfromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true&fileSelect="+getfvald_tygetsle+"&pos="+getfvald_tygetslpose; 
    if(getfvaddl_tyget=="true"){   linkfromd=run_file().cover;  ammpdr.innerHTML="";    }  
    ampmpl.innerHTML='<iframe allowfullscreen width="100%" height="350" allow="Access-Control-Allow-Origin *; accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" scrolling="no" src="'+linkfromd+'" style="border: 1px solid black"></iframe>';  
    amptar.innerHTML="<a href='"+linkfrarromd+"'>"+run_file().file_title+"</a>"; 
    }  
    if(getfvaddl_tyget=="true"){  
      ampmpl.innerHTML='<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="'+linkfromd+'"/></div>';  
    }  
    if(getfvaddl_listyget=="true"){  
      ampmpl.innerHTML="";  
      ammpdr.innerHTML=""+listaFiles(run_file().list, linkfrarromd);  
    } 
    if(getfvadinf_listyget=="true"){   
      amptar.innerHTML="<a href='"+linkfroplauemd+"'>"+run_file().file_title+"</a>";  
      ammpdr.innerHTML=ammpdr.innerHTML+""+listaFiles(run_file().list, linkfrarromd);  
      ampmpl.innerHTML='<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="'+run_file().cover+'"/></div>';  
    } 
}  


