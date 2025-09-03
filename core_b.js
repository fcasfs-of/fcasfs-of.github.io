 var scrlipftfd2 = document.createElement("link");
    scrlipftfd2.setAttribute("rel", "stylesheet");
    scrlipftfd2.setAttribute("href", "core_b.css");
document.getElementsByTagName("head")[0].appendChild(scrlipftfd2);



function run_inruff(){

  const bfutton = document.getElementById('toggle-theme');
  const body = document.body;

  bfutton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      bfutton.textContent = 'Modo Claro';
 localStorage.setItem('tema', 'escuro');
    } else {
      bfutton.textContent = 'Modo Escuro';        
localStorage.setItem('tema', 'claro');  
    }
  });
  
  
  if(localStorage.getItem('tema') === 'escuro') {
   body.classList.add('dark');   
  bfutton.textContent = 'Modo Claro';
    } else {
   body.classList.remove('dark');   
  bfutton.textContent = 'Modo Escuro';  
    }

}


