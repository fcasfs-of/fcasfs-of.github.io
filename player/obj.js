  var link = document.createElement('link');
    link.rel = 'icon';    link.href = 'https://fcasfs-of.cloud-fs.net/Icon/mdpl.png';     link.type = 'image/png';
    document.head.appendChild(link);



  var scrliptfd2 = document.createElement("link");
    scrliptfd2.setAttribute("rel", "stylesheet");
    scrliptfd2.setAttribute("href", "https://fcasfs-of.cloud-fs.net/info-profile/theme/tooltip.css");
document.getElementsByTagName("head")[0].appendChild(scrliptfd2);
  var scrliptfdu = document.createElement("link");
    scrliptfdu.setAttribute("rel", "stylesheet");
    scrliptfdu.setAttribute("href", "https://fcasfs-of.cloud-fs.net/info-profile/style_2.css");
document.getElementsByTagName("head")[0].appendChild(scrliptfdu);

var scrliptfd1 = document.createElement("link");
    scrliptfd1.setAttribute("rel", "stylesheet");
    scrliptfd1.setAttribute("href", "https://fcasfs-of.cloud-fs.net/info-profile/theme/modal.css");
document.getElementsByTagName("head")[0].appendChild(scrliptfd1);
 var scriptfd1 = document.createElement("script");
    scriptfd1.setAttribute("type", "text/javascript");
    scriptfd1.setAttribute("src", "https://fcasfs-of.github.io/info-profile/scripts/modal.js");
document.getElementsByTagName("head")[0].appendChild(scriptfd1);



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


arrayIntfferno=arrayIntfferno+'<li> <a href="'+link+'&select='+(j+1)+'">'+thumfer+" >  "+arrayInterno[j].title+" </a>  </li>";

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


