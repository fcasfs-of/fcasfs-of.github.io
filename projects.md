<script>
  var link = document.createElement('link');
    link.rel = 'icon';    link.href = 'favicon.png';     link.type = 'image/png';
    document.head.appendChild(link);
</script>
<script src="https://player.fcasfs-of.cloud-fs.net/app/core.js"></script> 
  
<style>
[href="https://fcasfs-of.cloud-fs.net/"]{  text-align:center;  display:block; }
  
</style>

  
<header>
<h1>My Projects</h1>
<div class="menu-buttons">
<button onclick="voltarInicio()">Return Home Page</button>
<button onclick="alternarTema()">Theme</button>
</div>
</header>


  <main>
    <div class="projetos" id="lista-projetos">

<div class="projeto-card">
  <div class="projeto-title"> <img src="https://fcasfs-of.cloud-fs.net/Icon/mdpl.png"/> <br/> Player: Audio, Imagem e Video  <span id="versionplayer"></span>  </div>
  <div class="projeto-descricao"> Our player offers an immersive and intuitive media experience designed to meet all your digital entertainment needs. <br/>With a modern and functional design, it allows you to play, pause and control your favorite tracks and videos with ease.  <br/><br/>
<button onclick="ir_pat('https://player.fcasfs-of.cloud-fs.net/');" class="info-button"> <img src="https://fcasfs-of.cloud-fs.net/Icon/br.png"/>  Portuguese</button>
<button onclick="ir_pat('https://player.fcasfs-of.cloud-fs.net/en');" class="info-button"> <img src="https://fcasfs-of.cloud-fs.net/Icon/en.png"/>  English</button>
</div>
<button onclick="ir_pat('https://fcasfs-of.cloud-fs.net/projects/test/mdpl');" class="info-button"> Take the Test right now </button>
<button onclick="ir_pat('https://fcasfs-of.cloud-fs.net/player/search');" class="info-button"> Search Page </button>

</div>

</div>
  </main>

<footer>
Todos os direitos reservados.
</footer>

<br/><br/>

<script src="core_a.js"></script>
  
<script>   var iversionplayerzz = document.getElementById("versionplayer");  if(app_ver){  if(app_ver!=""){   iversionplayerzz.innerHTML="  ("+app_ver+")";   }   }   </script>
