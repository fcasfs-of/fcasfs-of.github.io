
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

    function alternarTema(igf) {
 var text_q1the='Tema Claro';
 var text_q2the='Tema Escuro';
 if(igf && igf=="en"){
  text_q1the='Theme Light';
  text_q2the='Theme Dark';
 }
     const btngg = document.getElementById('btnthe');
temaEscuro = !temaEscuro;
      if (temaEscuro) {
        document.body.classList.add('dark');
        localStorage.setItem('tema', 'escuro');
        btngg.textContent = text_q1the;
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('tema', 'claro');    
        btngg.textContent = text_q2the;
      }
    }




function ir_runtt(igf) {
 var text_q1the='Tema Claro';
 var text_q2the='Tema Escuro';
 if(igf && igf=="en"){
  text_q1the='Theme Light';
  text_q2the='Theme Dark';
 }

  const bthngg = document.getElementById('btnthe');
  if(localStorage.getItem('tema') === 'escuro') {
temaEscuro = true;   document.body.classList.add('dark');   bthngg.textContent = text_q1the;
    } else {
  temaEscuro = false;  document.body.classList.remove('dark');   bthngg.textContent = text_q2the;
    }
   
 }

  
