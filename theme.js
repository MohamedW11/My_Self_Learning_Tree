(function(){
  const saved = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', saved || 'dark');

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if(!btn) return;
    function updateLabel(){
      const t = document.documentElement.getAttribute('data-theme');
      btn.textContent = t === 'dark' ? 'Light' : 'Dark';
    }
    updateLabel();
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateLabel();
    });
  });
})();
