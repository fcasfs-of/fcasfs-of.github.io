
const newDilofv = document.createElement("div");
newDilofv.id = "loaderfs";
newDilofv.className ="loaderffs";
document.body.appendChild(newDilofv);

function showPage() {
  document.getElementById("loaderfs").style.display = "none";
}



function create_tooltipr(op){    var create_infoxrs="";   
 if (op){
   if (op.text && op.text!=""){  
    var create_infoxrcolor="";    var dcreate_infoxrcolor="top"; 
     if (op.visible && op.visible==true){   create_infoxrcolor=' data-ver="true"';   }
     if (op.pos && op.pos!=""){   dcreate_infoxrcolor=""+op.pos;   }
   create_infoxrs=' data-tooltip="'+op.text+'" data-flow="'+dcreate_infoxrcolor+'"'+create_infoxrcolor;
   }
 }
return create_infoxrs;  }


function create_infoxr(op){    var create_infoxrs="";   
 if (op){
   if (op.text && op.text!=""){  
   var create_infoxrcolorid="";    var create_infoxrcolor="";   var create_infsixeolor="10px";    var dcreate_infoxrcolor=""; 
     if (op.color && op.color!=""){   create_infoxrcolor=" "+op.color;   }
     if (op.pos && op.pos!=""){   dcreate_infoxrcolor=" "+op.pos;   }
     if (op.size && op.size!=""){   create_infsixeolor=" "+op.size;   }
     if (op.id && op.id!=""){   create_infoxrcolorid=" id='"+op.id+"'";    }
   create_infoxrs='<div class="ribbon'+dcreate_infoxrcolor+create_infoxrcolor+'"><span'+create_infoxrcolorid+' style="font-size: '+create_infsixeolor+';">'+op.text+'</span></div>';
   }
 }
return create_infoxrs;  }


function add_itens_fr(id, op, conn, objsd){  
var dadd_itens_ocu="";   var dadd_itens_efect="";     var dadd_itens_fra="";   var dadd_itens_fra_co = { class:"", class_b:"" };
if (id && id!="" && op){
const idfadd_itens_fr = document.getElementById(id);
 var dad_icond_itens_fra="";    var dalickstens_fra=""; 
    
if(op.config){
   if (op.config.class && op.config.class!=""){   dadd_itens_fra_co["class"]=op.config.class;   }
   if (op.config.class_b && op.config.class_b!=""){   dadd_itens_fra_co["class_b"]=op.config.class_b;   }
}

if(op.itens){
    if(op.itens.length>=1){  
 for (let is = 0; is < op.itens.length; is++) {
 dalickstens_fra="";  

 if (op.itens[is].disable && op.itens[is].disable==true){    dadd_itens_ocu=" style='pointer-events:none;  opacity:0.6;  ' ";  }


 if(op.itens[is].links){
    if(op.itens[is].links.length>=1){
    dalickstens_fra='<div class="'+dadd_itens_fra_co["class"]+'-links">'; 
    for (let i = 0; i < op.itens[is].links.length; i++) {
        if(op.itens[is].links[i] && op.itens[is].links[i]){ 
         if (op.itens[is].links[i].type && op.itens[is].links[i].type!="" && op.itens[is].links[i].text && op.itens[is].links[i].text!=""){  
         var hredadd_itens_fradd="";  var hredadd_itens_ocul="";
         if(op.itens[is].links[i].link && op.itens[is].links[i].link!=""){         hredadd_itens_fradd=" href='"+op.itens[is].links[i].link+"'";         }
         if(op.itens[is].links[i].id && op.itens[is].links[i].id!=""){         hredadd_itens_fradd=" id='"+op.itens[is].links[i].id+"'";         }
       
if (op.itens[is].links[i].disable && op.itens[is].links[i].disable==true){  hredadd_itens_fradd=""; hredadd_itens_ocul=" style='pointer-events:none;  opacity:0.6;  ' "; }


 dalickstens_fra=dalickstens_fra+"<"+op.itens[is].links[i].type+hredadd_itens_ocul+" class='"+dadd_itens_fra_co["class_b"]+"' "+hredadd_itens_fradd+">"+op.itens[is].links[i].text+"<"+"/"+op.itens[is].links[i].type+">";  
        }
        }
    }
    dalickstens_fra=dalickstens_fra+"</div>";
    }
}

    dad_icond_itens_fra="";   dadd_itens_efect=" ef";   var dad_descnd_itens_fra="";  var dad_titlend_itens_fra="";
    
    if (op.itens[is].icon && op.itens[is].icon!=""){      dad_icond_itens_fra='<div class="'+dadd_itens_fra_co["class"]+'-icon">'+op.itens[is].icon+'</div>';     } 
    
    
      if(op.itens[is].title && op.itens[is].title!=""){  dad_titlend_itens_fra='<h2>'+op.itens[is].title+'</h2>';   }
  if(op.itens[is].desc && op.itens[is].desc!=""){   dad_descnd_itens_fra='<p>'+op.itens[is].desc+'</p>';   }

  var dad_icond_itens_fra_odfd="";
  if(op.itens[is].separate && op.itens[is].separate==true){   dad_icond_itens_fra_odfd="<div class='separate'></div>";   }

    if(op.itens[is].remove_efect && op.itens[is].remove_efect==true){   dadd_itens_efect="";   }

    dadd_itens_fra=dadd_itens_fra+'<div'+create_tooltipr(op.itens[is].tip)+' class="'+dadd_itens_fra_co["class"]+dadd_itens_efect+'" '+dadd_itens_ocu+'>'+create_infoxr(op.itens[is].info)+dad_icond_itens_fra+dad_titlend_itens_fra+dad_descnd_itens_fra+dad_icond_itens_fra_odfd+dalickstens_fra+'</div>';       
  
  } }

idfadd_itens_fr.innerHTML=dadd_itens_fra;
if(conn && conn==true){   idfadd_itens_fr.innerHTML='<div class="'+dadd_itens_fra_co["class"]+'-container">'+dadd_itens_fra+"<div>";   }

}   }

 if(objsd){
  if(objsd.length>=1){  
 for (let sis = 0; sis < objsd.length; sis++) {
  if(objsd[sis].id && objsd[sis].id!="" && objsd[sis].value && objsd[sis].value!=""){
if(document.getElementById(objsd[sis].id)){ document.getElementById(objsd[sis].id).innerHTML=objsd[sis].value;  }
  }
 }
  }     }
 
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



   document.body.onload=function(){   showPage();   };


    // Adicionar efeito de carregamento suave
    window.addEventListener('load', function() {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.5s';
      
      setTimeout(function() {
        document.body.style.opacity = '1';
      }, 100);
    });
