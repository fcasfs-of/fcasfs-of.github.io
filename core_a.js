
 var scrlipftfd2 = document.createElement("link");
    scrlipftfd2.setAttribute("rel", "stylesheet");
    scrlipftfd2.setAttribute("href", "core_a.css");
document.getElementsByTagName("head")[0].appendChild(scrlipftfd2);



    function ir_pat(gg) {
      location.href = gg; 
    }
    
    function voltarInicio() {
      location.href = 'https://fcasfs-of.cloud-fs.net/'; 
    }



    let temaEscuro = false;

    function alternarTema() {
      if (temaEscuro) {
        document.body.classList.add('dark');
         localStorage.setItem('tema', 'escuro');
temaEscuro = false;
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('tema', 'claro');
temaEscuro = true;
      }
    }




function ir_runtt() {
    
  if(localStorage.getItem('tema') === 'escuro') {
temaEscuro = true;   document.body.classList.add('dark');
    } else {
  temaEscuro = false;  document.body.classList.remove('dark');
    }
   
 }

  
