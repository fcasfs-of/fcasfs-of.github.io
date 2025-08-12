<script src="core.js"></script>

<style>
[href="https://fcasfs-of.cloud-fs.net/"]{  text-align:center;  display:block; }
  
</style>
<style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f0f2f5;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }

    .fcontainer {
      background-color: #ffffff;
      padding: 40px 30px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      width: 90%;
      max-width: 600px;
      transition: box-shadow 0.3s ease;
    }

    .fcontainer:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #333;
      text-align: center;
    }

    .form {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    input[type="text"] {
      flex: 1;
      padding: 14px 20px;
      font-size: 1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      transition: border-color 0.3s, box-shadow 0.3s;
    }

    input[type="text"]:focus {
      border-color: #007bff;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
      outline: none;
    }

    .button {
      padding: 14px 20px;
      font-size: 1rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }

    .button:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    /* Estilos responsivos */
    @media (max-width: 500px) {
      .form {
        flex-direction: column;
      }
      
      .button {
        width: 100%;
      }
    }
</style>

<div class="fcontainer">
<h1>Página de Pesquisa</h1>
<div class="form">

<div class="llk" style="width: 100%;  text-align: center;">
<form class="busca" action="https://fcasfs-of.cloud-fs.net/player/">
  <input type="text" value="" placeholder="ID..." id="textidf" name="fileID"/>
  <label class="container" data-tooltip="Visualização" data-flow="top">
    <input type="checkbox" checked="true" valeu="true" name="fileView"/>
    <span class="checkmark"></span></label>
  <label class="range" data-tooltip="Posição" data-flow="bottom"><span>  </span>
    <input type="range" min="1" max="99" value="1" name="select" id="fileSelect"/>
    <span class="value" style="color:#000;"></span>
  </label>
  <button type="submit" value="Buscar">Buscar</button>
</form>
</div>

</div>

</div>

<script>
  progressScriptfile("#fileSelect",".value");
</script>

<br/><br/>
