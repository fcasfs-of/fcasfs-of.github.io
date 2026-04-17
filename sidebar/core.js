var initSidebar_stg = document.createElement("style");
initSidebar_stg.innerHTML='      :root {      --transition-speed: 0.4s;      --transition-curve: cubic-bezier(0.4, 0, 0.2, 1);    }    .sidebar {   user-select:none;    position: fixed; top: 0;  bottom: 0;    width: 320px; z-index: 1000;    transition: var(--transition-speed) var(--transition-curve);    box-shadow: 15px 0 35px rgba(0,0,0,0.1);    overflow:auto;  }   .sidebar.left{   left:0;   top: 0;  bottom: 0;  }    .sidebar.right{   right:0;  top: 0;  bottom: 0;  }    .sidebar.center{  top: 50%;    left: 50%;    transform: translate(-50%, -50%);   width: 80%;    height: 60%;   }    .left.sidebar-closed { transform: translateX(-105%); }   .right.sidebar-closed { transform: translateX(105%); }     .center.sidebar-closed {   display:none;  }   .sidebar-nav, .sidebar-nav .nav-item {  padding:6px;  }    .sidebar-inner { height: 100%; display: flex; flex-direction: column; }   .theme-light { background: #ffffff; color: #1e293b; --accent: #4f46e5; --muted: #64748b; --hover: #f1f5f9; }   .theme-dark { background: #0f172a; color: #f8fafc; --accent: #818cf8; --muted: #94a3b8; --hover: #1e293b; }    .sidebar-header {       padding: 30px 20px; display: flex; justify-content: space-between; align-items: center;    }  .brand { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 1.2rem; }   .brand-logo { background: var(--accent); color: white; padding: 4px 10px; border-radius: 8px; }    .brand-logo svg {  position: relative;    top: 3px;  }   .nav-item {    display: flex; align-items: center; gap: 16px;    padding: 14px 20px; margin: 4px 15px; border-radius: 12px;    transition: 0.3s;    overflow:auto;    }     .nav-item.is-clickable { cursor: pointer; }   .nav-item.is-clickable:hover { background: var(--hover); }    .nav-item.is-clickable:hover .item-title { color: var(--accent); }    .nav-item.not-clickable {    cursor: default; opacity: 0.6; margin-top: 25px; pointer-events: none;     }     .item-icon { color: var(--accent); display: flex; align-items: center; }    .item-content { display: flex; flex-direction: column; }    .item-title { font-weight: 600; font-size: 0.95rem; }    .item-desc { font-size: 0.75rem; color: var(--muted); }    .sidebar-trigger { position: fixed; top: 20px; left: 20px; background: #0f172a; color: white; border: none; padding: 12px; border-radius: 10px; cursor: pointer; }    .close-x { background: none; border: none; font-size: 1.8rem; color: inherit; cursor: pointer; }   .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); display: none; z-index: 999999; }     .overlay.activeleft, .overlay.active { display: block; }   .overlay.activecenter, .overlay.activeright { display: block; }     .close-x svg path {  fill:#444;   }    .close-x:hover svg path {  fill:#ccc;   }    @media (max-width: 480px) { .sidebar { width: 85%; }   }     ';  
document.getElementsByTagName("head")[0].appendChild(initSidebar_stg);


function initSidebar_close(id, style) {
  if (!id || !style) return;
  const sidebar_obj = document.getElementById(id);
  if (!sidebar_obj) return;
  const sidebarList = sidebar_obj.getElementsByClassName('main-sidebar');
  const overlayList = sidebar_obj.getElementsByClassName('sidebar-overlay');
  const sidebar = sidebarList.length > 0 ? sidebarList[0] : null;
  const overlay = overlayList.length > 0 ? overlayList[0] : null;
  if (sidebar) {    sidebar.classList.remove('sidebar-closed');  }
  if (overlay) {    overlay.classList.remove('active' + style);  }
}

function initSidebar_open(id, style) {
  if (!id || !style) return;
  const sidebar_obj = document.getElementById(id);
  if (!sidebar_obj) return;
  const sidebarList = sidebar_obj.getElementsByClassName('main-sidebar');
  const overlayList = sidebar_obj.getElementsByClassName('sidebar-overlay');
  const sidebar = sidebarList.length > 0 ? sidebarList[0] : null;
  const overlay = overlayList.length > 0 ? overlayList[0] : null;
  if (sidebar) {    sidebar.classList.add('sidebar-closed');  }
  if (overlay) {    overlay.classList.add('active' + style);  }
}



function initSidebar(id, style, menuData = [], theme = 'light') {
  if (!id || !style) return;
  const sidebar_obj = document.getElementById(id);
  if (!sidebar_obj) return;
  const sidebarList = sidebar_obj.getElementsByClassName('main-sidebar');
  const navList = sidebar_obj.getElementsByClassName('sidebar-nav');
  if (sidebarList.length === 0 || navList.length === 0) return;
  const sidebar = sidebarList[0];
  const nav = navList[0];
  nav.innerHTML = "";
    if (theme === "dark") {
    sidebar.classList.add('theme-dark');
    sidebar.classList.remove('theme-light');
  } else {
    sidebar.classList.add('theme-light');
    sidebar.classList.remove('theme-dark');
  }
  menuData.forEach(item => {
    const labelText = item.label || "Sem título";
    const canClick = item.onClick ? true : false;
    const div = document.createElement('div');
    div.className = `nav-item ${canClick ? 'is-clickable' : 'not-clickable'}`;
    div.innerHTML = `
        ${item.icon ? `<div class="item-icon">${item.icon}</div>` : ''}
        <div class="item-content">
            <span class="item-title">${labelText}</span>
            ${item.desc ? `<span class="item-desc">${item.desc}</span>` : ''}
        </div>
    `;
    if (canClick) {
      div.addEventListener('click', () => {        item.onClick();            initSidebar_close(id, style);      });
    }
    nav.appendChild(div);
  });
}


function initSidebar_theme(id, theme = 'light') {
  if (!id) return;
  const sidebar_obj = document.getElementById(id);
  if (!sidebar_obj) return;
  const sidebarList = sidebar_obj.getElementsByClassName('main-sidebar');
  if (sidebarList.length === 0) return;
  const sidebar = sidebarList[0];
  if (theme === "dark") {    sidebar.classList.add('theme-dark');    sidebar.classList.remove('theme-light');  } else {    sidebar.classList.add('theme-light');    sidebar.classList.remove('theme-dark');  }
}


function setup_slidef(btn, id, list = [], title = "", icon = "", theme = 'light', typ = "left", callf) {
  var setup_slide_style = "left";  var setup_slidef_logo = "";
  if (typ == "right") { setup_slide_style = "right"; }
  if (typ == "center") { setup_slide_style = "center"; }
  if (icon && icon != "") { setup_slidef_logo = '<div class="brand-logo">' + icon + '</div>'; }
  if (list && id && id != "" && btn && btn != "") {
    var setup_slidefddf = document.getElementById(id);
    if (setup_slidefddf) {
      setup_slidefddf.innerHTML = "";
      setup_slidefddf.innerHTML = '<aside class="main-sidebar sidebar ' + setup_slide_style + ' sidebar-closed">    <div class="sidebar-inner">        <header class="sidebar-header">            <div class="brand">                ' + setup_slidef_logo + '                <span>' + title + '</span>          </div>            <button class="sidebar-close close-x"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>        </header>        <nav class="sidebar-nav"></nav>   <br/><br/>   </div></aside><div class="sidebar-overlay"></div>';
      const overlayList = setup_slidefddf.getElementsByClassName('sidebar-overlay');
      const overlay = overlayList.length > 0 ? overlayList[0] : null;
      const btn_copene = document.getElementById(btn);
      const navList = setup_slidefddf.getElementsByClassName('sidebar-nav');
      const nav = navList.length > 0 ? navList[0] : null;
      if (btn_copene) {
        btn_copene.onclick = function() {
          if (typeof callf === 'function') {
            callf({
              active: function(targetId) {
                if (targetId && nav) {
                  const items = nav.getElementsByClassName("nav-item");
                  if (items[targetId]) {                    items[targetId].style.pointerEvents = "auto";                    items[targetId].style.opacity = "1";                  }
                }
              },
              close: function() { initSidebar_close(id, setup_slide_style); },
              open: function() { initSidebar_open(id, setup_slide_style); },
              obj: nav
            });
          }
          initSidebar_open(id, setup_slide_style);
        };
      }
      const btn_closeList = setup_slidefddf.getElementsByClassName('sidebar-close');
      const btn_close = btn_closeList.length > 0 ? btn_closeList[0] : null;
      if (btn_close) {
        btn_close.onclick = function() {          initSidebar_close(id, setup_slide_style);        };
      }
      if (overlay) {
        overlay.onclick = function() {          initSidebar_close(id, setup_slide_style);        };
      }
      initSidebar(id, setup_slide_style, list, theme);
    }
  }
}

