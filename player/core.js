 var link = document.createElement('link');
    link.rel = 'icon';    link.href = 'https://fcasfs-of.cloud-fs.net/Icon/mdpl.png';     link.type = 'image/png';
    document.head.appendChild(link);



  var scrliptfd2 = document.createElement("link");
    scrliptfd2.setAttribute("rel", "stylesheet");
    scrliptfd2.setAttribute("href", "https://fcasfs-of.cloud-fs.net/info-profile/theme/tooltip.css");
document.getElementsByTagName("head")[0].appendChild(scrliptfd2);


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



function progress_valo(mumh) {  var mumhf=0;    
if(mumh){   mumhf=mumh;
if(mumh<=9){  mumhf="0"+mumh;  }
}
return mumhf;  }



function progressScript(idf,ll) {
    const progress = (idf.value / idf.max) * 100;
  ll.textContent = progress_valo(idf.value);
  idf.style.background = `linear-gradient(to right, #4682B4 ${progress}%, #ccc ${progress}%)`;
 }

function progressScriptfile(oper,valks){
  const sliderEl = document.querySelector(oper);
const sliderValue = document.querySelector(valks);
sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = progress_valo(tempSliderValue);
  const progress = (tempSliderValue / sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, #4682B4 ${progress}%, #ccc ${progress}%)`;
});
 progressScript(sliderEl,sliderValue);
}




