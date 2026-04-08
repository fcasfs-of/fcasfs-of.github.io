
function onstart_file(run_file){     
var playlistData = [];
            
  var acssr = document.getElementById('cutompll');   
        const mainVideo = document.getElementById('main-video');
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');
        const playlistContainer = document.getElementById('playlist');
        const playlistTotal = document.getElementById('playlisttotal');
        const pfielidtile = document.getElementById('titlemfpf');


function changeVideo(playlistData,videoId) {
            const video = playlistData.find(v => v.id === videoId);
            if (!video) return;
            
            mainVideo.src = `https://player.fcasfs-of.cloud-fs.net/${run_file().player_lang}?fileID=${getfval_tyget}&fileView=true&select=${video.videoId}`;
            
            videoTitle.textContent = video.title;
            videoDescription.textContent = video.description;
            
            playlistData.forEach(v => v.active = v.id === videoId);
            
            document.querySelectorAll('.playlist-item').forEach(item => {
                if (parseInt(item.dataset.id) === videoId) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
            
            if (window.innerWidth < 992) {
                document.querySelector('.video-section').scrollIntoView({ behavior: 'smooth' });
            }
}

function loadPlaylist(playlistData) {
            playlistContainer.innerHTML = '';
            playlistTotal.innerHTML = '';

            playlistData.forEach(video => {
                const playlistItem = document.createElement('div');
                playlistItem.className = `playlist-item ${video.active ? 'active' : ''}`;
                playlistItem.dataset.id = video.id;
                
                playlistItem.innerHTML = `
                    <div class="playlist-item-thumb">
                        <img src="${video.thumb}" alt="${video.title}">
                    </div>
                    <div class="playlist-item-info">
                        <h3 class="playlist-item-title">${video.title}</h3>
                        <p class="playlist-item-duration"></p>
                    </div>
                `;
                
                playlistItem.addEventListener('click', () => changeVideo(playlistData,video.id));
                playlistContainer.appendChild(playlistItem);

                if(video.active==true){  changeVideo(playlistData,video.id);  }
            });
            
            var playlistItemsd="";  if(playlistData.length>=2){  playlistItemsd="s";  }
             playlistTotal.innerHTML = playlistData.length+' Video'+playlistItemsd;

}
            

            
  if(typeof run_file=='function'){  
    var sryrkk="<style>  .markdown-body blockquote #mpd, #mpd { color:#000;  }   body img{ pointer-events:none; } </style>";  
    if(run_file().pg_dark==true){  
      sryrkk="<style> .markdown-body blockquote #mpd, #mpd { color:#fff;  }  body, body img, .markdown-body div, .markdown-body blockquote, .markdown-body h3, .markdown-body h3 a { color:#fff; background:#111; }  .markdown-body h2 img, .markdown-body h2{   color:#fff;  background:#111;  background-color:#111;   } body img{ pointer-events:none; }  </style>";  
    }  
    acssr.innerHTML=sryrkk;  
    document.title='Player: '+run_file().file_title+' - '+document.title;  
    videoDescription.innerHTML=run_file().file_desc;  
    pfielidtile.innerHTML='Player: '+run_file().file_title+'';  
    var linkfroplauemd="https://fcasfs-of.cloud-fs.net/player/?fileID="+getfval_tyget+"";   
    var linkfrarromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true";  
    var linkfromd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+getfval_tyget+"&fileView=true&fileSelect="+getfvald_tygetsle+"&pos="+getfvald_tygetslpose; 
    if(getfvaddl_tyget=="true"){   linkfromd=run_file().cover;  
    //ammpdr.innerHTML="";  
 }  
    
  var checjfdk=false;
   for(var j=0; j<run_file().list.length; j++){
    checjfdk=false;  if(j==0){   checjfdk=true;  }
 playlistData[j]={
                id:j,
                title: run_file().list[j].title,
                description: run_file().file_desc,
                videoId: ""+(j+1)+"",
                duration: "",
                views: "",
                date: "",
                category: "",
                thumb: run_file().list[j].poster,
                active: checjfdk
            };
   }

            loadPlaylist(playlistData);
            const currentVideo = playlistData.find(v => v.active);
            if (currentVideo) {
                document.querySelector('.video-meta').innerHTML = ``;
            }  
              
    //ampmpl.innerHTML='<iframe allowfullscreen width="100%" height="350" allow="Access-Control-Allow-Origin *; accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation" frameborder="0" scrolling="no" src="'+linkfromd+'" style="border: 1px solid black"></iframe>';  
    //amptar.innerHTML="<a href='"+linkfrarromd+"'>"+run_file().file_title+"</a>"; 
    }  
    if(getfvaddl_tyget=="true"){  
      //ampmpl.innerHTML='<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="'+linkfromd+'"/></div>';  
    }  
    if(getfvaddl_listyget=="true"){  
      //ampmpl.innerHTML="";  
      //ammpdr.innerHTML=""+listaFiles(run_file().list, linkfrarromd);  
    } 
    if(getfvadinf_listyget=="true"){   
      //amptar.innerHTML="<a href='"+linkfroplauemd+"'>"+run_file().file_title+"</a>";  
      //ammpdr.innerHTML=ammpdr.innerHTML+""+listaFiles(run_file().list, linkfrarromd);  
      //ampmpl.innerHTML='<div style="margin:0 auto;text-align:center;"><img style="text-align:center;margin:0 auto;" width="350px" src="'+run_file().cover+'"/></div>';  
    } 

            
}  


