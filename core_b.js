function add_itens_fr(id, op){   var dadd_itens_fra="";   var dadd_itens_fra_co = { class:"" };
if (id!="" && op){
const idfadd_itens_fr = document.getElementById(id);
 var dad_icond_itens_fra="";    var dalickstens_fra=""; 
    
if(op.config){
   if (op.config.class!=""){   dadd_itens_fra_co["class"]=op.config.class;   }
}

if(op.links){
    if(op.links.length>=1){
    dalickstens_fra='<div class="'+dadd_itens_fra_co["class"]+'-links">'; 
    for (let i = 0; i < op.links.length; i++) {
        if(op.links[i]!=""){    dalickstens_fra=dalickstens_fra+op.links[i];    }
    }
    dalickstens_fra=dalickstens_fra+"</div>";
    }
}
    
  if (op.icon!=""){      dad_icond_itens_fra='<div class="'+dadd_itens_fra_co["class"]+'-icon">'+op.icon+'</div>';     } 
    
  if (op.title!="" && op.desc!=""){
      dadd_itens_fra='<div class="'+dadd_itens_fra_co["class"]+'">'+dad_icond_itens_fra+'<h2>'+op.title+'</h2><p>'+op.desc+'</p>'+dalickstens_fra+'</div>';   
  } 

idfadd_itens_fr.innerHTML=dadd_itens_fra;
}
}




const body = document.body;
body.oncontextmenu=function() { return false; };



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
