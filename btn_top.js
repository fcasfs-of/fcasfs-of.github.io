(function() {
const btn_srltop = document.createElement('button');
btn_srltop.classList.add('scroll-top-btn');
btn_srltop.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
document.body.appendChild(btn_srltop);

document.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    btn_srltop.classList.add('visible');
  } else {
    btn_srltop.classList.remove('visible');
  }
});

btn_srltop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

})();

