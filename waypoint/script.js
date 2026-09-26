function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.rail-link').forEach((l) => l.classList.remove('active'));
  const link = document.querySelector('.rail-link[data-screen="' + id + '"]');
  if (link) link.classList.add('active');

  document.getElementById('main').scrollTo(0, 0);
  window.scrollTo(0, 0);
}

document.querySelectorAll('.rail-link').forEach((link) => {
  link.addEventListener('click', () => showScreen(link.getAttribute('data-screen')));
});

document.querySelectorAll('[data-goto]').forEach((btn) => {
  btn.addEventListener('click', () => showScreen(btn.getAttribute('data-goto')));
});

function switchAuth(which) {
  document.getElementById('loginForm').style.display = which === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = which === 'register' ? 'block' : 'none';
  document.getElementById('tabLogin').style.background = which === 'login' ? 'var(--ink)' : 'transparent';
  document.getElementById('tabLogin').style.color = which === 'login' ? '#fff' : 'var(--muted)';
  document.getElementById('tabRegister').style.background = which === 'register' ? 'var(--ink)' : 'transparent';
  document.getElementById('tabRegister').style.color = which === 'register' ? '#fff' : 'var(--muted)';
}

showScreen('s1');
