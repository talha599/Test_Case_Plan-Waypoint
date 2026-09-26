function showScreen(id) {
  const target = document.getElementById(id);
  if (!target) return;

  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  target.classList.add('active');

  document.querySelectorAll('.rail-link').forEach((l) => l.classList.remove('active'));
  const link = document.querySelector('.rail-link[data-screen="' + id + '"]');
  if (link) link.classList.add('active');

  const main = document.getElementById('main');
  if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const rail = document.getElementById('rail');
  if (menuToggle && rail && window.innerWidth <= 768) {
    rail.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('active');
  }
}

document.querySelectorAll('.rail-link').forEach((link) => {
  link.addEventListener('click', () => showScreen(link.getAttribute('data-screen')));
});

document.querySelectorAll('[data-goto]').forEach((btn) => {
  btn.addEventListener('click', () => showScreen(btn.getAttribute('data-goto')));
});

const menuToggle = document.querySelector('.mobile-menu-toggle');
const rail = document.getElementById('rail');
if (menuToggle && rail) {
  menuToggle.addEventListener('click', () => {
    const isOpen = rail.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    const clickedInsideRail = rail.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);
    if (!clickedInsideRail && !clickedToggle && rail.classList.contains('open')) {
      rail.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function switchAuth(which) {
  document.getElementById('loginForm').style.display = which === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = which === 'register' ? 'block' : 'none';
  document.getElementById('tabLogin').style.background = which === 'login' ? 'var(--ink)' : 'transparent';
  document.getElementById('tabLogin').style.color = which === 'login' ? '#fff' : 'var(--muted)';
  document.getElementById('tabRegister').style.background = which === 'register' ? 'var(--ink)' : 'transparent';
  document.getElementById('tabRegister').style.color = which === 'register' ? '#fff' : 'var(--muted)';
}

showScreen('s1');
