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
<h1>Meus Projetos</h1>
<div class="menu-buttons">
<button onclick="voltarInicio()">Voltar à Página Inicial</button>
<button onclick="alternarTema()">Tema</button>
</div>
</header>


  <main>
    <div class="projetos" id="lista-projetos">

<div class="projeto-card">
  <div class="projeto-title"> <img src="https://fcasfs-of.cloud-fs.net/Icon/mdpl.png"/> <br/> Player: Audio, Imagem e Video  <span id="versionplayer"></span>  </div>
  <div class="projeto-descricao"> Nosso player oferece uma experiência de mídia imersiva e intuitiva, projetada para atender a todas as suas necessidades de entretenimento digital. <br/>Com um design moderno e funcional, ele permite que você reproduza, pause e controle suas faixas e vídeos favoritos com facilidade.  <br/><br/>
<button onclick="ir_pat('https://player.fcasfs-of.cloud-fs.net/');" class="info-button"> <img src="https://fcasfs-of.cloud-fs.net/Icon/br.png"/>  Português</button>
<button onclick="ir_pat('https://player.fcasfs-of.cloud-fs.net/en');" class="info-button"> <img src="https://fcasfs-of.cloud-fs.net/Icon/en.png"/>  Inglês</button>
</div>
<button onclick="ir_pat('https://fcasfs-of.cloud-fs.net/projects/test/mdpl-br');" class="info-button"> Faça o Teste agora mesmo </button>
<button onclick="ir_pat('https://fcasfs-of.cloud-fs.net/player/busca');" class="info-button"> Página de Pesquisa </button>

</div>

</div>
  </main>

<footer>
Todos os direitos reservados.
</footer>

<br/><br/>

<script src="core_a.js"></script>

<script>   var iversionplayerzz = document.getElementById("versionplayer");  if(app_ver){  if(app_ver!=""){   iversionplayerzz.innerHTML="  ("+app_ver+")";   }   }   </script>
