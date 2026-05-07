(function() {
  const btn_srltop = document.createElement('button');
    btn_srltop.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
  Object.assign(btn_srltop.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '12px', 
    backgroundColor: '#1a1a1a', 
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    zIndex: '9999',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: '0',
    visibility: 'hidden',
    transform: 'translateY(20px)' 
  });

  document.body.appendChild(btn_srltop);

  document.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      btn_srltop.style.opacity = '1';
      btn_srltop.style.visibility = 'visible';
      btn_srltop.style.transform = 'translateY(0)';
    } else {
      btn_srltop.style.opacity = '0';
      btn_srltop.style.visibility = 'hidden';
      btn_srltop.style.transform = 'translateY(20px)';
    }
  });

  btn_srltop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn_srltop.onmouseover = () => btn_srltop.style.backgroundColor = '#333';
  btn_srltop.onmouseout = () => btn_srltop.style.backgroundColor = '#1a1a1a';
})();

