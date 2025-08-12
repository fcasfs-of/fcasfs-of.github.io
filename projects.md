<script>
  var link = document.createElement('link');
    link.rel = 'icon';    link.href = 'favicon.png';     link.type = 'image/png';
    document.head.appendChild(link);
</script>
<script src="https://player.fcasfs-of.cloud-fs.net/app/core.js"></script> 
  
<style>
[href="https://fcasfs-of.cloud-fs.net/"]{  text-align:center;  display:block; }
  
</style>

  <style>
    :root {
      --cor-fundo-claro: #f0f2f5;
      --cor-fundo-escuro: #1e1e1e;
      --cor-texto-claro: #222;
      --cor-texto-escuro: #f0f0f0;
      --cor-principal: #4a90e2;
      --cor-borda: #ddd;
      --botao-cor: #4a90e2;
      --botao-hover: #357ABD;
    }

    body {     user-select: none;
      margin: 0;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: var(--cor-fundo-claro);
      color: var(--cor-texto-claro);
      transition: background-color 0.3s, color 0.3s;
    }

    body.dark {
      background-color: var(--cor-fundo-escuro);
      color: var(--cor-texto-escuro);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: var(--cor-principal);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    header h1 {
      margin: 0;
      font-size: 1.5rem;
      color: #fff;
    }

    .menu-buttons button {
      margin-left: 1rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background-color: #fff;
      color: var(--cor-principal);
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.2s, color 0.2s;
    }

    .menu-buttons button:hover {
      background-color: #e0e0e0;
    }

    main {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .projetos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .projeto-card {
      background-color: #fff;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    body.dark .projeto-card {
      background-color: #2c2c2c;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    }

    .projeto-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .projeto-title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .projeto-descricao {
      flex-grow: 1;
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }

    .info-button {
      padding: 0.5rem 1rem;
      border: none;  margin-bottom:4px;
      border-radius: 4px;
      background-color: #ccc;
      color: #000;
      cursor: pointer;
      font-weight: bold;
      align-self: flex-start;
      transition: background-color 0.2s;
    }

    .info-button:hover {
      background-color: #fff;
    }
    
  img{  pointer-events:none;  } 

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      z-index: 2000;
    }

    .modal.active {
      display: flex;
    }

    .modal-content {
      background-color: #fff;
      color: #222;
      padding: 2rem;
      border-radius: 8px;
      max-width: 600px;
      width: 100%;
      position: relative;
    }

    body.dark .modal-content {
      background-color: #2c2c2c;
      color: #f0f0f0;
    }

    .close-button {
      position: absolute;
      top: 0.5rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: inherit;
    }

    footer {
      padding: 1rem;
      text-align: center;
      font-size: 0.9rem;
      color: #777;
    }

    @media(max-width: 600px){
      header {
        flex-direction: column;
        align-items: flex-start;
      }
      .menu-buttons {
        margin-top: 0.5rem;
      }
    }
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

  <script>

    function ir_pat(gg) {
      location.href = gg; 
    }
    
    function voltarInicio() {
      location.href = 'https://fcasfs-of.cloud-fs.net/'; 
    }

    let temaEscuro = false;
    
    function alternarTema() {
      temaEscuro = !temaEscuro;
      if (temaEscuro) {
        document.body.classList.add('dark');
         localStorage.setItem('tema', 'escuro');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('tema', 'claro');
      }
    }

  if(localStorage.getItem('tema') === 'escuro') {
temaEscuro = true;   document.body.classList.add('dark');
    } else {
  temaEscuro = false;  document.body.classList.remove('dark');
    }
   
   
  </script>
  
<script>   var iversionplayerzz = document.getElementById("versionplayer");  if(app_ver){  if(app_ver!=""){   iversionplayerzz.innerHTML="  ("+app_ver+")";   }   }   </script>
