const body = document.body;
body.oncontextmenu=function() { return false; };


    // Modal
function modal_fs(){
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTxt = document.getElementById('modal-txt');
  const closeModal = document.getElementById('closeModal');


function modalfs_create(imgsrc, imgalt, texty){
modal.style.display = 'block';
 modalTxt.innerHTML=texty;   
 modalImg.alt = imgalt;   
 modalImg.src = imgsrc;   
body.style.overflow="hidden";
clodeclikmm();
}

 closeModal.onclick = function() {
      modal.style.display = 'none';
      modalImg.src = "";
      modalImg.alt = "";
      modalTxt.innerHTML="";
      body.style.overflow="auto";
  }

function clodeclikmm(){
  window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = 'none';
       modalImg.src = "";
       modalImg.alt = "";
       modalTxt.innerHTML="";
       body.style.overflow="auto";
  }    }   }

}


    // Tema claro/escuro
    const toggleThemeBtn = document.getElementById('toggle-theme');
    
    // Verificar preferência do usuário
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-mode');
      toggleThemeBtn.querySelector('span').textContent = 'Claro';
    }
    
    toggleThemeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        toggleThemeBtn.querySelector('span').textContent = 'Claro';
        localStorage.setItem('theme', 'dark');
      } else {
        toggleThemeBtn.querySelector('span').textContent = 'Escuro';
        localStorage.setItem('theme', 'light');
      }
    });
    
    // Executar função do seu script original
    if (typeof run_inruff === 'function') {

    }
    
    // Adicionar efeito de carregamento suave
    window.addEventListener('load', function() {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.5s';
      
      setTimeout(function() {
        document.body.style.opacity = '1';
      }, 100);
    });
