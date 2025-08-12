<script>
  var link = document.createElement('link');
    link.rel = 'icon';    link.href = 'favicon.png';     link.type = 'image/png';
    document.head.appendChild(link);
</script>

<style>
[href="https://fcasfs-of.cloud-fs.net/"]{  text-align:center;  display:block; }
  
</style>

<style>
  :root {
    --background-color: #f0f0f0;
    --text-color: #222;
    --card-background: #ffffff;
    --border-color: #ddd;
    --hover-background: #f9f9f9;

    --dark-background-color: #1e1e1e;
    --dark-text-color: #ddd;
    --dark-card-background: #2c2c2c;
    --dark-border-color: #444;
    --dark-hover-background: #333;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: background-color 0.3s, color 0.3s;
  }

  body.dark {
    background-color: var(--dark-background-color);
    color: var(--dark-text-color);
  }

  header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    border-bottom: 1px solid var(--border-color);
    transition: background-color 0.3s, border-color 0.3s;
  }

  h1 {
    margin: 0;
    font-size: 1.8em;
  }

  button#toggle-theme {
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s;
  }

  button#toggle-theme:hover {
    background-color: #0056b3;
  }

  main {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .page-card {
    background-color: var(--card-background);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    width: 250px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
  }

  body.dark .page-card {
    background-color: var(--dark-card-background);
    border-color: var(--dark-border-color);
  }

  .page-card:hover {
    background-color: var(--hover-background);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  body.dark .page-card:hover {
    background-color: var(--dark-hover-background);
  }

  .page-title {
    margin: 0 0 10px 0;
    font-size: 1.2em;
  }

  .page-link {   margin-right:5px; 
    display: inline-block;
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .page-link:hover {
    background-color: #ccc;  color:#000;     text-decoration: none;
  }

  @media(max-width: 600px) {
    main {
      justify-content: center;
    }

    .page-card {
      width: 100%;
      max-width: 300px;
    }
  }
</style>



<main>
<div class="page-card">
<h2 class="page-title">Portfolio</h2>
<p>
<img src="https://fcasfs-of.cloud-fs.net/Icon/info.png"/>     
</p>
<a class="page-link" href="https://fcasfs-of.cloud-fs.net/info-profile/"> <img src="https://fcasfs-of.cloud-fs.net/Icon/br.png"/>  Português</a>
<a class="page-link" href="https://fcasfs-of.cloud-fs.net/info-profile-en/"> <img src="https://fcasfs-of.cloud-fs.net/Icon/en.png"/>  English</a>
</div>
<div class="page-card">
<h2 class="page-title">Projetos</h2>
<p></p>
<a class="page-link" href="https://fcasfs-of.cloud-fs.net/projects-pt"> <img src="https://fcasfs-of.cloud-fs.net/Icon/br.png"/>  Português</a>
<a class="page-link" href="https://fcasfs-of.cloud-fs.net/projects"> <img src="https://fcasfs-of.cloud-fs.net/Icon/en.png"/>  English</a>
</div>

</main>

<br/><br/>

<script>
  const button = document.getElementById('toggle-theme');
  const body = document.body;

  button.addEventListener('click', () => {
   // body.classList.toggle('dark');
    //if (body.classList.contains('dark')) {
    //  button.textContent = 'Modo Claro';
// localStorage.setItem('tema', 'escuro');
    //} else {
     // button.textContent = 'Modo Escuro';        localStorage.setItem('tema', 'claro');  
    //}
  });
  
  
  if(localStorage.getItem('tema') === 'escuro') {
  // body.classList.add('dark');   button.textContent = 'Modo Claro';
    } else {
   //body.classList.remove('dark');      button.textContent = 'Modo Escuro';  
    }
    
</script>

