var initSidebar_stg = document.createElement("style");
initSidebar_stg.innerHTML='      :root {      --transition-speed: 0.4s;      --transition-curve: cubic-bezier(0.4, 0, 0.2, 1);    }    .sidebar {   user-select:none;    position: fixed; top: 0;  bottom: 0;    width: 320px;  z-index: 9999;    transition: var(--transition-speed) var(--transition-curve);    box-shadow: 15px 0 35px rgba(0,0,0,0.1);    overflow:auto;  }   .sidebar.left{   left:0;   top: 0;  bottom: 0;  }    .sidebar.right{   right:0;  top: 0;  bottom: 0;  }    .sidebar.center{  top: 50%;    left: 50%;    transform: translate(-50%, -50%);   width: 80%;    height: 60%;   }    .left.sidebar-closed { transform: translateX(-105%); }   .right.sidebar-closed { transform: translateX(105%); }     .center.sidebar-closed {   display:none;  }   .sidebar-nav, .sidebar-nav .nav-item {  padding:6px;  }    .sidebar-inner { height: 100%; display: flex; flex-direction: column; }   .theme-light { background: #ffffff; color: #1e293b; --accent: #4f46e5; --muted: #64748b; --hover: #f1f5f9; }   .theme-dark { background: #0f172a; color: #f8fafc; --accent: #818cf8; --muted: #94a3b8; --hover: #1e293b; }    .sidebar-header {       padding: 30px 20px; display: flex; justify-content: space-between; align-items: center;    }  .brand { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 1.2rem; }   .brand-logo { background: var(--accent); color: white; padding: 4px 10px; border-radius: 8px; }    .brand-logo svg {  position: relative;    top: 3px;  }   .nav-item {    display: flex; align-items: center; gap: 16px;    padding: 14px 20px; margin: 4px 15px; border-radius: 12px;    transition: 0.3s;    overflow:auto;    }     .nav-item.is-clickable { cursor: pointer; }   .nav-item.is-clickable:hover { background: var(--hover); }    .nav-item.is-clickable:hover .item-title { color: var(--accent); }    .nav-item.not-clickable {    cursor: default; opacity: 0.6; margin-top: 25px; pointer-events: none;     }     .item-icon { color: var(--accent); display: flex; align-items: center; }    .item-content { display: flex; flex-direction: column; }    .item-title { font-weight: 600; font-size: 0.95rem; }    .item-desc { font-size: 0.75rem; color: var(--muted); }    .sidebar-trigger { position: fixed; top: 20px; left: 20px; background: #0f172a; color: white; border: none; padding: 12px; border-radius: 10px; cursor: pointer; }    .sidebar .close-x { background: none; border: none; font-size: 1.8rem; color: inherit; cursor: pointer; }   .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); display: none; z-index: 9990; }     .sidebar-overlay.active { display: block; }   .sidebar .close-x svg path {  fill:#444;   }    .close-x:hover svg path {  fill:#ccc;   }    @media (max-width: 480px) { .sidebar { width: 85%; }   }     ';  
if(document.getElementsByTagName("head")[0]){  document.getElementsByTagName("head")[0].appendChild(initSidebar_stg);  }



(function(){

function initSidebar_close(sidebar_obj){ 
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0]; 
const overlay = sidebar_obj.getElementsByClassName('sidebar-overlay')[0];
if(sidebar){ sidebar.classList.add('sidebar-closed'); }
if(overlay){ overlay.classList.remove('active'); }  
}   }   

function initSidebar_open(sidebar_obj){ 
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0]; 
const overlay = sidebar_obj.getElementsByClassName('sidebar-overlay')[0];
if(sidebar){ sidebar.classList.remove('sidebar-closed'); }
if(overlay){ overlay.classList.add('active'); } 
}  }  


function initSidebar(sidebar_obj, menuData=[], theme = 'light') {
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0]; 
const nav = sidebar_obj.getElementsByClassName('sidebar-nav')[0];
if(sidebar && nav){ 
nav.innerHTML=""; 
sidebar.classList.add('theme-light'); sidebar.classList.remove('theme-dark');
if(theme=="dark"){ sidebar.classList.add('theme-dark'); sidebar.classList.remove('theme-light'); } 
var idex_itenf=0;
menuData.forEach(item => { 
const canClick = item.label && item.onClick; 
const div = document.createElement('div'); 
idex_itenf=idex_itenf+1;
div.className = `nav-item ${idex_itenf} iten${canClick ? 'is-clickable' : 'not-clickable'}`; 
div.innerHTML = ` ${item.icon ? `<div class="item-icon">${item.icon}</div>` : ''} <div class="item-content"> <span class="item-title">${item.label}</span> ${item.desc ? `<span class="item-desc">${item.desc}</span>` : ''} </div> `; 
if (canClick && div) { div.addEventListener('click', () => { item.onClick(); initSidebar_close(sidebar_obj); }); } 
nav.appendChild(div); }); 
} } 
}

function initSidebar_theme(sidebar_obj, theme = 'light') {
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0];
if(sidebar){ 
sidebar.classList.add('theme-light'); sidebar.classList.remove('theme-dark');
if(theme=="dark"){ sidebar.classList.add('theme-dark'); sidebar.classList.remove('theme-light'); } }
} } 


function initSidebar_oac(sidebar_obj, id){ 
if(sidebar_obj && id && id!=""){ 
sidebar_obj.innerHTML=sidebar_obj.innerHTML+"<style>  "+id+" { opacity:1 !important;  pointerevents:auto !important;   } </style>";
}    }


function setup_slidef(btn, id, list=[], title="", icon="", theme = 'light', typ="left", callf){ 
var setup_slide_style="left";  var setup_slidef_logo="";   
if(typ=="right"){ setup_slide_style="right"; } 
if(typ=="center"){ setup_slide_style="center"; }
if(icon && icon!=""){ setup_slidef_logo='<div class="brand-logo">'+icon+'</div>'; }
if(list && id && id!="" && btn && btn!=""){

const setup_slidef_objrc=document.getElementById(id);
if(setup_slidef_objrc){ 
var setup_slide_style_cog="#"+id+" .sidebar-nav .nav-item";  

setup_slidef_objrc.innerHTML='<aside class="sidebar '+setup_slide_style+' sidebar-closed"> <div class="sidebar-inner"> <header class="sidebar-header"> <div class="brand"> '+setup_slidef_logo+' <span>'+title+'</span> </div> <button class="sidebar-close close-x"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path fill="#444" d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></svg></button> </header> <nav class="sidebar-nav"></nav> <br/><br/> </div></aside><span class="sidebar-config"></span><div class="sidebar-overlay"></div>'; 

const overlay = setup_slidef_objrc.getElementsByClassName('sidebar-overlay')[0];
const navItens = setup_slidef_objrc.getElementsByClassName('sidebar-nav')[0];

const config_pp = setup_slidef_objrc.getElementsByClassName('sidebar-config')[0];
config_pp.innerHTML="";

const btn_copene = document.getElementById(btn);
if(btn_copene){ 
btn_copene.onclick = function(){ 
if (typeof callf === 'function') { callf({ active: function(id){ 
 if(id){   initSidebar_oac(config_pp, setup_slide_style_cog+" .iten"+(Number(id)+1)+"");   } 
}, 
close: function(){ initSidebar_close(setup_slidef_objrc); }, 
open: function(){ initSidebar_open(setup_slidef_objrc); }, 
obj: navItens  }); } 
initSidebar_open(setup_slidef_objrc); }; 
}

const btn_close = setup_slidef_objrc.getElementsByClassName('sidebar-close')[0];
if(btn_close){ btn_close.onclick = function(){ initSidebar_close(setup_slidef_objrc); }; }
if(overlay){ overlay.onclick = function(){ initSidebar_close(setup_slidef_objrc); }; }


initSidebar(setup_slidef_objrc, list, theme); 

} } 
}


})();





