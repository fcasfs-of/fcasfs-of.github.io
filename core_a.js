
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
   
   
